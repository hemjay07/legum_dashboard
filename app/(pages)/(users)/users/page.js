import TopCard from "@/app/components/topcard";
import BarChart from "@/app/components/bar";
import PopularLocations from "@/app/components/popularLocations";
import messageIcon from "@/public/messageIcon.svg";
import PreviewOfIndividuals from "@/app/components/PreviewOfUsersOrLawyers";
import { analyticsData } from "@/app/layout";
const newUser = analyticsData["user-stats/new-users"];
const totalAmount = analyticsData["user-stats/total-amount"];
const activeUsers = analyticsData["user-stats/active-users"];
const totalUsers = analyticsData["user-stats/users"];

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
          value={totalUsers.totalUsers}
          icon={messageIcon}
          increase={totalUsers.percentageChange}
        />
        <TopCard
          title={"Active individual users"}
          value={activeUsers.totalActiveUsers}
          icon={messageIcon}
          increase={activeUsers.percentageChange}
        />
        <TopCard
          title={"New users"}
          value={newUser.usersCreatedThisMonth}
          icon={messageIcon}
          increase={newUser.percentageChange}
        />
        <TopCard
          title={"Total spent"}
          value={totalAmount.thisMonth}
          icon={messageIcon}
          increase={totalAmount.percentageChange}
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
