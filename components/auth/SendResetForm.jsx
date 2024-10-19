'use client' 

import { useState, useEffect } from "react"
import Link from "next/link";
import {reset} from '@/app/lib/actions/reset'
import { useFormState, useFormStatus } from 'react-dom'
import { getMessageFromCode } from "@/app/lib/errors"
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation'


const ResetForm = () => {
    const [error, setError] = useState('');
    const router = useRouter()
    const [result, dispatch] = useFormState(reset, undefined)
    const { pending } = useFormStatus()

    useEffect(() => { 
        if (result) {
          if (result.type === 'error') {
            const errorMessage = getMessageFromCode(result.resultCode);
            setError(errorMessage);
            toast.error(errorMessage);
          } else if(result.type === 'reset'){
            const errorMessage = getMessageFromCode(result.resultCode);
            setError(errorMessage);
            toast.error(errorMessage);
          }
        //   else {
        //     toast.success(getMessageFromCode(result.resultCode))
        //     router.push('/login');
        //     setError('');
        //   }
        }
      }, [result, router])

  return (
    <form action={dispatch} className="flex flex-col space-y-5 mt-5 w-full px-2 sm:px-8">
        <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input required placeholder="example@gmail.com"  name="email" type="email" id="email" className="dark:text-black text-black p-2 border border-gray-300 rounded-md w-full" />
        </div>
    {error && (
        <div className={`p-3 ${result.type === 'reset' ? 'bg-teal-100' : 'bg-red-200'} rounded-md `}>
          <p className={`${result.type === 'reset' ? 'text-green-600' : 'text-red-600'}  font-semibold text-sm flex items-center justify-start gap-3`}>
            {result.type === 'reset' ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
          :
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>}
            {error}</p>
        </div>
      )}
        <br />
        <button type="submit" aria-disabled={pending} className="bg-primary-orange hover:bg-orange-600 text-white p-2 rounded-md font-bold">Send Reset Email</button>


        <div className={`flex items-center justify-center`}>
            <p>back to  <Link href="/auth/login" className="text-primary-orange font-bold">Login</Link></p>
        </div>            
  </form>
  )
}

export default ResetForm