'use client'

import Link from "next/link"
import { SyncLoader } from "react-spinners"
import { useSearchParams } from "next/navigation"
import { useCallback, useEffect, useState } from "react"
import { newVerification } from "@/lib/actions/new-verification"
import { getMessageFromCode } from "@/lib/errors"

export default function NewVerificationForm(){
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const params = useSearchParams()
    const token = params.get("token")
    const [loading, setLoading] = useState(true)


    const onSubmit = useCallback(()=>{
        if(!token) {
            setError("Invalid Token")
            return;
        }
        newVerification(token).then(result => {
            if(result.type === 'error'){
                const errorMessage = getMessageFromCode(result.resultCode);
                setSuccess('')
                setLoading(false)
                setError(errorMessage)
            }else if(result.type === 'success'){
                const sucsessMessage = getMessageFromCode(result.resultCode);
                setError('')
                setLoading(false)
                setSuccess(sucsessMessage)
            }
        }).catch(error => {
            console.error("Error during verification:", error);
        });

    },[token])

    useEffect(()=>{
        onSubmit()
    },[onSubmit])

    
   

    return(
    <section className="w-full flex flex-col items-center justify-center pt-[10%]">
        <div className={`border-2 border-gray-200 bg-white/10 bg-clip-padding backdrop-blur-sm backdrop-filter w-[400px] sm:w-[500px] h-fit p-8 bg-white rounded-lg flex flex-col items-center justify-center`}>
        <h1 className="text-3xl font-bold text-center">Confirming Your Email</h1>
        <p className="text-sm pt-3 text-gray-400 font-semibold text-center">This might take some time</p>
        <br />
            <div className={`flex flex-col items-center justify-center w-full`}>
            {loading ? 
                <SyncLoader />
                    :
                <div className={`pt-7`}>
                    {error &&   
                    <div className={`p-3 bg-red-200 rounded-md`}>
                        <p className={`text-red-600 font-semibold text-sm flex items-center justify-start gap-3`}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
                            </svg>

                            {error}
                        </p>  
                    </div>
                    }

                    {success &&   
                    <div className={`p-3 bg-teal-100 rounded-md `}>
                            <p className={`text-green-600 font-semibold text-sm flex items-center justify-start gap-3`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                {success}
                            </p>  
                    </div>}
                </div>
            }
            </div>
                    
        <br />
        <div className={`w-full flex flex-col items-center justify-center py-5`}>
            <Link className={`green_btn`} href={'/auth/login'}>
            <button >Back to Login</button>
            </Link>  
        </div>
        </div>
    </section>
    )
}


