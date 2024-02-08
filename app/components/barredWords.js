export default function BarredWords() {
  return (
    <div class="relative h-[380px] w-full overflow-y-auto rounded-lg border bg-white p-4 shadow-md ">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-xl font-semibold	text-gray-800">Barred words </span>
        <span class="text-sm font-medium text-[#184CA0]">View all</span>
      </div>
      <div class=" rounded-md bg-gray-100 px-2 py-1">
        <span>
          <span class="mr-4">#</span>
          <span>Location</span>
        </span>
      </div>
      <div class="divide-y px-2">
        <div class=" py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">1</span>
            <span class="text-sm font-medium	text-gray-800	">Civil law</span>
          </span>
        </div>
        <div class=" py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">2</span>
            <span class="text-sm font-medium	text-gray-800	">
              Dispute Resolution
            </span>
          </span>
        </div>
        <div class=" py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">3</span>
            <span class="text-sm font-medium	text-gray-800	">Property tax</span>
          </span>
        </div>
        <div class=" py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">4</span>
            <span class="text-sm font-medium	text-gray-800	">Civil law</span>
          </span>
        </div>
        <div class=" py-3 ">
          <span>
            <span class="mr-4 text-sm	font-medium	 text-gray-500">5</span>
            <span class="text-sm font-medium	text-gray-800	">Civil law</span>
          </span>
        </div>
      </div>
    </div>
  );
}
