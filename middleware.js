import NextAuth from "next-auth"
import authConfig from "./auth.config"
import {
  AuthRoutes,
  apiAuthPrefix,
  publicRoutes,
  redirectRoute,
} from "@/route"


export const { auth } = NextAuth(authConfig)

export default auth((req)=>{
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth

  const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = AuthRoutes.includes(nextUrl.pathname)

  if(isApiRoute){
    return null
  }

   if(isAuthRoute){
    if(isLoggedIn){
      return Response.redirect(new URL(redirectRoute, nextUrl))
    }
    return null
   }

   if(!isLoggedIn && !isPublicRoute){
    return Response.redirect(new URL("/auth/login", nextUrl))
   }

   return null
})
   

export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
      ],
    }