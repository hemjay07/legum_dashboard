import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaCircleXmark } from "react-icons/fa6";

import LoaderSpiner from "./failVerification/loaderspiner";

import { useRouter } from "next/navigation";

export default function VerificationModal({ message, status, isSpinner }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/verification")}
      class=" absolute right-0 top-0 h-full w-full  bg-gray-200 bg-opacity-75"
    >
      {isSpinner === true && (
        <div class="relative left-1/2 top-1/2 w-36 -translate-x-1/2 -translate-y-1/2  transform">
          <LoaderSpiner />
        </div>
      )}

      {isSpinner === false && (
        <div class="absolute left-1/2 top-1/2 h-96 w-[500px]  -translate-x-1/2 -translate-y-1/2 transform  rounded-lg bg-white text-center">
          {status === "error" ? (
            <FaCircleXmark
              style={{
                color: "red",
                width: "60%",
                height: "60%",
                margin: "auto",
                padding: "20px",
              }}
            />
          ) : (
            <IoIosCheckmarkCircle
              style={{
                color: "green",
                width: "60%",
                height: "60%",
                margin: "auto",
              }}
            />
          )}

          <h2 class="text-2xl">{message}</h2>
        </div>
      )}
    </div>
  );
}
