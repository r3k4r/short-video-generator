'use client'

import { signIn } from 'next-auth/react'
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"

const Social = () => {
  const onClick = (provider)=>{
    signIn(provider, {
      callbackUrl : "/"
    })
  }
  return (
    <div className={`flex items-center w-full gap-x-2`}>
        <button 
        onClick={() => onClick("google")}
        className="flex items-center justify-center w-full h-[46px] p-4 text-sm font-semibold text-gray-500 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100">
            <FcGoogle size={25}/>
        </button >  

        <button 
        onClick={() => onClick("github")}
        className="flex items-center justify-center w-full h-[46px] p-4 text-sm font-semibold text-gray-500 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100">
            <FaGithub size={25}/>
        </button >    
    </div>
  )
}

export default Social