


import NewPassword from "@/components/auth/NewPassword"
import { Suspense } from "react"

const ForgotPassword = () => {
  return (
    <section className={`w-full flex flex-col sm:flex-row items-center justify-center sm:px-16 px-8 sm:py-[200px] py-[200px]`}>
      <Suspense fallback={<div>Loading...</div>}>
         <NewPassword />
      </Suspense>   
    </section>
)
}

export default ForgotPassword