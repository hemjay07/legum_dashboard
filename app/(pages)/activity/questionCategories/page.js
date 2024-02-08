"use client";
import Dropdown from "@/app/components/dropdown";
import { IoDownloadOutline } from "react-icons/io5";
import BackButton from "@/app/components/backButton";
export default function QuestionCatgories({ person }) {
  return (
    <div class="min-h-full overflow-y-auto py-6">
      <BackButton />
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">
        Question Categories
      </h2>
      <div class="flex justify-between ">
        <div class="flex gap-16">
          <div class="relative">
            <p class="mb-2	text-sm	font-normal text-gray-600">Duration</p>
            <Dropdown defaultOption={"All time"} others={["Lagos", "Abuja"]} />
          </div>
        </div>
      </div>
      <div class="relative mt-12 w-full  rounded-lg border bg-white p-4 shadow-md lg:mt-6 ">
        <div class="grid  grid-cols-6 justify-between bg-gray-100 py-2  pl-2 ">
          <span class="col-span-4 ">
            <span class="mr-4">#</span>
            <span>Category</span>
          </span>
          <span class="">Questions</span>
          <span class="">Percentage (%)</span>
        </div>
        <div class="max-h-[45vh] divide-y overflow-y-auto pl-2 lg:max-h-[45vh]">
          <div class="grid  grid-cols-6 items-end   justify-between py-4  ">
            <span class="col-span-4 ">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">Tenancy </span>
            </span>
            <span class=" text-left text-sm	font-medium	 text-gray-500">
              112,018
            </span>
            <span class=" text-left	text-sm font-medium	 text-gray-500">
              25.05
            </span>
          </div>{" "}
          <div class="grid  grid-cols-6 items-end   justify-between py-4  ">
            <span class="col-span-4 ">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">Property </span>
            </span>
            <span class=" text-left text-sm	font-medium	 text-gray-500">
              112,018
            </span>
            <span class=" text-left	text-sm font-medium	 text-gray-500">
              25.05
            </span>
          </div>{" "}
          <div class="grid  grid-cols-6 items-end   justify-between py-4  ">
            <span class="col-span-4 ">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">Tenancy </span>
            </span>
            <span class=" text-left text-sm	font-medium	 text-gray-500">
              112,018
            </span>
            <span class=" text-left	text-sm font-medium	 text-gray-500">
              25.05
            </span>
          </div>{" "}
          <div class="grid  grid-cols-6 items-end   justify-between py-4  ">
            <span class="col-span-4 ">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">Criminal </span>
            </span>
            <span class=" text-left text-sm	font-medium	 text-gray-500">
              112,018
            </span>
            <span class=" text-left	text-sm font-medium	 text-gray-500">
              25.05
            </span>
          </div>{" "}
          <div class="grid  grid-cols-6 items-end   justify-between py-4  ">
            <span class="col-span-4 ">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">Dispute </span>
            </span>
            <span class=" text-left text-sm	font-medium	 text-gray-500">
              112,018
            </span>
            <span class=" text-left	text-sm font-medium	 text-gray-500">
              25.05
            </span>
          </div>{" "}
          <div class="grid  grid-cols-6 items-end   justify-between py-4  ">
            <span class="col-span-4 ">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">Property </span>
            </span>
            <span class=" text-left text-sm	font-medium	 text-gray-500">
              112,018
            </span>
            <span class=" text-left	text-sm font-medium	 text-gray-500">
              25.05
            </span>
          </div>{" "}
          <div class="grid  grid-cols-6 items-end   justify-between py-4  ">
            <span class="col-span-4 ">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">Corporate </span>
            </span>
            <span class=" text-left text-sm	font-medium	 text-gray-500">
              112,018
            </span>
            <span class=" text-left	text-sm font-medium	 text-gray-500">
              25.05
            </span>
          </div>{" "}
          <div class="grid  grid-cols-6 items-end   justify-between py-4  ">
            <span class="col-span-4 ">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">Civil </span>
            </span>
            <span class=" text-left text-sm	font-medium	 text-gray-500">
              112,018
            </span>
            <span class=" text-left	text-sm font-medium	 text-gray-500">
              25.05
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
