import TopCard from "@/app/components/topcard";
import BarChart from "@/app/components/bar";
import PopularLocations from "@/app/components/popularLocations";
import PreviewOfPendingVerifications from "@/app/components/PreviewOfPendingVerifications";
import QuestionsCategory from "@/app/components/quetionsCategories";
import messageIcon from "@/public/messageIcon.svg";
export default function Individuals() {
  // data for the bar chart
  const data = [
    {
      label: "Active lawyers",
      data: [450, 600, 750, 800, 700, 900, 600, 550, 800, 700, 950, 850],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: " #113672",
    },
  ];
  return (
    <div class="py-12">
      <div class=" grid w-full grid-cols-2 justify-evenly gap-4 lg:grid-cols-4">
        <TopCard
          title={"Total users"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />
        <TopCard
          title={"Active users"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />
        <TopCard
          title={"New users"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />
        <TopCard
          title={"Active subscriptions"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
        <BarChart data={data} title={"Active Users"} class="lg:col-span-2" />{" "}
        <PopularLocations />
      </div>{" "}
      <div class="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
        <div class="lg:col-span-2">
          <PreviewOfPendingVerifications />
        </div>

        <QuestionsCategory />
      </div>
    </div>
  );
}
