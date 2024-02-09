export default function FailedConsultations() {
  return (
    <div class="relative h-[380px]  w-full  overflow-y-auto rounded-lg border bg-white p-4 shadow-md ">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-xl font-semibold	text-gray-800">
          Failed consultations
        </span>
        <span class="text-sm font-medium text-[#184CA0]">View all</span>
      </div>
      <div class="flex justify-between rounded-md bg-gray-100 px-2 py-1">
        <span>
          <span class="mr-4">#</span>
          <span>Reason</span>
        </span>

        <span>(%)</span>
      </div>
      <div class="divide-y px-2">
        <div class="flex justify-between py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="text-sm font-medium	text-gray-800	">
              Lawyer did not show up
            </span>
          </span>

          <span class=" text-sm	font-medium	 text-gray-500">38</span>
        </div>
        <div class="flex justify-between py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">2</span>
            <span class="text-sm font-medium	text-gray-800	">
              Client did not show up
            </span>
          </span>

          <span class=" text-sm	font-medium	 text-gray-500">29</span>
        </div>
        <div class="flex justify-between py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">3</span>
            <span class="text-sm font-medium	text-gray-800	">Resheduled</span>
          </span>

          <span class="text-sm	font-medium	 text-gray-500">16</span>
        </div>{" "}
        <div class="flex justify-between py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">4</span>
            <span class="text-sm font-medium	text-gray-800	">Lagos</span>
          </span>

          <span class="text-sm	font-medium	 text-gray-500">16</span>
        </div>{" "}
      </div>
    </div>
  );
}
