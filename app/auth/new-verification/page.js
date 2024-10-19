


import NewVerificationForm from "@/components/auth/NewVerificationForm"
import { Suspense } from "react"

const NewVerification = () => {
  return (
    <section className={`w-full flex items-center justify-center padding`}>
       <Suspense fallback={<div>Loading...</div>}>
         <NewVerificationForm />
       </Suspense>  
    </section>
)
}

export default NewVerification