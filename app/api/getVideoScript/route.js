import { chatSession } from "@/lib/AI-model/AiModel";
import { NextResponse } from "next/server";


export async function POST(req){
    try{
        const {prompt} = await req.json()

        const result = await chatSession.sendMessage(prompt)
        
        return NextResponse.json({'result': JSON.parse(result.response.text())})
    }catch(err){
        return NextResponse.json({'error': err})    }
}