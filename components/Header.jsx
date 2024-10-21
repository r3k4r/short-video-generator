import Image from "next/image"
import { Button } from "./ui/button"
import { DesktopProfileToggle, MobileProfileToggle } from "./ProfileToggle"
import { auth } from "@/auth"
import Link from "next/link"




const Header = async() => {
  const session = await auth()

  return (
    <div className='flex items-center justify-between p-3 bg-white shadow-md'>

      {/* LOGO */}
          <Link href='/' className="flex items-center justify-start ">
            <Image src='/2.svg' alt='logo' width={50} height={50} />
            <h1 className="text-lg font-bold" >AI Short video</h1>
          </Link>

        {/* NAVIGATION */}
        <div className='flex items-center gap-3'>
            <Button>Dashboard</Button>

            {/* desktop navigation */}
          <div className='sm:flex hidden'>
              {<DesktopProfileToggle session={session}/>}
          </div>

          {/* mobile navigation */}
          <div className='sm:hidden flex relative'>
            {<MobileProfileToggle session={session}/>}   
          </div>
        </div>
    </div>
  )
}

export default Header