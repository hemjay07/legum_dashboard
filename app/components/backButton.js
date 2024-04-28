"use client";
import { IoArrowBackOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
export default function BackButton() {
  const router = useRouter();

  return (
    <div class="flex items-center">
      <IoArrowBackOutline class="mr-2 h-4 w-4 text-[#1C1B1F]" />
      <span
        onClick={() => router.back()}
        class="text-base font-normal text-gray-800	hover:cursor-pointer hover:text-gray-500	"
      >
        Back
      </span>
    </div>
  );
}
