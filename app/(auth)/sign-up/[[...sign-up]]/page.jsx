import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return(
    <div className='w-full h-screen grid grid-cols-1 lg:grid-cols-2 '>
        <div className='hidden lg:block h-full'>
            <Image src='/image.png' alt='' quality={100} width={506} height={506} />
        </div>

        <div className='flex items-center justify-center'>
            <SignUp />
        </div>
    </div> 

  )
}