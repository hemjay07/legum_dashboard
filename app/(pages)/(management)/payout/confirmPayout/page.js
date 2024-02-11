import Link from "next/link";

export default function PassVerification() {
  return (
    <div class="w-[760px] max-w-[65vw] p-6 text-sm font-normal ">
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">
        Payout authorisation
      </h2>
      <div class=" mb-6 grid grid-cols-4">
        <p class=" text-gray-500">Lawyer</p>
        <p class="col-span-3">Omobolarinwa</p>
      </div>
      <div class="mb-6 grid  grid-cols-4">
        <p class=" text-gray-500">Meeting</p>
        <div class="col-span-3 text-gray-500">
          Settlement consultation with
          <span class="font-semibold">Ciroma Chukwuma</span>
        </div>
      </div>
      <div class="mb-6 grid  grid-cols-4">
        <p class=" text-gray-500"> Amount</p>
        <p class="col-span-3  	font-semibold text-gray-500">NGN 40,000</p>
      </div>
      <div class="mb-6 grid  grid-cols-4">
        <p class=" text-gray-500"> VAT (7.5%)</p>
        <p class="col-span-3  font-semibold text-gray-500	">NGN 40,000</p>
      </div>
      <div class="mb-6 grid  grid-cols-4">
        <p class=" text-gray-500"> Payout amount</p>
        <p class="col-span-3  font-semibold text-gray-500	">NGN 37,000</p>
      </div>
      <div class="mb-6 grid  grid-cols-4">
        <p class=" text-gray-500"> Duration</p>
        <p class="col-span-3 text-sm font-normal text-gray-500	">45:04</p>
      </div>
      <div class="mb-6 grid  grid-cols-4">
        <p class=" text-gray-500"> Client review</p>
        <p class="col-span-3 text-sm font-normal text-gray-500	">
          Excellent! Lorem ipsum dolor sit amet consectetur. Sed donec turpis
          phasellus varius nisi enim sit lorem ultrices.
        </p>
      </div>
      <div class="mb-6 grid  grid-cols-4">
        <p class=" text-gray-500"> Account info</p>
        <div class="col-span-3 flex gap-10 text-sm font-normal	text-gray-500">
          <div>
            <p class="mb-4">Bank</p>
            <p class="text-black">Access Bank</p>
          </div>
          <div>
            <p class="mb-4">Number</p>
            <p class="text-black">0123456789</p>
          </div>
        </div>
      </div>
      <div class="mb-6 grid  grid-cols-4">
        <p class="self-center">Action</p>
        <div class="col-span-3  flex items-center gap-4">
          <input
            class="rounded border-none p-2 text-sm font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            placeholder={" Enter authentication code"}
          />
          <Link
            href=""
            class=" rounded bg-[#184CA0] px-4 py-2.5 text-center text-sm text-[#E8EDF6]"
          >
            Confirm payout
          </Link>
        </div>
      </div>
    </div>
  );
}
