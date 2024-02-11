import Input from "@/app/components/input";
import Image from "next/image";
import barNumber from "@/public/barNumber.svg";
import barCertificate from "@/public/barCertificate.svg";
import Link from "next/link";

export default function Verify() {
  return (
    <div class="w-fit p-6">
      <h2 class="mb-6 mt-6 text-2xl font-semibold text-gray-800	">
        Personal details
      </h2>{" "}
      <div class="grid grid-cols-2 gap-6">
        <Input
          label={"First name"}
          placeholder={"Enter your first name"}
          type={"text"}
          id={"firstName"}
        />
        <Input
          label={"Last name"}
          placeholder={"Enter your last name"}
          type={"text"}
          id={"lastName"}
        />{" "}
        <Input label={"Email Address"} type={"text"} id={"firstName"} />
        <Input label={"Phone number"} type={"text"} id={"phoneNumber"} />
      </div>
      <div class=" grid grid-cols-3 gap-6">
        {" "}
        <Input label={"Country"} type={"text"} id={"country"} />
        <Input label={"State"} type={"text"} id={"state"} />
        <Input label={"City"} type={"text"} id={"city"} />
      </div>
      <div class="mt-10 grid grid-cols-2 gap-6">
        <Link
          href="./verify/passVerification"
          class=" w-full rounded 	border border-[#6487BF] py-3	 text-center text-base font-medium text-gray-500"
        >
          Go back
        </Link>
        <Link
          href="./verify/failVerification"
          class=" w-full rounded bg-[#CB1A14]	py-3 text-center text-base font-medium	 text-white"
        >
          Delete account{" "}
        </Link>
      </div>
    </div>
  );
}
