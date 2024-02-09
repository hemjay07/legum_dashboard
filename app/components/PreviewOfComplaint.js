"use client";

import BackButton from "@/app/components/backButton";
export default function Complaints() {
  return (
    <div class="min-h-full  py-6">
      <BackButton />
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">
        Complaints{" "}
      </h2>

      <div class="relative mt-12 w-full  rounded-lg border bg-white p-4  shadow-md lg:mt-6 ">
        <div class="grid  grid-cols-3  justify-between  bg-gray-100 py-2 pl-2  lg:grid-cols-5 ">
          <span class="">
            <span class="mr-4">#</span>
            <span>Title</span>
          </span>
          <span class=" hidden lg:block">Submitted by</span>
          <span class=" hidden lg:block">Date</span>
          <span class="">Status</span>
          <span class="">View status</span>
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
              15 May 2020 9:30 am
            </span>

            <button class="w-[80px] rounded-3xl bg-[#FBE2B7] py-2 text-sm text-[#AD6F07] ">
              Pending
            </button>
            <button class="w-[66px] bg-[#101928] py-3 text-sm text-white">
              Veiw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
