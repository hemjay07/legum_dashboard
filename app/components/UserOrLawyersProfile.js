"use client";
import BackButton from "./backButton";
import Input from "./input";

export default function UserOrLawyersProfile({ person }) {
  return (
    <div class="max-w-[800px] py-6">
      <BackButton />
      <h1 class="mb-10 mt-6 text-2xl font-semibold text-gray-800	">{person}</h1>
      <div class="h-12 w-12 rounded-full bg-[#D9D9D9] "></div>
      <h2 class=" mt-6 text-xl font-semibold text-gray-800	">
        Personal details
      </h2>
      <div class=" mt-6 grid grid-cols-2">
        <div class="w-[250px]">
          <Input
            type="text"
            placeholder={"Enter first name"}
            id="firstName"
            width={250}
            label={"First Name"}
          />
        </div>

        <Input
          type="text"
          placeholder={" Enter last name"}
          id="lastName"
          width={250}
          label={"Last Name"}
        />
        <Input
          type="text"
          placeholder={" Enter email address"}
          id="emailAddress"
          width={250}
          label={"Email Address"}
        />
        <Input
          type="text"
          placeholder={" Enter phone number"}
          id="phoneNumber"
          width={250}
          label={"Phone Number"}
        />
      </div>
      <h2 class=" mb-6 mt-16 text-xl font-semibold text-gray-800	">Activity</h2>
      <div class="grid grid-cols-3">
        <Input
          type="text"
          placeholder={"SCN0000000"}
          id="questions"
          width={160}
          label={"Questions asked"}
        />
        <div class="w-[160px]">
          <Input
            type="text"
            placeholder={"SCN0000000"}
            id="upvotes"
            width={160}
            label={"Upvotes"}
          />
        </div>
        <Input
          type="text"
          placeholder={"SCN0000000"}
          id="downvotes"
          width={160}
          label={"Downvotes"}
        />
        <Input
          type="text"
          placeholder={"SCN0000000"}
          id="appointmentsBooked"
          width={160}
          label={"Appointments booked"}
        />
        <Input
          type="text"
          placeholder={"SCN0000000"}
          id="appointmentsCompleted"
          width={160}
          label={"Appointments completed"}
        />
      </div>
    </div>
  );
}
