import {prisma} from '@/app/lib/db'


export const GetProfileByEmail = async (email) => {
    try{
    const profile = await prisma.profile.findUnique({
        where : {email}
    })
    return profile; 
    }catch(err){
        console.log("couldnt get profile " + err)
        return err
    }

}
