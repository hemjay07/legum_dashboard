"use client";
import "./globals.css";
import Input from "./components/input";
import Image from "next/image";
import welcomePic from "../public/welcomeToLegum.jpg";
import { useRouter } from "next/navigation";
export default function SignIn() {
  const router = useRouter();

  const handleClick = () => {
    // Navigate to the specific page
    router.push("/overview");
  };
  return (
    <div class=" h-screen flex-col   p-8 ">
      <div class="relative h-full justify-between lg:flex lg:flex-row">
        <div class=" relative h-full lg:-mr-32 lg:ml-8  lg:w-1/2 lg:px-6">
          <h1 class="absolute inset-0 top-12 flex justify-center text-center text-5xl font-semibold lg:top-20">
            Welcome to <br /> Legum Limited{" "}
          </h1>
          <Image alt="" class=" h-full w-full" src={welcomePic} />
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
          />
          <Input
            type="text"
            placeholder={"Password"}
            id="questions"
            label={"Enter password"}
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
