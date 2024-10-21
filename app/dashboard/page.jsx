'use client'

import EmptyState from "@/components/EmptyState"
import { Button } from "@/components/ui/button"
import { useState } from "react"


const Dashboard = () => {
  const [data, setData] = useState([])


  return (
    <div className='p-4 bg-[#F7F8FA]  w-full h-full rounded-md'>

      {/* HEADER */}
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold'>Dashboard</h1>
        <Button>Create New</Button>
      </div>

      {/* EMPTY STATE */}
      {
        data.length === 0 && (
            <EmptyState /> 
        )
      }
    </div>
  ) 
}

export default Dashboard