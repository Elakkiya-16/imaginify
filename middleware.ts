import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
 
const isProtectedRoute= createRouteMatcher(["/","/credits(.*)"]);
export default clerkMiddleware((auth, req) => {
  if(isProtectedRoute(req)){
    auth().protect();
  }
  // Routes that can be accessed while signed out
   
  
});
 
export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.*\\..*|_nextz).*)", "/", "/(api|trpc)(.*)"],
};