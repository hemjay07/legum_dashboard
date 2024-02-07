import Link from "next/link";

export default function PreviewOfIndividuals({ person }) {
  return (
    <div class="min-h-full  py-6">
      <div class="relative mt-6  w-full rounded-lg border bg-white p-4 shadow-md ">
        <div class="mb-4 flex items-center justify-between">
          <span class="text-xl font-semibold	text-gray-800">
            {person === "users" ? "Individual Users" : "Lawyers"}
          </span>
          <Link
            href={`/${person == "users" ? "users/individualUsers" : "lawyers/individualLawyers"}`}
            class="text-sm font-medium text-[#184CA0] underline"
          >
            View all
          </Link>
        </div>
        <div class="grid  grid-cols-5 justify-between bg-gray-100  px-2 py-2 ">
          <span class="col-span-3 lg:col-span-1">
            <span class="mr-4">#</span>
            <span>Full name</span>
          </span>
          <span class="hidden lg:block">Email Address</span>
          <span class="hidden lg:block">Phone number</span>
          <span class="hidden lg:block">Location</span>
          <span class="col-span-2 flex justify-between lg:col-span-1">
            <span>Questions</span>
            <span>Appointments</span>
          </span>
        </div>
        <div class="divide-y px-2">
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
              <span class=" text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">2</span>
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
              <span class=" text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">3</span>
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
              <span class=" text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">4</span>
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
              <span class=" text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">5</span>
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
              <span class=" text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">5</span>
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
              <span class=" text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">5</span>
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
              <span class=" text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
          <div class="grid grid-cols-5 items-end justify-between py-4 lg:grid-cols-5 ">
            <span class="col-span-3 lg:col-span-1">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">5</span>
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
              <span class=" text-left text-sm	font-medium	 text-gray-500">
                355
              </span>
              <span class=" text-left	text-sm font-medium	 text-gray-500">
                055
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
