'use client' 

import { useState, useEffect } from "react"
import Social from "../Social";
import Link from "next/link";
import { login } from "@/lib/actions/login";
import { useFormState, useFormStatus } from 'react-dom'
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/navigation'
import { getMessageFromCode } from "@/lib/errors";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/solid";



const LoginForm = () => {
    const [passwordShown, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter()
    const [twoFactor, setTwoFactor] = useState(false)
    const [result, dispatch] = useFormState(login, undefined)
    const { pending } = useFormStatus()

    useEffect(() => {
        if (result) {
          if (result?.type === 'error') {
            const errorMessage = getMessageFromCode(result?.resultCode);
            setError(errorMessage);
            toast.error(errorMessage);
          }else if(result?.twoFactor === "seccess" && result?.type === 'verification'){
            setTwoFactor(true)
            const errorMessage = getMessageFromCode(result?.resultCode);
            setError(errorMessage);
            toast.error(errorMessage);
        }else if(result?.type === 'verification'){
            const errorMessage = getMessageFromCode(result?.resultCode);
            setError(errorMessage);
            toast.error(errorMessage);
          }else {
            toast.success(getMessageFromCode(result?.resultCode))
            router.push('/');
            setError('');
          }
        }
      }, [result, router])

  return (
    <form action={dispatch} className="flex flex-col space-y-5 mt-5 w-full px-2 sm:px-8">
        <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-semibold">Email</label>
            <input placeholder="example@gmail.com"  name="email" type="email" id="email" className="dark:text-black text-black p-2 border border-gray-300 rounded-md w-full" />
        </div>

        <div className="flex flex-col space-y-1 w-full">
          <div className={`w-full flex items-center justify-between`}>
             <label htmlFor="password" className="text-sm font-semibold">Password</label>
             <Link href='/auth/reset' className="text-sm text-blue-500 font-semibold">Forgot Password?</Link>
          </div>
        <input placeholder="8 character Password"  name="password" type={passwordShown ? "text" : "password"} id="password" className="peer p-2 border border-gray-300 rounded-md w-full dark:text-black text-black" />
        <i className={`absolute ${error? "left-[290px] sm:left-[405px] bottom-[355px]" : "left-[290px] sm:left-[405px] bottom-[288px]"} text-gray-400 peer-focus:text-gray-900`} onClick={() => setShowPassword(!passwordShown)}>
        {passwordShown ? (
            <EyeIcon className="h-5 w-5" />
        ) : (
            <EyeSlashIcon className="h-5 w-5" />
        )}
        </i>
    </div>

    {
      twoFactor && 
      <div className="flex flex-col space-y-1">
        <label htmlFor="code" className="text-sm font-semibold">Code</label>
        <input required  placeholder="Enter the code send to your email" maxLength={6}  name="code" type="text" id="code" className="dark:text-black text-black p-2 border border-gray-300 rounded-md w-full" />
      </div>
    }

    {error && (
        <div className={`p-3 ${result?.type === 'verification' ? 'bg-teal-100' : 'bg-red-200'} rounded-md `}>
          <p className={`${result?.type === 'verification' ? 'text-green-600' : 'text-red-600'}  font-semibold text-sm flex items-center justify-start gap-3`}>
            {result?.type === 'verification' ? 
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

        <button type="submit" aria-disabled={pending} className="bg-primary text-white p-2 rounded-md font-bold">Login</button>

        <div className="flex space-y-1 items-right justify-end text-[15px]">
            <p>Forgot password?</p>
        </div>

        <div className="separator">
          <span>or</span>
        </div>

        <Social />

        <div className={`flex items-center justify-center`}>
            <p>Don't have an account? <Link href="/auth/register" className="text-primary-orange font-bold">Register</Link></p>
        </div>            
  </form>
  )
}

export default LoginForm