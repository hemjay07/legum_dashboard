import PreviewOfMostPopularAnswers from "@/app/components/PreviewOfMostPopularAnswers";
import PreviewOfMostPopularQuestions from "@/app/components/PreviewOfMostPopularQuestions";
import QuestionsCategory from "@/app/components/quetionsCategories";
import messageIcon from "@/public/messageIcon.svg";
import TopCard from "@/app/components/topcard";
export default function Home() {
  return (
    <div class="py-12">
      <div class=" grid w-full grid-cols-2 justify-evenly gap-4 lg:grid-cols-4">
        <TopCard
          title={"Total users"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />{" "}
        <TopCard
          title={"Total users"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />
        <TopCard
          title={"Total users"}
          value={"45,823"}
          icon={messageIcon}
          increase={"23%"}
        />
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
      <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="lg:col-span-2  ">
          <PreviewOfMostPopularQuestions />
        </div>
        <div class="w-full">
          <QuestionsCategory />
        </div>
      </div>{" "}
      <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div class="lg:col-span-2  ">
          <PreviewOfMostPopularAnswers />
        </div>
        <div class="w-full">
          <QuestionsCategory />
        </div>
      </div>
    </div>
  );
}
