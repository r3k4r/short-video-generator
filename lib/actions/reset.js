'use server'

import { getUserByEmail } from "@/data/user"
import { ResultCode } from "@/app/lib/errors"; 
import { generateResetPasswordToken } from "./tokens";
import { sendResetPasswordEmail } from "../mail";
import { prisma } from "../db";


 export const reset = async(prevstate, formData)=>{
    const email = formData.get("email")

    const existingUser = await getUserByEmail(email)

    if(!existingUser){
        return {
            type:'error',
            resultCode: ResultCode.UserDoesNotExist,
        }
    }

    const token = await generateResetPasswordToken(email)
    await sendResetPasswordEmail(token.email, token.token)

    return{
        type: 'reset',
        resultCode: ResultCode.ResetPassword,
    }
 }