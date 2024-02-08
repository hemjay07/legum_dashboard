import Link from "next/link";

export default function PreviewOfMostPopularQuestions({ person }) {
  return (
    <div class="h-[380px] w-full overflow-y-auto rounded-lg border bg-white p-4 shadow-md ">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-xl font-semibold	text-gray-800">
          Most Popular Questions{" "}
        </span>
        <Link
          href={`/${person == "users" ? "users/individualUsers" : "lawyers/individualLawyers"}`}
          class="text-sm font-medium text-[#184CA0] underline"
        >
          View all
        </Link>
      </div>
      <div class="flex   justify-between bg-gray-100  px-2 py-2 ">
        <span class=" w-[80%]">
          <span class="mr-4">#</span>
          <span>Full name</span>
        </span>
        <span class="">Upvotes</span>
      </div>
      <div class="divide-y px-2">
        <div class=" flex items-end justify-between py-4  ">
          <span class="w-[80%] overflow-hidden truncate">
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="	text-sm font-medium text-gray-800">
              I made a painting for a gallery show, but they're claiming it's
              too similar to one of their established artist's work. Can they
              stop me from exhibiting it? Jagun
            </span>
          </span>

          <span class=" 	text-sm	font-medium text-gray-500 ">38 </span>
        </div>
      </div>
    </div>
  );
}
