//npm i uuid
import { getVerificationTokenByEmail } from "@/data/verificationToken/verificationToken"
import { getPasswordTokenByEmail } from "@/data/resetPasswordToken/passwordResetToken"
import { getTwoFactorTokenByEmail } from "@/data/twoFactor-token/two-factor-token"
import { v4 as uuidv4 } from "uuid"
import crypto from "crypto"
import { prisma } from "../db"

export const generateVerificationToken = async (email)=>{
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000) //expires the token in 5 minutes

    const existingToken = await getVerificationTokenByEmail(email)

    if(existingToken){
        await prisma.verificationToken.delete({
            where : {
                id : existingToken.id
            }
        })
    }

    const verificationToken = await prisma.verificationToken.create({
        data : {
            email,
            token,
            expires
        }
    })

    return verificationToken
} 


export const generateResetPasswordToken = async(email)=>{
    const token = uuidv4()
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000) //expires the token in 5 minutes

    const existingToken = await getPasswordTokenByEmail(email)
    
    if(existingToken){
        await prisma.resetPasswordToken.delete({
            where : {
                id : existingToken.id
            }
        })
    }

    const PasswordResetToken = await prisma.resetPasswordToken.create({
        data : {
            email,
            token,
            expires
        }
    })

    return PasswordResetToken
}

export const generateTwoFactorToken = async(email)=>{
    const token = crypto.randomInt(100_000, 1_000_000).toString()
    const expires = new Date(new Date().getTime() + 5 * 60 * 1000) //expires the token in 5 minutes

    const existingToken = await getTwoFactorTokenByEmail(email)

    if(existingToken){
        await prisma.twoFactorToken.delete({
            where : {
                id : existingToken.id
            }
        })
    }

    const twoFactorToken = await prisma.twoFactorToken.create({
        data : {
            email,
            token,
            expires
        }
    })

    return twoFactorToken
}