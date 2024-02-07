import TopCard from "@/app/components/topcard";
import BarChart from "@/app/components/bar";
import PopularLocations from "@/app/components/popularLocations";
import PreviewOfIndividuals from "@/app/components/PreviewOfUsersOrLawyers";
export default function Individuals() {
  // data for bar chart
  const data = [
    {
      label: "Active users",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #113672",
    },
    {
      label: "New users",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #4670B3",
    },
  ];
  return (
    <div class="py-12">
      <div class=" grid w-full grid-cols-2 justify-evenly gap-4 lg:grid-cols-4">
        <TopCard
          title={"Total individual users"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
        <TopCard
          title={"Active individual users"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
        <TopCard
          title={"New users"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
        <TopCard
          title={"Total spent"}
          value={"₦45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
        <BarChart title={"Overview"} data={data} class="lg:col-span-2" />
        <PopularLocations />
      </div>
      <PreviewOfIndividuals person={"users"} />
    </div>
  );
}
