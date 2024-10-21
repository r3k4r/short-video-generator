import Link from "next/link"
import { Button } from "./ui/button"


const EmptyState = () => {
  return (
    <div className='flex flex-col p-5 py-24 mt-10 items-center justify-center border-2 border-dashed'>
        <h1 className="text-gray-400">You dont have any video created...!</h1>
        <Link href='/dashboard/create-new' className="font-medium underline">
            Create your first video
        </Link>    
    </div>
  )
}

export default EmptyState