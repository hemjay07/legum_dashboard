"use client";
import BackButton from "./backButton";

export default function UserOrLawyersProfile({ person }) {
  return (
    <div class="max-w-[800px] py-6">
      <BackButton />
      <h1 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">{person}</h1>
      <div class="h-12 w-12 rounded-full bg-[#D9D9D9] "></div>
      <h2 class=" mt-6 text-xl font-semibold text-gray-800	">
        Personal details
      </h2>
      <div class=" mt-6 grid grid-cols-2">
        <div class="flex flex-col ">
          <label
            class="mb-1 text-sm font-medium		lg:text-gray-500"
            for="firstname"
          >
            First Name
          </label>
          <input
            placeholder="Enter firstname"
            class="mb-6 w-[270px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="text"
            id="username"
          />
        </div>

        <div class="flex flex-col ">
          <label
            class="mb-1 text-sm font-medium		lg:text-gray-500"
            for="lastname"
          >
            Last Name
          </label>
          <input
            placeholder="Enter lastname"
            class="mb-6 w-[270px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="text"
            id="username"
          />
        </div>
        <div class="flex flex-col ">
          <label
            class="mb-1 text-sm font-medium		lg:text-gray-500"
            for="emailAddress"
          >
            Email Address
          </label>
          <input
            placeholder="Enter email"
            class="mb-6 w-[270px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="text"
            id="emailAddress"
          />
        </div>
        <div class="flex flex-col ">
          <label
            class="mb-1 text-sm font-medium		lg:text-gray-500"
            for="phoneNumber"
          >
            Phone number
          </label>
          <input
            placeholder="Enter phone number"
            class="mb-6 w-[270px] rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            type="text"
            id="phoneNumber"
          />
        </div>
      </div>
      <h2 class=" mt-6 text-xl font-semibold text-gray-800	">Activity</h2>
    </div>
  );
}
