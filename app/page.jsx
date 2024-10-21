'use client';

import { signOut } from 'next-auth/react'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";



export default function Home(){

  
  return (
    <>
      Home
    <button onClick={signOut}>sig out</button>
    </>
  )
}

