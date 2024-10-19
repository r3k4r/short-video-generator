'use server'


import { prisma } from "@/app/lib/db";
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function ForUpdatingPrompt(prevstate, formData){

    const text_area = formData.get("text_area");
    const tag = formData.get("tag");
    const id = formData.get("id");
    try {
            const prompt = await prisma.prompt.update({
                data : {
                    prompt : text_area,
                    tags : tag
                },
                where : {
                    id : id
                }
            })
    } catch (err) {
        console.log(err);
        return new Response('Internal Server Error', { status: 500 });
    }

    revalidatePath('/', '/profile');
    redirect('/profile')

};