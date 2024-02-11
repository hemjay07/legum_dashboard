"use client";

import BackButton from "@/app/components/backButton";
import Link from "next/link";
export default function Verification() {
  return (
    <div class="min-h-full  py-6">
      <BackButton />
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">
        Pending Lawyer Verifications
        <span class="ml-4	  rounded-full bg-[#184CA0] px-4 py-2 text-sm font-extrabold text-white">
          101
        </span>
      </h2>

      <div class="relative mt-12 w-full  rounded-lg border bg-white p-4  shadow-md lg:mt-6 ">
        <div class="grid  grid-cols-3  justify-between  bg-gray-100 py-2 pl-2  lg:grid-cols-5 ">
          <span class="">
            <span class="mr-4">#</span>
            <span>Full name</span>
          </span>
          <span class=" hidden lg:block">Email Address</span>
          <span class=" hidden lg:block">Phone number</span>
          <span class="">Account created</span>
          <span class="">Verify status</span>
        </div>
        <div class="max-h-[45vh] divide-y overflow-y-auto pl-2 lg:max-h-[45vh]">
          <div class="grid grid-cols-3  items-center justify-between  py-4  lg:grid-cols-5 ">
            <span class="">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>
            <span class=" hidden text-sm	font-medium	text-gray-500 lg:block ">
              omobolarinwa@legum.tech
            </span>
            <span class=" hidden text-sm font-medium text-gray-500	lg:block	">
              (+234) 817 582 5515
            </span>

            <span class="  text-sm	font-medium	 text-gray-500">
              15 May 2020 9:30 am
            </span>
            <button class="w-[117px] bg-[#101928] py-3 text-sm text-white">
              Verify status
            </button>
            <Link href="./verification/verify">link</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
