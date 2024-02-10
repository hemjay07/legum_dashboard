"use client";
import TopCard from "@/app/components/topcard";
import BarChart from "@/app/components/bar";
import messageIcon from "@/public/messageIcon.svg";
import FailedConsultations from "@/app/components/failedConsultations";

export default function Subscriptions() {
  // data for the bar chart

  const data = [
    {
      label: "Booked",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #113672",
    },
    {
      label: "Failed",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #4670B3",
    },
  ];

  return (
    <div class="py-12">
      <div class=" grid w-full grid-cols-2 justify-evenly gap-4 lg:grid-cols-4">
        <TopCard
          title={"Consultations booked "}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Successful consultations"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Failed consultations"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Resheduled consultations"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
        <BarChart data={data} title={"Consultations"} class="lg:col-span-2" />
        <FailedConsultations />
      </div>
    </div>
  );
}
