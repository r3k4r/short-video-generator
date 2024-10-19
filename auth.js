import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getUserById } from './data/user/index';
import { getTwoFactorConfirmationByUserId } from "./data/twoFactor-confirmation/two-factor-confirmation";
import { prisma } from "./lib/db";


export const { handlers, signIn, signOut, auth } = NextAuth({
  // cookies : {
  //   sessionToken : {
  //     name: `next-auth.session-token`,
  //   },
  //   options : {
  //     httpOnly : true,
  //     secure : process.env.NODE_ENV === "production",
  //     sameSite : "lax",
  //   }
  // },
  pages :{
    signIn : "auth/login",
    error : "auth/error",
  },
  events :{ 
    async linkAccount({user}){
      await prisma.user.update({
        where : {id : user.id},
        data :{
          emailVerified : new Date()
        }
      })
    }
  },
  callbacks: {
    async signIn({user, account}){
      //allow oAuth without email verification
      if(account?.provider !== "credentials") return true;  

      const existingUser = await getUserById(user.id);


      //prevent sign in without email verification
      if(!existingUser.emailVerified){ return false; }

      //2fa check
      if(existingUser.isTwoFactorEnabled){
        const twoFactorConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id);

        if(!twoFactorConfirmation){
          return false;
        }

        //delete twoFactor confirmation for next sign in
        await prisma.twoFactorConfirmation.delete({
          where : {id : twoFactorConfirmation.id}
        })
      }

      return true
    },
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

        session.user.emailVerified = token?.verify;
        session.user.FirstName = token?.FirstName;
        session.user.LastName = token?.LastName;
        session.user.isTwoFactorEnabled = token?.isTwoFactorEnabled;
        session.user.email  =token?.email

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

       const verifiedEmail = await getUserById(token.sub);
      if (!verifiedEmail) return token;

      token.verify = verifiedEmail?.emailVerified;
      token.FirstName = verifiedEmail?.FirstName;
      token.LastName = verifiedEmail?.LastName;
      token.isTwoFactorEnabled = verifiedEmail?.isTwoFactorEnabled
      token.email = verifiedEmail?.email

      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  ...authConfig,
});