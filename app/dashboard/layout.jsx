

import Header from "@/components/Header"
import SideNav from "@/components/SideNav"

const Layout = ({children}) => {
  return (
    <div className='w-full h-full'>

      {/* HEADER */}
      <div className='z-10'>
          <Header />
      </div>

      {/* BODY */}
      <div className='w-full h-full flex '>

        {/* LEFT */}
        <div className="hidden md:block w-56">
              <SideNav />
          </div>

          {/* RIGHT */}
          <div className="w-full p-4">
            {children}
          </div>

      </div>
    </div>
  )
}

export default Layout