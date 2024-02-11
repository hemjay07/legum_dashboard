import Input from "@/app/components/input";
import Image from "next/image";
import barNumber from "@/public/barNumber.svg";
import barCertificate from "@/public/barCertificate.svg";
import Link from "next/link";

export default function PassVerification() {
  return (
    <div class="w-fit p-6">
      <h2 class="mb-6 mt-6 text-2xl font-semibold text-gray-800	">
        Confirm verification{" "}
      </h2>
      <div class="grid grid-cols-2 gap-6">
        <div class="relative">
          <Input label={"Bar number"} type={"text"} id={"barNumber"} />
          <Image alt="" src={barNumber} class="absolute right-4 top-[40%]" />
        </div>
        <Input
          label={"Years of experience"}
          type={"text"}
          id={"yearsOfExperience"}
        />
      </div>
      <div class="relative h-[280px]  bg-[#D9D9D9]">
        <div class="absolute bottom-0">
          <Image alt="" src={barCertificate} class="mr-2 inline " />
          <span class="text-sm text-[#184CA0] underline">
            Bola's bar certificate
          </span>
        </div>
      </div>
      <div class="my-8">
        <input type="checkbox" class="mr-2" />
        <span class="w-full text-sm font-medium text-gray-700">
          I confirm that name, bar number, and experience length all match the
          records of the Nigerian Bar Association.
        </span>
      </div>

      <Link
        class="block  w-full rounded bg-[#184CA0]	py-3 text-center	font-medium text-white"
        href="/"
      >
        Confirm user
      </Link>
    </div>
  );
}
