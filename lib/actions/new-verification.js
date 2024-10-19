'use server'


import { getVerificationTokenByToken } from "@/data/verificationToken/verificationToken";
import { ResultCode } from "../errors";
import { getUserByEmail } from "@/data/user";
import { prisma } from "../db";


export const newVerification = async (token) => {
    const existingToken = await getVerificationTokenByToken(token) 

    if(!existingToken){
        return {
            type: 'error',
            resultCode: ResultCode.TokenExisting,
        }
    }

    const hasExpired = new Date(existingToken.expires) < new Date()

    if(hasExpired){
        return{
            type : 'error',
            resultCode: ResultCode.ExpiredToken,
        }
    }

    const existingUser = await getUserByEmail(existingToken.email)

    if(!existingUser){
        return{
            type : 'error',
            resultCode: ResultCode.UserDoesNotExist,
        }
    }

    await prisma.user.update({
        where : { id : existingUser.id },
        data : {
            emailVerified : new Date(),
            email : existingToken.email
        }
    })

    await prisma.verificationToken.delete({
        where : { id : existingToken.id }
    })
    return { 
        type : 'success',
        resultCode : ResultCode.EmailVerified
    }
}