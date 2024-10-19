import { prisma } from "@/lib/db";



export const getPasswordTokenByToken = async (token) => {
    try{
        const passwordToken = await prisma.resetPasswordToken.findFirst({
            where : {token}
        })

        return passwordToken
    }catch(err){
        return err;
    }
}

export const getPasswordTokenByEmail = async (email)=>{
    try{
        const passwordToken = await prisma.resetPasswordToken.findFirst({
            where : { email } 
        })
        return passwordToken;
    }catch(err){
        return err
    }
}