import Link from "next/link"



const ErrorCard = () => {
  return (
    <section className=" w-full flex flex-col items-center justify-center">
    <div className={`border-2 border-gray-200 bg-white/10 bg-clip-padding backdrop-blur-sm backdrop-filter w-[400px] sm:w-[500px] h-fit p-5 bg-white rounded-lg flex flex-col items-center justify-center`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-red-600 font-bold">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <br />
      <h1 className="text-3xl font-bold text-center">Oops! Something went wrong!</h1>
      <p className="text-md pt-3 text-gray-400 font-semibold text-center">Email already in use with different provider</p>
        <br />
      <div className={`w-full flex flex-col items-center justify-center`}>
        <Link className={`red_btn`} href={'/auth/login'}>
          <button >Back to Login</button>
        </Link>  
      </div>
    </div>
</section>
  )
}

export default ErrorCard