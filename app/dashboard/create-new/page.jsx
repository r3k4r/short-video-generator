'use client'

import SelectDuration from "@/components/SelectDuration"
import SelectTopic from "@/components/SelectTopic"
import SelectTStyle from "@/components/SelectTStyle"
import { Button } from "@/components/ui/button"
import { useState } from "react"



const CreateNew = () => {

  const [formData, setFormData] = useState([
    {
      style: '',
      topic: '',
      duration: ''
    }
  ])

  console.log(formData);
  
  

  const onHandleChange = (filedName, fieldValue) => {
      setFormData({
        ...formData,
        [filedName]: fieldValue
      })
    }

  return (
    <div className='p-4 bg-[#F7F8FA]  w-full h-full rounded-md flex flex-col justify-between'>

      {/* HEADER */}
      <div id="header">
        <h2 className='text-xl font-bold'>Create a new video</h2>
      </div>

        <div className='mt-10 '>
        {/* SELECT TOPIC */}
        <SelectTopic  onUserSelect={onHandleChange}/>

        {/* SELECT STYLE */}
        <SelectTStyle onUserSelect={onHandleChange}/>

        {/* SELECT DURATION */}
        <SelectDuration onUserSelect={onHandleChange}/>

        </div>

        {/* CREATE BUTTON */}
        <div className='mt-5'>
          <Button>Create</Button>
        </div>
                    
        </div>
  )
}

export default CreateNew