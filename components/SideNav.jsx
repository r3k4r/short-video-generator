'use client'

import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"



const Menu = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: PanelsTopLeft
  },
  {
    name: 'Create New',
    path: '/dashboard/create-new',
    icon: FileVideo
  },
  {
    name: 'Upgrade',
    path: '/upgrade',
    icon: ShieldPlus
  },
  {
    name: 'Account',
    path: '/account',
    icon: CircleUser
  },
]

const SideNav = () => {

  const path = usePathname()
  
  
  return (
    <div className='p-3 w-full h-full shadow-md'>
      <div className='flex flex-col gap-3'>
        {Menu.map((item, index) => {
          return (
             <Link href={item.path} key={index} className={`flex items-center justufy-center gap-2 p-2 hover:bg-primary hover:text-white rounded-md ${path === item.path ? 'bg-primary text-white' : '' }`} >
                <item.icon size='20' />
                {item.name}
             </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SideNav