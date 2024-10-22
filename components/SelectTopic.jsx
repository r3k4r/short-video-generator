'use client'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from "react"
import { Textarea } from "./ui/textarea"


const SelectTopic = ({onUserSelect}) => {
  const [selected, setSelected] = useState("")
  const options = ["Custom Prompt" , "Fun Facts", "Motivational", "Bed Time Story", "Random AI Story", "Scary Story", "Historical Facts"]

  return (
    <div className=''>

      {/* HEADER */}
      <div className=''>
        <h1 className="text-lg text-gray-800 font-medium">Content</h1>
        <p className="text-md text-gray-500 ">What is the topic of your video?</p>
      </div>

      {/* DROPDOWN */}
      <div className=''>
        <Select onValueChange={(value)=>{
          setSelected(value)
          value != "Custom Prompt" && onUserSelect('topic', value) 
        }}>
          <SelectTrigger className="w-full mt-2 p-6 lg:text-[16px]">
            <SelectValue placeholder="Content Type" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option, index) => (
              <SelectItem key={index} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* CUSTOM PROMPT SECTION */}
      {
        selected === "Custom Prompt" && (
          <div className=''>
            <Textarea onChange={(e)=>{onUserSelect('topic', e.target.value)}} placeholder="Enter your custom prompt" className="mt-2"/>
          </div>
        )
      }

    </div>
  )
}

export default SelectTopic