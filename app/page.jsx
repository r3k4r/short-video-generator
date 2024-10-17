'use client';
import { UserButton, useSession } from "@clerk/nextjs";
import Link from "next/link";



export default function Home(){

  const { session } = useSession();
  console.log(session);
  
  return (
    <>
      Home
    {session ? <UserButton /> :  <Link href="/sign-in">sign</Link>}
     
    </>
  )
}

