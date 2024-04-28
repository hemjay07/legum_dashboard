"use client";

import { useState, useEffect } from "react";

import BackButton from "@/app/components/backButton";
import Link from "next/link";
export default function Verification() {
  // const unverifiedLawyers = analyticsData["lawyer-stats/unverified-lawyer"];
  const [unverifiedLawyers, setUnverifiedLawyers] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://altserver.westeurope.cloudapp.azure.com/api/v1/lawyer-stats/unverified-lawyer`,
          {
            // method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlkcm5zMDk5QGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6Imxhd3llciIsInBob25lX251bWJlciI6IjA5NzkzNDQ2Nzg5IiwidXNlciI6IjY1MWVlMzhlNzlhNDgxZDNiNzI5Yjc0OSIsImlzX3JlZnJlc2hfdG9rZW4iOmZhbHNlLCJleHAiOjE3MDA3NTkxMzMsImlhdCI6MTcwMDE1NDMzM30.miPIX_3xVegPG04BGJjv4NrC7YAGBb0zAjw2PEvzm0k`, // Include the authorization token
            },

            // body: JSON.stringify({ bar_number_verification: "true" }),
          },
        );
        if (!response.ok) {
          const errorData = await response.json(); // Parse the error response
          throw new Error(errorData.message || "Network response was not ok"); // Throw error message from backend
        }

        const data = await response.json();
        if (data.status === "success") {
          setUnverifiedLawyers(data);
        } else {
          setStatus("error");
        }
      } catch (error) {
        console.error("There was a problem with the PUT request:", error); // Handle error
      }
    }
    fetchData();
  }, []);

  return (
    <div class="min-h-full  py-6">
      <BackButton />
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">
        Pending Lawyer Verifications
        <span class="ml-4	  rounded-full bg-[#184CA0] px-4 py-2 text-sm font-extrabold text-white">
          {unverifiedLawyers?.data.lawyer.total}
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
          {unverifiedLawyers?.data.lawyer.users.map((lawyer, index) => {
            return (
              <div
                key={index}
                class="grid grid-cols-3  items-center justify-between  py-4  lg:grid-cols-5 "
              >
                <span class="">
                  <span class="mr-4 text-sm	font-medium	 text-gray-500">
                    {index + 1}
                  </span>
                  <span class="text-sm font-medium	text-gray-800	">
                    {lawyer.last_name} {lawyer.first_name}
                  </span>
                </span>
                <span class=" hidden text-sm	font-medium	text-gray-500 lg:block ">
                  {lawyer.email}{" "}
                </span>
                <span class=" hidden text-sm font-medium text-gray-500	lg:block	">
                  {lawyer.phone_number}{" "}
                </span>

                <span class="  text-sm	font-medium	 text-gray-500">
                  {lawyer.createdAt}
                </span>
                <button class="w-[117px] bg-[#101928] py-3 text-sm text-white">
                  <Link href={`./verification/${lawyer._id}`}>
                    Verify status
                  </Link>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
