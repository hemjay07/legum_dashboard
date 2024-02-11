"use client";
import BackButton from "@/app/components/backButton";
import BarChart from "@/app/components/bar";

export default function UsersOrLawyersLocations() {
  const data = [
    {
      label: "Individual users",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #113672",
    },
    {
      label: "Lawyers",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #4670B3",
    },
  ];
  return (
    <div class=" h-full py-6">
      <BackButton />
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">
        Surulere, Lagos, Nigeria
      </h2>
      <div>
        <p class="mb-4  text-base	font-semibold	 text-gray-600">Users</p>
        <div class="flex divide-x-2 ">
          <div class="px-6">
            <p class="text-sm font-medium text-gray-500		">No of users</p>
            <p class="text-xl font-semibold">118,015 (9%)</p>
          </div>
          <div class="px-6">
            <p class="text-sm font-medium text-gray-500		">No of lawyers</p>
            <p class="text-xl font-semibold">118,015 (9%)</p>
          </div>
        </div>
        <div class="mt-6 grid lg:grid-cols-3">
          <BarChart title={"New accounts"} data={data} class="lg:col-span-2 " />
        </div>
      </div>
      <div class="py-12">
        <p class="mb-4  text-base	font-semibold	 text-gray-600">Activity</p>{" "}
        <div class="flex divide-x-2 ">
          <div class="px-6 ">
            <p class="text-sm font-medium text-gray-500		">Questions asked</p>
            <p class="text-xl font-semibold">118,015 (9%)</p>
          </div>
          <div class="px-6">
            <p class="text-sm font-medium text-gray-500		">Answers</p>
            <p class="text-xl font-semibold">118,015 (9%)</p>
          </div>
          <div class="px-6">
            <p class="text-sm font-medium text-gray-500		">Upvotes</p>
            <p class="text-xl font-semibold">118,015 (9%)</p>
          </div>
          <div class="px-6">
            <p class="text-sm font-medium text-gray-500		">Downvotes</p>
            <p class="text-xl font-semibold">118,015 (9%)</p>
          </div>
        </div>
        <div class=" mt-6 grid lg:grid-cols-3">
          <BarChart title={"New accounts"} data={data} class="lg:col-span-2" />
        </div>
      </div>
    </div>
  );
}
