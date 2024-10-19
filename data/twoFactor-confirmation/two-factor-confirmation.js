import { prisma } from "@/lib/db"


export const getTwoFactorConfirmationByUserId = async(id)=>{
   try{
    const twofactorConfirmation = await prisma.twoFactorConfirmation.findUnique({
        where : {
            userId : id
        }
    })

    return twofactorConfirmation
   }catch(err){
        console.log("error geting the token by token : " + err)
        return err
   }
} 


   