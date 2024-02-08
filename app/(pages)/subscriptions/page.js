import TopCard from "@/app/components/topcard";
import BarChart from "@/app/components/bar";

import BarredWords from "@/app/components/barredWords";
export default function SUbscriptions() {
  // data for the bar chart

  const data = [
    {
      label: "Prime",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #113672",
    },
    {
      label: "Pro",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #4670B3",
    },
  ];
  return (
    <div class="py-12">
      <div class=" grid w-full grid-cols-2 justify-evenly gap-4 lg:grid-cols-4">
        <TopCard
          title={"Paid subscriptions"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Prime subscriptions"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Pro subscriptions"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Cancelled subsriptions"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
        <TopCard
          title={"Doc AI subscriptions"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
        <BarChart data={data} title={"Subscriptions"} class="lg:col-span-2" />
        <BarredWords />
      </div>
    </div>
  );
}
