import { prisma } from "@/lib/db"


export const getTwoFactorTokenByToken = async(token)=>{
   try{
    const token = await prisma.twoFactorToken.findUnique({
        where : {
            token
        }
    })

    return token
   }catch(err){
        console.log("error geting the token by token : " + err)
        return err
   }
}

export const getTwoFactorTokenByEmail = async(email)=>{
   try{
    const token = await prisma.twoFactorToken.findFirst({
        where : {
            email
        }
    })

    return token
   }catch(err){
        console.log("error geting the token by email : " + err)
        return err
   }
}