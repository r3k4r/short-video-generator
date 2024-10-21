'use client';

import { signOut, useSession } from 'next-auth/react'
import Link from "next/link";





export default function Home(){
  const { data: session } = useSession();

  return (
    <>
      Home
      <br />
      {
        session ? 
        <>
        <button onClick={signOut}>sig out</button>
        <br />
        <Link href="/dashboard">dashboard</Link>
        </>
        :
        <>
        <Link href="/auth/signin">
          sign in </Link>
          </>
      }
    </>
  )
}

