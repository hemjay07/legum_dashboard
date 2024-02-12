"use client";
import BackButton from "./backButton";
import Input from "./input";
import barNumber from "@/public/barNumber.svg";
import barCertificate from "@/public/barCertificate.svg";
import Image from "next/image";

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
        <div class="w-[250px]">
          <Input
            type="text"
            placeholder={"Enter first name"}
            id="firstName"
            width={250}
            label={"First Name"}
          />
        </div>

        <Input
          type="text"
          placeholder={" Enter last name"}
          id="lastName"
          width={250}
          label={"Last Name"}
        />
        <Input
          type="text"
          placeholder={" Enter email address"}
          id="emailAddress"
          width={250}
          label={"Email Address"}
        />
        <Input
          type="text"
          placeholder={" Enter phone number"}
          id="phoneNumber"
          width={250}
          label={"Phone Number"}
        />
      </div>
      {person == "Lawyer" && (
        <div>
          <h2 class=" my-6 text-xl font-semibold text-gray-800	">
            Professional details
          </h2>
          <div class="grid grid-cols-2 gap-6">
            <div class="relative">
              <Input label={"Bar number"} type={"text"} id={"barNumber"} />
              <Image
                alt=""
                src={barNumber}
                class="absolute right-4 top-[40%]"
              />
            </div>
            <Input
              label={"Years of experience"}
              type={"text"}
              id={"yearsOfExperience"}
            />
          </div>
          <Image alt="" src={barCertificate} class="mr-2 inline " />
          <span class="text-sm text-[#184CA0] underline">
            Bola's bar certificate
          </span>
        </div>
      )}
      <h2 class=" mb-6 mt-16 text-xl font-semibold text-gray-800	">Activity</h2>
      <div class="grid grid-cols-3">
        <Input
          type="text"
          placeholder={"SCN0000000"}
          id="questions"
          width={160}
          label={"Questions asked"}
        />
        <div class="w-[160px]">
          <Input
            type="text"
            placeholder={"SCN0000000"}
            id="upvotes"
            width={160}
            label={"Upvotes"}
          />
        </div>
        <Input
          type="text"
          placeholder={"SCN0000000"}
          id="downvotes"
          width={160}
          label={"Downvotes"}
        />
        <Input
          type="text"
          placeholder={"SCN0000000"}
          id="appointmentsBooked"
          width={160}
          label={"Appointments booked"}
        />
        <Input
          type="text"
          placeholder={"SCN0000000"}
          id="appointmentsCompleted"
          width={160}
          label={"Appointments completed"}
        />
      </div>
      {person == "Lawyer" && (
        <div>
          <h2 class=" mb-6 mt-16 text-xl font-semibold text-gray-800	">
            Payment details{" "}
          </h2>
          <div class="grid grid-cols-3">
            <Input
              type="text"
              placeholder={"0123456789"}
              id="questions"
              width={160}
              label={"Account number"}
            />
            <div class="w-[160px]">
              <Input
                type="text"
                placeholder={"Access Bank"}
                id="upvotes"
                width={160}
                label={"Bank"}
              />
            </div>
          </div>
          <h2 class=" mb-6 mt-16 text-xl font-semibold text-gray-800	">
            Consultations{" "}
          </h2>
          <div class="grid grid-cols-3 justify-between bg-gray-100  px-2 py-2 ">
            <span class="">
              <span class="mr-4">#</span>
              <span>Location</span>
            </span>
            <span class="">Date</span>
            <span class="">Amount earned (NGN)</span>
          </div>{" "}
          <div class="max-h-[55vh] divide-y overflow-y-auto pl-2 lg:max-h-[45vh]">
            <div class=" grid grid-cols-3 items-end justify-between py-4 ">
              <span class="">
                <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
                <span class="text-sm font-medium	text-gray-800	">
                  Omobolarinwa Jagun{" "}
                </span>
              </span>

              <span class="text-left text-sm	font-medium	 text-gray-500">
                15 May 2020 9:30 am{" "}
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                40,000{" "}
              </span>
            </div>
            <div class=" grid grid-cols-3 items-end justify-between py-4 ">
              <span class="">
                <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
                <span class="text-sm font-medium	text-gray-800	">
                  Omobolarinwa Jagun{" "}
                </span>
              </span>

              <span class="text-left text-sm	font-medium	 text-gray-500">
                15 May 2020 9:30 am{" "}
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                40,000{" "}
              </span>
            </div>
            <div class=" grid grid-cols-3 items-end justify-between py-4 ">
              <span class="">
                <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
                <span class="text-sm font-medium	text-gray-800	">
                  Omobolarinwa Jagun{" "}
                </span>
              </span>

              <span class="text-left text-sm	font-medium	 text-gray-500">
                15 May 2020 9:30 am{" "}
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                40,000{" "}
              </span>
            </div>
            <div class=" grid grid-cols-3 items-end justify-between py-4 ">
              <span class="">
                <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
                <span class="text-sm font-medium	text-gray-800	">
                  Omobolarinwa Jagun{" "}
                </span>
              </span>

              <span class="text-left text-sm	font-medium	 text-gray-500">
                15 May 2020 9:30 am{" "}
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                40,000{" "}
              </span>
            </div>
            <div class=" grid grid-cols-3 items-end justify-between py-4 ">
              <span class="">
                <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
                <span class="text-sm font-medium	text-gray-800	">
                  Omobolarinwa Jagun{" "}
                </span>
              </span>

              <span class="text-left text-sm	font-medium	 text-gray-500">
                15 May 2020 9:30 am{" "}
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                40,000{" "}
              </span>
            </div>
            <div class=" grid grid-cols-3 items-end justify-between py-4 ">
              <span class="">
                <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
                <span class="text-sm font-medium	text-gray-800	">
                  Omobolarinwa Jagun
                </span>
              </span>

              <span class="text-left text-sm	font-medium	 text-gray-500">
                15 May 2020 9:30 am
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                40,000
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
