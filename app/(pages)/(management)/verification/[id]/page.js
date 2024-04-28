import Input from "@/app/components/input";
import Image from "next/image";
import barNumber from "@/public/barNumber.svg";
import barCertificate from "@/public/barCertificate.svg";
import Link from "next/link";

import { analyticsData } from "@/app/layout";

export default function Verify({ params }) {
  const unverifiedLawyers =
    analyticsData["lawyer-stats/unverified-lawyer"].data.lawyer.users;

  const thisLawyer = unverifiedLawyers.filter(
    (lawyer) => lawyer._id === params.id,
  )[0];

  return (
    <div class="w-fit p-6">
      <h2 class="mb-6 mt-6 text-2xl font-semibold text-gray-800	">
        Personal details
      </h2>
      <div class="grid grid-cols-2 gap-6">
        <Input
          label={"First name"}
          placeholder={"Enter your first name"}
          type={"text"}
          id={"firstName"}
          value={thisLawyer.first_name}
          readOnly
        />
        <Input
          label={"Last name"}
          placeholder={"Enter your last name"}
          type={"text"}
          id={"lastName"}
          value={thisLawyer.last_name}
          readOnly
        />{" "}
        <Input
          label={"Email Address"}
          type={"text"}
          id={"firstName"}
          value={thisLawyer.email}
          readOnly
        />
        <Input
          label={"Phone number"}
          type={"text"}
          id={"phoneNumber"}
          value={thisLawyer.phone_number}
          readOnly
        />
      </div>
      <div class=" grid grid-cols-3 gap-6">
        {" "}
        <Input
          label={"Country"}
          type={"text"}
          id={"country"}
          value={thisLawyer.country}
          readOnly
        />
        <Input
          label={"State"}
          type={"text"}
          id={"state"}
          value={thisLawyer.state}
          readOnly
        />
        <Input
          label={"City"}
          type={"text"}
          id={"city"}
          value={thisLawyer.city}
          readOnly
        />
      </div>
      <h2 class="mb-6 mt-6 text-2xl font-semibold text-gray-800	">
        Professional details
      </h2>
      <div class="grid grid-cols-2 gap-6">
        <div class="relative">
          <Input
            label={"Bar number"}
            type={"text"}
            id={"barNumber"}
            value={thisLawyer.bar_number}
            readOnly
          />
          <Image alt="" src={barNumber} class="absolute right-4 top-[40%]" />
        </div>
        <Input
          label={"Years of experience"}
          type={"text"}
          id={"yearsOfExperience"}
          value={thisLawyer.years_of_practice}
          readOnly
        />
      </div>
      <Image alt="" src={barCertificate} class="mr-2 inline " />

      <Link
        class="text-sm text-[#184CA0] underline"
        href={thisLawyer.bar_certificate}
      >
        {thisLawyer.first_name}'s bar certificate
      </Link>
      <p class="mb-4 text-right text-sm text-gray-500">view details</p>
      <div class="grid grid-cols-2 gap-6">
        <Link
          href={`./${thisLawyer._id}/failVerification`}
          class=" w-full rounded bg-[#CB1A14]	py-3 text-center text-base font-medium	 text-white"
        >
          Fail verification
        </Link>
        <Link
          href={`./${thisLawyer._id}/passVerification`}
          class=" w-full rounded bg-[#184CA0]	py-3 text-center text-base	 font-medium text-white"
        >
          Verify user
        </Link>
      </div>
    </div>
  );
}
