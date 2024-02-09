"use client";
import TopCard from "@/app/components/topcard";
import BarChart from "@/app/components/bar";
import DoughnutChart from "@/app/components/doughnut";

export default function Financials() {
  // data for the bar chart

  const data = [
    {
      label: "Successful",
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
  const doughnutData = [
    {
      data: [450, 650],
      borderColor: ["#B7C8E2", "#164592"],
      backgroundColor: ["#B7C8E2", " #164592"],
    },
  ];
  const doughnutLabels = ["Successful", "Failed"];
  return (
    <div class="py-12">
      <div class=" grid w-full grid-cols-2 justify-evenly gap-4 lg:grid-cols-4">
        <TopCard
          title={"Login attempts"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Successful logins"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Failed logins"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Suspicious logins"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Account verification"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Suspicious activities x"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Password reset rate"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
      </div>

      <div class="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
        <BarChart data={data} title={"Login attempts"} class="lg:col-span-2" />
        <div>
          {" "}
          <DoughnutChart
            data={doughnutData}
            labels={doughnutLabels}
            title="Login attempts"
          />{" "}
        </div>
      </div>
    </div>
  );
}
