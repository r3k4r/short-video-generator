'use client'

import CustomLoading from "@/components/CustomLoading"
import SelectDuration from "@/components/SelectDuration"
import SelectTopic from "@/components/SelectTopic"
import SelectTStyle from "@/components/SelectTStyle"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"




const CreateNew = () => {

  const [formData, setFormData] = useState([])
  const [loading, setLoading] = useState(false)
  const [videoScript, setVideoScript] = useState([])
  

  async function generateScript(){
    setLoading(true)
    try{
      const response = await fetch('/api/getVideoScript', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: `write a script to generate ${formData.duration} video on topic: ${formData.topic} along with AI image prompt in ${formData.style} format for each scene and give me result in JSON format with imagePrompt and ContentText as field, No Plain text.`
        })
      })
      const data = await response.json()
      setVideoScript(data.result)
      

      setLoading(false)

    }catch(err){
      console.log("error sending prompt to server:"+ err)
    }
  }


  
  

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
          <Button onClick={generateScript}>Create</Button>
        </div>


        {/* LOADING */}
        <CustomLoading loading={loading}/>
                    
        </div>
  )
}

export default CreateNew