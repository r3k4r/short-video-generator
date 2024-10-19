'use client'

import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Provider({ children }) {
  const { user } = useUser();
  

  useEffect(() => {
    const checkUser = async () => {
      if (user) {
        try {
          const response = await fetch('/api/checkUser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: user.primaryEmailAddress?.emailAddress,
              name: user.fullName,
              imageURL: user.imageUrl,
            }),
          });

          if (!response.ok) {
            console.error('Failed to check/create user');
          } else {
            console.log('User checked/created successfully');
          }
        } catch (error) {
          console.error('Error during user check:', error);
        }
      } else {
        console.log('No user signed in');
      }
    };

    checkUser();
  }, [user]);

  return <div>{children}</div>;
}
