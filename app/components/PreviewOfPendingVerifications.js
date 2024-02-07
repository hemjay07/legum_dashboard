import Link from "next/link";

export default function PreviewOfPendingVerifications({ person }) {
  return (
    <div class="h-[380px] w-full overflow-y-auto rounded-lg border bg-white p-4 shadow-md ">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-xl font-semibold	text-gray-800">
          Pending Verification Requests
        </span>
        <Link
          href={`/${person == "users" ? "users/individualUsers" : "lawyers/individualLawyers"}`}
          class="text-sm font-medium text-[#184CA0] underline"
        >
          Verify now
        </Link>
      </div>
      <div class="grid  grid-cols-3 justify-between bg-gray-100  px-2 py-2 ">
        <span class="">
          <span class="mr-4">#</span>
          <span>Full name</span>
        </span>
        <span class="">Email Address</span>
        <span class="">Phone number</span>
      </div>
      <div class="divide-y px-2">
        <div class="grid grid-cols-3 items-end justify-between py-4  ">
          <span class="">
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="text-sm font-medium	text-gray-800	">
              Omobolarinwa Jagun
            </span>
          </span>

          <span class=" 	text-sm	font-medium text-gray-500 ">
            omobolarinwa@legum.tech
          </span>
          <span class=" text-sm font-medium	text-gray-500	 ">
            (+234) 817 582 5515
          </span>
        </div>{" "}
        <div class="grid grid-cols-3 items-end justify-between py-4  ">
          <span class="">
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="text-sm font-medium	text-gray-800	">
              Omobolarinwa Jagun
            </span>
          </span>

          <span class=" 	text-sm	font-medium text-gray-500 ">
            omobolarinwa@legum.tech
          </span>
          <span class=" text-sm font-medium	text-gray-500	 ">
            (+234) 817 582 5515
          </span>
        </div>{" "}
        <div class="grid grid-cols-3 items-end justify-between py-4  ">
          <span class="">
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="text-sm font-medium	text-gray-800	">
              Omobolarinwa Jagun
            </span>
          </span>

          <span class=" 	text-sm	font-medium text-gray-500 ">
            omobolarinwa@legum.tech
          </span>
          <span class=" text-sm font-medium	text-gray-500	 ">
            (+234) 817 582 5515
          </span>
        </div>{" "}
        <div class="grid grid-cols-3 items-end justify-between py-4  ">
          <span class="">
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="text-sm font-medium	text-gray-800	">
              Omobolarinwa Jagun
            </span>
          </span>

          <span class=" 	text-sm	font-medium text-gray-500 ">
            omobolarinwa@legum.tech
          </span>
          <span class=" text-sm font-medium	text-gray-500	 ">
            (+234) 817 582 5515
          </span>
        </div>{" "}
        <div class="grid grid-cols-3 items-end justify-between py-4  ">
          <span class="">
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="text-sm font-medium	text-gray-800	">
              Omobolarinwa Jagun
            </span>
          </span>

          <span class=" 	text-sm	font-medium text-gray-500 ">
            omobolarinwa@legum.tech
          </span>
          <span class=" text-sm font-medium	text-gray-500	 ">
            (+234) 817 582 5515
          </span>
        </div>{" "}
        <div class="grid grid-cols-3 items-end justify-between py-4  ">
          <span class="">
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="text-sm font-medium	text-gray-800	">
              Omobolarinwa Jagun
            </span>
          </span>

          <span class=" 	text-sm	font-medium text-gray-500 ">
            omobolarinwa@legum.tech
          </span>
          <span class=" text-sm font-medium	text-gray-500	 ">
            (+234) 817 582 5515
          </span>
        </div>
      </div>
    </div>
  );
}
