"use client";
import { useState } from "react";
import VerificationModal from "../verificationModal";

export default function PassVerificationButton({ userId }) {
  const [response, setResponse] = useState(null);
  const [status, setStatus] = useState("success");
  const [isSpinner, setIsSpinner] = useState(null);

  async function handleClick() {
    setIsSpinner(true);
    try {
      const response = await fetch(
        `https://altserver.westeurope.cloudapp.azure.com/api/v1/lawyer-stats/unverified-lawyer`,
        {
          // method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlkcm5zMDk5QGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6Imxhd3llciIsInBob25lX251bWJlciI6IjA5NzkzNDQ2Nzg5IiwidXNlciI6IjY1MWVlMzhlNzlhNDgxZDNiNzI5Yjc0OSIsImlzX3JlZnJlc2hfdG9rZW4iOmZhbHNlLCJleHAiOjE3MDA3NTkxMzMsImlhdCI6MTcwMDE1NDMzM30.miPIX_3xVegPG04BGJjv4NrC7YAGBb0zAjw2PEvzm0k`, // Include the authorization token
          },

          // body: JSON.stringify({ bar_number_verification: "true" }),
        },
      );
      if (!response.ok) {
        const errorData = await response.json(); // Parse the error response
        throw new Error(errorData.message || "Network response was not ok"); // Throw error message from backend
      }

      const data = await response.json();
      setIsSpinner(false);
      if (data.status === "success") {
        setResponse(data.message);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("There was a problem with the PUT request:", error); // Handle error
    }
  }

  return (
    <>
      {isSpinner != null && (
        <VerificationModal
          message={response}
          status={status}
          isSpinner={isSpinner}
        />
      )}
      <button
        onClick={handleClick}
        class="block  w-full rounded bg-[#184CA0]	py-3 text-center	font-medium text-white"
      >
        Confirm user
      </button>{" "}
    </>
  );
}
