"use server";

import { cookies } from "next/headers";

async function setCookies() {
  cookies().set("loggedIn", "true");
}
export default setCookies;
