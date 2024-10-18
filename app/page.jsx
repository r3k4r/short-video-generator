'use client';
import { Button } from "@/components/ui/button";
import { UserButton, useSession } from "@clerk/nextjs";
import Image from "next/image";
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

