import Input from "@/app/components/input";
import Image from "next/image";
import barNumber from "@/public/barNumber.svg";
import barCertificate from "@/public/barCertificate.svg";
import Link from "next/link";

export default function FailVerification() {
  return (
    <div class="w-fit p-6">
      <h2 class="mb-6 mt-6 text-2xl font-semibold text-gray-800	">
        Fail verification
      </h2>
      <h3>Please select reasons for the failure of verification</h3>

      <div class="my-8">
        <input type="checkbox" class="mr-2" />
        <span class="w-full text-sm font-medium text-gray-700">
          I confirm that verification is denied based on the above reasons
        </span>
      </div>

      <Link
        class="block  w-full rounded bg-[#CB1A14]	py-3 text-center	font-medium text-white"
        href="/"
      >
        Confirm verification fail
      </Link>
    </div>
  );
}
