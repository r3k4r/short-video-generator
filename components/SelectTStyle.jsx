'use client'

import Image from "next/image"
import { useState } from "react"

const SelectTStyle = ({onUserSelect}) => {
  const styles=[
    {
      name: 'Realistic',
      image: 'https://images.unsplash.com/photo-1721843458829-4773b1cc4c2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Cartoon',
      image: '/cartoon.jpg'
    },
    {
      name: 'Watercolor',
      image: 'https://i.pinimg.com/474x/f3/0f/71/f30f71d378e138a0f768baf0311e172e.jpg'
    },
    {
      name: 'Comic',
      image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91d3065a-6f5a-4363-ad94-f1e38cbbe772/dftnwcc-bda946aa-34ea-4bf7-ba5a-c43a561aa825.jpg/v1/fill/w_1280,h_1921,q_75,strp/ai_comic_book_art_by_blathering_dftnwcc-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyMSIsInBhdGgiOiJcL2ZcLzkxZDMwNjVhLTZmNWEtNDM2My1hZDk0LWYxZTM4Y2JiZTc3MlwvZGZ0bndjYy1iZGE5NDZhYS0zNGVhLTRiZjctYmE1YS1jNDNhNTYxYWE4MjUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.vw0qSSXLkotg_hzhrkMfwKQr3Xy3fnCFnptj7dXSrH8'
    },
    {
      name: 'GTA',
      image: 'https://img.freepik.com/free-photo/hawaii-illustration-retro-comic-style_23-2151771090.jpg?t=st=1729625775~exp=1729629375~hmac=c8541276e3727dce0552a229acb240f32a95bbd515c9bf4350e4d87c1bdcd770&w=1060'
    },
  ]

  const [selectedStyle, setSelectedStyle] = useState('')
  

  return (
    <div className='mt-5'>
      {/* HEADER */}
      <div className=''>
        <h1 className="text-lg text-gray-800 font-medium">Style</h1>
        <p className="text-md text-gray-500 ">Select your video style</p>
      </div>

      {/* STYLES */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-2'>
          {styles.map((item, index) => (
            <div key={index} className={`relative transition-all hover:scale-105 cursor-pointer ring-2 rounded-md ${selectedStyle === item.name ? ' ring-black' : 'ring-transparent'}`}
             onClick={()=>{setSelectedStyle(item.name) 
             onUserSelect('style', item.name)
             }}>
                <img src={item.image} alt={item.name} width={100} height={100}  className={`h-48 object-cover rounded-md w-full relative`} />
                <h2 className="absolute bottom-0 p-1 pl-2 bg-black/70 text-white w-full text-start rounded-b-md">{item.name}</h2>
            </div>
          ))}
          </div>
     </div>
  )
}

export default SelectTStyle