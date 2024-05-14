import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(req) {
  // console.log(req.nextUrl.pathname);
  // // const response = ;
  // const loggedIn = cookies().get("loggedIn").value;
  // console.log(loggedIn, "lono");
  // if (req.nextUrl.pathname !== "/") {
  //   if (loggedIn !== "true") {
  //     return NextResponse.redirect(new URL("/", req.nextUrl));
  //   }
  // }
  // NextResponse.next();
}
