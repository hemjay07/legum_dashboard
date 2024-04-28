"use client";
import { useEffect, useState } from "react";

import VerificationModal from "../verificationModal";

export default function FailVerificationButton({ userId }) {
  const [isDisabled, setIsDisabled] = useState(true); // State to manage button disabled status
  const [response, setResponse] = useState(null); // State to store the server's response
  const [status, setStatus] = useState("success"); // State to track the response status
  const [isSpinner, setIsSpinner] = useState(null); // State to handle spinner visibility

  useEffect(() => {
    const checkbox = document.querySelector("#confirmationCheckbox"); // Select the checkbox element
    const radioButtons = document.querySelectorAll('input[name="reason"]'); // Select all radio buttons with name "reason"
    radioButtons.forEach((radioButton) => {
      radioButton.addEventListener("change", function () {
        setIsDisabled(false); // Enable the button on any radio change
        setIsDisabled(!checkbox.checked); // Toggle disable status based on checkbox
      });
    });
  }, []);

  async function handleClick() {
    setIsSpinner(true); // Show spinner during processing
    const reason =
      document.querySelector('input[name="reason"]:checked')?.value ||
      "No reason selected"; // Get selected reason or default message


    try {

      const response = await fetch(
        // Make an API call to server
        `https://legumremote.eastus.cloudapp.azure.com/api/v1/lawyer-stats/verify-lawyer-failed/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlkcm5zMDk5QGdtYWlsLmNvbSIsInVzZXJfdHlwZSI6Imxhd3llciIsInBob25lX251bWJlciI6IjA5NzkzNDQ2Nzg5IiwidXNlciI6IjY1MWVlMzhlNzlhNDgxZDNiNzI5Yjc0OSIsImlzX3JlZnJlc2hfdG9rZW4iOmZhbHNlLCJleHAiOjE3MDA3NTkxMzMsImlhdCI6MTcwMDE1NDMzM30.miPIX_3xVegPG04BGJjv4NrC7YAGBb0zAjw2PEvzm0k`, // Include the authorization token
          },

          body: JSON.stringify({
            // Prepare body data
            bar_number_verification: "true",
            failed_verification_reason: reason,
          }),
        },
      );
      if (!response.ok) {
        const errorData = await response.json(); // Parse the error response
        throw new Error(errorData.message || "Network response was not ok"); // Throw error message from backend
      }

      const data = await response.json();
      setIsSpinner(false); // Hide spinner after fetching data
      if (data.status === "success") {
        setResponse(data.message); // Store response message
      } else {
        setStatus("error"); // Update status on failure
      }
      // Handle success response
    } catch (error) {
      console.error("There was a problem with the PUT request:", error); // Handle error
    }
  }

  return (
    // Render the component
    <>
      {isSpinner != null && (
        <VerificationModal // Conditionally show the modal when isSpinner is not null
          message={response}
          status={status}
          isSpinner={isSpinner}
        />
      )}
      <button
        disabled={isDisabled} // Control button enabled status
        id="submitButton"
        onClick={handleClick} // Handle button click
        class={`block  w-full ${isDisabled ? "cursor-not-allowed" : ""} rounded	bg-[#CB1A14] py-3	text-center font-medium text-white`} // Dynamic styling based on state
      >
        Confirm verification fail
      </button>
    </>
  );
}
