

import Header from "@/components/Header"
import SideNav from "@/components/SideNav"

const Layout = ({children}) => {
  return (
    <div className=''>

      {/* HEADER */}
      <div className='z-10'>
          <Header />
      </div>

      {/* BODY */}
      <div className='w-full h-screen flex '>

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