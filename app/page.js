"use client";
import "./globals.css";

import { useState } from "react";
import Input from "./components/input";
import Image from "next/image";
import welcomePic from "../public/welcomeToLegum.svg";
import { useRouter } from "next/navigation";
import setCookies from "./setCookies";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleClick = () => {
    if (username === "Chioma" && password === "admin") {
      setCookies();
      router.push("/overview");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div class=" h-screen flex-col   p-8 ">
      <div class="relative h-full justify-between lg:flex lg:flex-row">
        <div class=" relative h-full lg:-mr-32 lg:ml-8  lg:w-1/2 lg:px-6">
          <h1 class="absolute inset-0 top-12 flex justify-center text-center text-5xl font-semibold lg:top-20">
            Welcome to <br /> Legum Limited{" "}
          </h1>
          <Image
            alt="welcome to legum"
            class=" h-full w-full"
            src={welcomePic}
            priority={true}
          />
        </div>

        <div class=" items:center absolute inset-0 mx-auto my-56 h-[350px] w-4/5 justify-center p-6  lg:relative lg:my-auto lg:h-[500px] lg:w-[450px]">
          <h3
            class="mb-8 text-4xl  font-medium text-gray-900	lg:mb-16
            "
          >
            Sign in
          </h3>

          <Input
            type="text"
            placeholder={"Enter username"}
            id="questions"
            label={"Username"}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            readOnly={false}
          />
          <Input
            type="text"
            placeholder={"Password"}
            id="questions"
            label={"Enter password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            readOnly={false}
          />

          <button
            onClick={handleClick}
            class="w-full rounded-lg bg-primary-color p-3 font-normal text-white"
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}
