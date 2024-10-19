import GitHub from "next-auth/providers/github"
import  Google  from 'next-auth/providers/google';
import Credentials from "next-auth/providers/credentials" 
import { getUserByEmail } from "./data/user";
import bcrypt from 'bcryptjs'

export default {
  providers: [
    Google({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId:process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Credentials({
      async authorize(credentials){
        const { email, password } = credentials;
        
        if(validateEmail(email) && validatePassword(password)){
          const user = await getUserByEmail(email);
          
          if(!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);
          if(passwordMatch){
            return user;
          }
        }

        return null
        
      }
      
    }),
  ],
}

function validateEmail(email) {
  // Email validation logic here
  // You can use a regular expression or any other method to validate the email format
  // Example regular expression for email validation:
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  // Password validation logic here
  // You can use a regular expression or any other method to validate the password format
  // Example regular expression for password validation:
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
} 