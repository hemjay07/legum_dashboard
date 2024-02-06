"use client";
import Dropdown from "@/app/components/dropdown";
import { IoDownloadOutline } from "react-icons/io5";
import BackButton from "@/app/components/backButton";
export default function IndividualUsersOrLawywers({ person }) {
  return (
    <div class="min-h-full  py-6">
      <BackButton />
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">{person}</h2>
      <div class="flex justify-between ">
        <div class="flex gap-16">
          <div class="relative">
            <p class="mb-2	text-sm	font-normal text-gray-600">Status</p>
            <Dropdown defaultOption={"All"} others={["Lagos", "Abuja"]} />
          </div>
          <div class="relative">
            <p class="mb-2	text-sm	font-normal text-gray-600">Joined</p>
            <Dropdown defaultOption={"All"} others={["Lagos", "Abuja"]} />
          </div>

          <div class="relative">
            <p class="mb-2	text-sm	 font-normal text-gray-600">View</p>
            <Dropdown defaultOption={"All"} others={["Lagos", "Abuja"]} />
          </div>
        </div>
        <button class="flex  h-12 w-[100px] items-center justify-center gap-1 rounded bg-[#184CA0] text-gray-50">
          <IoDownloadOutline />
          Export
        </button>
      </div>
      <div class="relative mt-12 w-full  rounded-lg border bg-white p-4 shadow-md lg:mt-6 ">
        <div class="grid  grid-cols-5 justify-between bg-gray-100 py-2  pl-2 ">
          <span class="col-span-3 lg:col-span-1">
            <span class="mr-4">#</span>
            <span>Full name</span>
          </span>
          <span class="hidden lg:block">Email Address</span>
          <span class="hidden lg:block">Phone number</span>
          <span class="hidden lg:block">Location</span>
          <span class="col-span-2 flex justify-between lg:col-span-1">
            <span class="flex-1">Questions</span>
            <span class="flex-1">Appointments</span>
          </span>
        </div>
        <div class="max-h-[45vh] divide-y overflow-y-auto pl-2 lg:max-h-[45vh]">
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>{" "}
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>

            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              omobolarinwa@legum.tech
            </span>
            <span class="hidden text-sm font-medium	text-gray-500	 lg:block">
              (+234) 817 582 5515
            </span>
            <span class=" hidden	text-sm	font-medium text-gray-500 lg:block">
              Surulere, Lagos, Nigeria
            </span>
            <span class="col-span-2 flex justify-around lg:col-span-1">
              <span class="flex-1 text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class="flex-1 text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
