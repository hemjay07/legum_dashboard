import Dropdown from "@/app/components/dropdown";
import Link from "next/link";

export default function PassVerification() {
  return (
    <div class="w-[760px] max-w-[65vw] p-6 text-sm font-normal ">
      <h2 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">
        Complaint #01287373{" "}
      </h2>
      <div class=" mb-4 grid grid-cols-4">
        <p class=" text-gray-500">Title</p>
        <p class="col-span-3">Payment issues</p>
      </div>
      <div class="mb-4 grid  grid-cols-4">
        <p class=" text-gray-500">Submitted by</p>
        <p class="col-span-3">Omobolarinwa</p>
      </div>
      <div class="mb-4 grid  grid-cols-4">
        <p class=" text-gray-500"> Description</p>
        <p class="col-span-3 text-sm font-normal text-gray-500	">
          Lorem ipsum dolor sit amet consectetur. Maecenas lacus justo in sit
          metus lorem est ut. Vivamus ultrices morbi felis parturient. Ultrices
          volutpat tristique faucibus ultricies vitae. Tellus sagittis commodo
          sapien quis quis malesuada. Scelerisque euismod molestie gravida duis
          cursus faucibus. Volutpat morbi pulvinar justo urna. Ullamcorper
          fermentum in ac posuere cursus quisque velit pulvinar.
        </p>
      </div>{" "}
      <div class="mb-4 grid  grid-cols-4">
        <p class="self-center">Action</p>
        <div class="col-span-3  flex items-center gap-4">
          <p class="">Escalate to:</p>
          <Dropdown defaultOption={"Choose team"} />
          <Link
            href=""
            class="w-[80px] bg-[#184CA0] py-2 text-center text-sm text-[#E8EDF6]"
          >
            Submit
          </Link>
        </div>
      </div>
    </div>
  );
}
