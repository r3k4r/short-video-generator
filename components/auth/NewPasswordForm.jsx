'use client' 

import { useState, useEffect } from "react"
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useFormState, useFormStatus } from 'react-dom'
import { getMessageFromCode } from "@/app/lib/errors"
import { toast } from 'react-hot-toast';
import { useRouter, useSearchParams } from 'next/navigation'
import { newPassword } from './../../lib/actions/new-password';


const NewPasswordForm = () => {
  const [passwordShown, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const router = useRouter()
    const [result, dispatch] = useFormState(newPassword, undefined)
    const { pending } = useFormStatus()

    useEffect(() => { 
        if (result) {
          if (result.type === 'error') {
            const errorMessage = getMessageFromCode(result.resultCode);
            setError(errorMessage);
            toast.error(errorMessage);
          } else if(result.type === 'success'){
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
      <input name="token" hidden type="text" value={token}/>
        <div className="flex flex-col space-y-1 w-full">
          <div className={`w-full flex items-center justify-between`}>
             <label htmlFor="password" className="text-sm font-semibold">Password</label>
          </div>
        <input placeholder="8 character Password"  name="password" type={passwordShown ? "text" : "password"} id="password" className="peer p-2 border border-gray-300 rounded-md w-full dark:text-black text-black" />
        <i className={`absolute ${error? "left-[290px] sm:left-[405px] bottom-[313px]" : "left-[290px] sm:left-[405px] bottom-[245px]"} text-gray-400 peer-focus:text-gray-900`} onClick={() => setShowPassword(!passwordShown)}>
        {passwordShown ? (
            <EyeIcon className="h-5 w-5" />
        ) : (
            <EyeSlashIcon className="h-5 w-5" />
        )}
        </i>
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <div className={`w-full flex items-center justify-between`}>
             <label htmlFor="password" className="text-sm font-semibold">Confirm Password</label>
          </div>
        <input placeholder="Confirm Password"  name="Confirmpassword" type={passwordShown ? "text" : "password"} id="password" className="peer p-2 border border-gray-300 rounded-md w-full dark:text-black text-black" />
       </div>
    {error && (
        <div className={`p-3 ${result.type === 'success' ? 'bg-teal-100' : 'bg-red-200'} rounded-md `}>
          <p className={`${result.type === 'success' ? 'text-green-600' : 'text-red-600'}  font-semibold text-sm flex items-center justify-start gap-3`}>
            {result.type === 'success' ? 
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
        <button type="submit" aria-disabled={pending} className="bg-primary-orange hover:bg-orange-600 text-white p-2 rounded-md font-bold">Reset Password</button>


        <div className={`flex items-center justify-center`}>
            <p>back to  <Link href="/auth/login" className="text-primary-orange font-bold">Login</Link></p>
        </div>            
  </form>
  )
}

export default NewPasswordForm