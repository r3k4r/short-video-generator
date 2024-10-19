'use server'

import { prisma } from '../db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export async function ForCreatingPrompts(prevstate, formData){
    const session = await auth()

    const text_area = formData.get("text_area")
    const tag = formData.get("tag")
    
    try{
        if (!session?.user?.id) {
            return new Response('Unauthorized', { status: 401 })
        }

        const prompt = await prisma.prompt.create({
            data : {
                prompt: text_area,
                tags: tag,
                userId: session?.user?.id
            }
        })


    }catch(err){
        console.log(err)
        return new Response('Internal Server Error', { status: 500 })
    }

    revalidatePath('/');
    redirect('/');

}
 