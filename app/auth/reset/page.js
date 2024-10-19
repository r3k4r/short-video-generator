import BackButton from '@/app/components/ui/BackButton'
import React from 'react'
import Reset from '@/app/components/auth/SendReset'

const ResetPage = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row items-center justify-center sm:px-16 px-8 sm:py-[200px] py-[200px]">
        <Reset />
   </section>
  )
}

export default ResetPage