export default function Payout() {
  return (
    <div class="min-h-full  py-6">
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">
        Payout authorisation
      </h2>

      <div class="relative mt-12 w-full  rounded-lg border bg-white p-4  shadow-md lg:mt-6 ">
        <div class="grid  grid-cols-3  justify-between  bg-gray-100 py-2 pl-2  lg:grid-cols-5 ">
          <span class="">
            <span class="mr-4">#</span>
            <span>Full name</span>
          </span>
          <span class=" hidden lg:block">Email address</span>
          <span class=" hidden lg:block">Meeting details</span>
          <span class="">Status</span>
          <span class="">Verify status</span>
        </div>
        <div class="max-h-[45vh] divide-y overflow-y-auto pl-2 lg:max-h-[45vh]">
          <div class="grid grid-cols-3  items-center justify-between  py-4  lg:grid-cols-5 ">
            <span class="">
              <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
              <span class="text-sm font-medium	text-gray-800	">
                Omobolarinwa Jagun
              </span>
            </span>
            <span class=" hidden text-sm	font-medium	text-gray-500 lg:block ">
              omobolarinwa@legum.tech
            </span>
            <span class=" hidden text-sm font-medium text-gray-500	lg:block	">
              15 May 2020 9:30 am
            </span>

            <button class="w-[85px] rounded-3xl bg-[#B5E3C4] px-1 py-2 text-sm text-[#04802E]">
              Successful
            </button>
            <button class="w-[72px] bg-[#101928] py-3 text-sm text-white">
              Payout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
