'use client'


import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { ScaleLoader } from "react-spinners"

  
const CustomLoading = ({loading}) => {
  return (
    <div className=''>
        <AlertDialog open={loading}>
            <AlertDialogContent className="w-[90%] md:w-full rounded-lg">
               <div className='flex flex-col items-center justify-center gap-4 p-2'>

                  <ScaleLoader color='#000' loading={loading} size={150} />

                  <div className='flex flex-col items-center justify-center gap-1'>
                    <p className="text-xl font-medium">We're creating your video for you</p>
                    <p className="text-sm text-gray-500">Do not refresh or close the page!</p>
                  </div>

               </div>
            </AlertDialogContent>
        </AlertDialog>

    </div>
  )
}

export default CustomLoading