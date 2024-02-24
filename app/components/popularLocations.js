export default function PopularLocations({ locationStat }) {
  return (
    <div class="relative h-[380px] w-full overflow-y-auto rounded-lg border bg-white p-4 shadow-md ">
      <div class="mb-4 flex items-center justify-between">
        <span class="text-xl font-semibold	text-gray-800">
          Popular Locations
        </span>
        <span class="text-sm font-medium text-[#184CA0]">View all</span>
      </div>
      <div class="flex justify-between rounded-md bg-gray-100 px-2 py-1">
        <span>
          <span class="mr-4">#</span>
          <span>Location</span>
        </span>

        <span>User count</span>
      </div>
      <div class="divide-y px-2">
        {locationStat.map((location, index) => {
          return (
            <div class="flex justify-between py-3 ">
              <span>
                <span class="mr-4 text-sm	font-medium	 text-gray-500">
                  {index + 1}
                </span>
                <span class="text-sm font-medium	text-gray-800	">
                  {location._id?.state}, {location._id?.country}
                </span>
              </span>

              <span class=" text-sm	font-medium	 text-gray-500">
                {location.count}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
