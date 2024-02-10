import Link from "next/link";
import "../globals.css";
import { IoMdSearch, IoIosNotifications } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import companyLogo from "../../public/companyLogo.png";
import overviewPic from "../../public/overview.svg";
import userPic from "../../public/users.svg";
import activityPic from "../../public/activity.svg";
import compliancePic from "../../public/compliance.svg";
import subscriptionsPic from "../../public/subscriptions.svg";
import consultationsPic from "../../public/consultations.svg";
import documentAiPic from "../../public/documentAI.svg";
import financialsPic from "../../public/financials.svg";
import securityPic from "../../public/security.svg";
import verificationPic from "../../public/verification.svg";
import reportsPic from "../../public/reports.svg";
import payoutPic from "../../public/payout.svg";

import Image from "next/image";

export default function PagesLayout({ children }) {
  return (
    <div class="nav-list flex">
      <div class="max-w-1/6 min-h-screen w-60 bg-secondary-color px-2 py-8 text-sm font-normal	">
        <div class=" mb-12 flex gap-4 lg:mb-8">
          <Image src={companyLogo} alt="Company Logo" class="w-6 bg-white" />
          <h1 class=" mr-8 whitespace-nowrap text-xl	font-medium text-white">
            Legum Limited
          </h1>
        </div>
        <ul class="flex flex-col   ">
          <li class="flex  gap-3 px-4 py-2  text-white">
            <Image alt="" src={overviewPic}></Image>
            <Link href="/overview ">Overview</Link>
          </li>
          <div class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={userPic}></Image>Users
          </div>

          <li class=" ml-6 border-l-2 py-4 pl-8 text-white lg:py-2">
            <Link href="/users">Individuals</Link>
          </li>
          <li class="mb-4 ml-6 border-l-2 py-4 pl-8  text-white lg:py-2">
            <Link href="/lawyers">Lawyers</Link>
          </li>

          <li class=" flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={activityPic}></Image>{" "}
            <Link href="/activity">Activity</Link>
          </li>
          <li class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={compliancePic}></Image>{" "}
            <Link href="/compliance">Compliance</Link>
          </li>
          <li class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={subscriptionsPic}></Image>{" "}
            <Link href="/subscriptions">Subscriptions</Link>
          </li>
          <li class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={consultationsPic}></Image>{" "}
            <Link href="/consultations">Consultations</Link>
          </li>
          <li class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={documentAiPic}></Image>{" "}
            <Link href="/documentAI">Document AI</Link>
          </li>
          <li class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={financialsPic}></Image>{" "}
            <Link href="/financials">Financials</Link>
          </li>
          <li class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={securityPic}></Image>{" "}
            <Link href="/security">Security</Link>
          </li>
        </ul>
        <div class="mb-2 mt-10 px-4 py-3 text-base text-white lg:mb-1 lg:mt-4  ">
          MANAGEMENT
        </div>
        <ul class=" flex flex-col ">
          <li class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={verificationPic}></Image>{" "}
            <Link href="/verification">Verification</Link>
          </li>
          <li class="flex gap-3 px-4 py-4 text-white lg:py-2">
            <Image alt="" src={reportsPic}></Image>{" "}
            <Link href="/reports">Reports</Link>
          </li>
          <li
            class="lg:py2 flex gap-3 px-4 py-4
               text-white"
          >
            <Image alt="" src={payoutPic}></Image>{" "}
            <Link href="/payout">Payout</Link>
          </li>
        </ul>
      </div>
      <div class="flex h-screen w-full flex-col ">
        <div class="border-b-2 pb-0.5 pt-2.5">
          <div class=" flex justify-between  bg-white px-4  lg:py-2">
            <form class="w-1/2  px-6  ">
              <div class="relative flex  items-center text-gray-400 focus-within:text-gray-600">
                <IoMdSearch class="pointer-events-none absolute ml-3 h-5 w-5" />
                <input
                  type="text"
                  name="search"
                  placeholder="Search for anything"
                  autocomplete="off"
                  aria-label="Search for anything"
                  class=" w-full  rounded border-none py-2 pl-10 pr-3  text-sm font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
            </form>
            <div class="flex gap-4">
              <IoIosNotifications class="h-12 w-12 rounded-full bg-[#F0F2F5]	 p-3" />
              <div class="h-12 w-12 rounded-full bg-[#D9D9D9] "></div>

              <div>
                <p class="flex items-center ">
                  Chioma
                  <RiArrowDropDownLine />
                </p>
                <p>Super admin</p>
              </div>
            </div>
          </div>
        </div>
        <div class="overflow-scrolling-touch overflow-y-auto  px-6">
          {children}
        </div>
      </div>
    </div>
  );
}
