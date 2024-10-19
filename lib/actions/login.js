'use server'

import bcrypt from 'bcryptjs'

import {signIn} from '@/auth' 
import { AuthError } from "next-auth";
import { prisma } from '../db';
import { generateVerificationToken, generateTwoFactorToken } from './tokens';
import { getUserByEmail } from '@/data/user';
import { sendVerficationEmail, sendTwoFactorEmail } from '../mail';
import { redirect } from 'next/navigation'
import { getTwoFactorTokenByEmail } from '@/data/twoFactor-token/two-factor-token';
import { ResultCode } from '../errors';
import { getTwoFactorConfirmationByUserId } from '@/data/twoFactor-confirmation/two-factor-confirmation';


export async function login(prevstate, formData){

    const email = formData.get("email")
    const password = formData.get("password")
    const code = formData.get("code")


    const existingUser = await getUserByEmail(email)

    if(!existingUser || !existingUser.email || !existingUser.password){
        return {
            type:'error',
            resultCode: ResultCode.InvalidCredentials,
        }
    }
    const MatchPassword = await bcrypt.compare(password, existingUser.password)

    if(!MatchPassword){
        return {
            type:'error',
            resultCode: ResultCode.InvalidCredentials,
        }
    }

    if(existingUser && MatchPassword && !existingUser.emailVerified){
        //send verification code to email
        const verificationToken = await generateVerificationToken(existingUser.email)
        await sendVerficationEmail(verificationToken.email, verificationToken.token)

        return {
            type: 'verification',
            resultCode: ResultCode.Verification,
        }
    }  

    if(existingUser.isTwoFactorEnabled && existingUser.email){
        if(code){
            const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email)

            if(!twoFactorToken){
                return {
                    type:'error',
                    resultCode: ResultCode.InvalidCode,
                }
            }
            if(twoFactorToken.token !== code){
                return {
                    type:'error',
                    resultCode: ResultCode.InvalidCode,
                }
            }

            const hasExpired = new Date(twoFactorToken.expires) < new Date()

            if(hasExpired){
                return{
                    type:'error',
                    resultCode: ResultCode.ExpiredCode,
                }
            }

            await prisma.twoFactorToken.delete({
                where : {
                    id : twoFactorToken.id
                }
            })

            const exsitingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)

            if(exsitingConfirmation){
                await prisma.twoFactorConfirmation.delete({
                    where :{
                        id : exsitingConfirmation.id
                    }
                })
            }

            await prisma.twoFactorConfirmation.create({
                data : {
                    userId : existingUser.id
                }
            })
        }else{

        const twoFactorToken = await generateTwoFactorToken(existingUser.email)
        await sendTwoFactorEmail(twoFactorToken.email, twoFactorToken.token)

        return {
           type : 'verification',
           resultCode: ResultCode.TwoFactorSend,
           twoFactor : 'seccess'
        }
        }
    }

   try{
   
     await signIn("credentials", 
        {
            email,
            password,
            redirectTo : "/",
        }
     )
   }catch(err){
       if(err instanceof AuthError){
        switch(err.type){
            case "CredentialsSignin" : 
            return {
                type:'error',
                resultCode: ResultCode.InvalidCredentials,
            }
            default: return {
               type:'error',
               resultCode: ResultCode.UnknownError,
            }
        }
       
       }
       throw err
   }
}



 

function validateEmail(email) {
    // Email validation logic here
    // You can use a regular expression or any other method to validate the email format
    // Example regular expression for email validation:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePassword(password) {
    // Password validation logic here
    // You can use a regular expression or any other method to validate the password format
    // Example regular expression for password validation:
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  } 