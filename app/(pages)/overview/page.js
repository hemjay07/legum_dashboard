import TopCard from "@/app/components/topcard";
import BarChart from "@/app/components/bar";
import PopularLocations from "@/app/components/popularLocations";
import PreviewOfIndividuals from "@/app/components/PreviewOfIndividuals";
export default function Individuals() {
  return (
    <div class="py-12">
      <div class=" grid w-full grid-cols-2 justify-evenly gap-4 lg:grid-cols-4">
        <TopCard
          title={"Questions asked"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
        <TopCard
          title={"Questions asked"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
        <TopCard
          title={"Questions asked"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
        <TopCard
          title={"Questions asked"}
          value={"45,823"}
          icon={"/messageIcon.svg"}
          increase={"23%"}
        />
      </div>
      <div class="mt-6 grid grid-cols-1 gap-y-6 lg:grid-cols-3 lg:gap-6">
        <BarChart class="lg:col-span-2" /> <PopularLocations />
      </div>
      <PreviewOfIndividuals />
    </div>
  );
}
