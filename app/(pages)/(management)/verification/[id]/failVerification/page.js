import { doc } from "prettier";
import FailVerificationButton from "./failVerificationButton";

import { analyticsData } from "@/app/layout";

export default function FailVerification({ params }) {
  const unverifiedLawyers =
    analyticsData["lawyer-stats/unverified-lawyer"].data.lawyer.users;

  const thisLawyer = unverifiedLawyers.filter(
    (lawyer) => lawyer._id === params.id,
  )[0];

  return (
    <>
      <div class="w-fit p-6">
        <h2 class="mb-6 mt-6 text-2xl font-semibold text-gray-800	">
          Fail verification
        </h2>
        <h3>Please select reasons for the failure of verification</h3>
        <div>
          <div class="my-8">
            <input
              type="radio"
              name="reason"
              class="mr-2 "
              value="unclear_document"
              readOnly
            />
            <span class="w-full text-sm font-medium text-gray-700">
              Unclear document
            </span>
          </div>
          <div class="my-8">
            <input
              type="radio"
              name="reason"
              class="mr-2"
              value="records_not_found_at_nigeria_bar_association"
              readOnly
            />
            <span class="w-full text-sm font-medium text-gray-700">
              Records not found in Nigerian Bar Association
            </span>
          </div>

          <div class="my-8">
            <input
              required
              type="radio"
              name="reason"
              class="mr-2"
              value="year_of_call_does_not_match_experience_length"
              readOnly
            />
            <span class="w-full text-sm font-medium text-gray-700">
              Years of call doesn't match experience length
            </span>
          </div>
        </div>
        <div class="my-8">
          <input
            type="radio"
            name="reason"
            class="mr-2"
            value="name_and_document_mismatch"
            readOnly
          />
          <span class="w-full text-sm font-medium text-gray-700">
            Name and document mismatch
          </span>
        </div>
        <div>
          <input type="radio" name="reason" class="mr-2" value="others" />
          <span class="w-full text-sm font-medium text-gray-700">Other:</span>
        </div>
        <textarea class="m-4 h-24 w-full resize-none"></textarea>
        <div class="mb-8 mt-32">
          <input
            type="checkbox"
            name="reason"
            class="mr-2"
            id="confirmationCheckbox"
          />
          <span class="text-700 w-full text-base font-medium">
            I confirm that verification is denied based on the above reasons
          </span>
        </div>
        <FailVerificationButton userId={thisLawyer._id} />
      </div>
    </>
  );
}
