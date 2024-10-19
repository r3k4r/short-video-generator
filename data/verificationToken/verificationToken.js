import { prisma } from "@/lib/db";


export const getVerificationTokenByEmail = async (email)=>{
    try{
        const verificationToken = await prisma.verificationToken.findFirst({
            where : { email } 
        })
        return verificationToken;
    }catch(err){
        return err
    }
}
export const getVerificationTokenByToken = async (token)=>{
    try{
        const verificationToken = await prisma.verificationToken.findUnique({
            where : { token } 
        })
        return verificationToken;
    }catch(err){
        return err
    }
}