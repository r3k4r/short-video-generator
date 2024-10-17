'use client'

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        const response = await fetch('/api/checkUser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: user?.primaryEmailAddress.emailAddress,
            name: user?.fullName,
            imageURL: user?.imageUrl,
          }),
        });

        if (!response.ok) {
          console.error('Failed to check/create user');
        }
      }else{
        console.log('no user');
      }
    };

    checkUser();
  }, [user]);

  return <div>{children}</div>;
}
