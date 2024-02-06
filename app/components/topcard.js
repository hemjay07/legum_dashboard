import { FaMessage } from "react-icons/fa6";
export default function TopCard({ title, value, icon, increase }) {
  return (
    <div class="relative flex  items-start justify-between rounded-lg border   p-4 shadow-md">
      <div>
        <p class="mb-4 text-sm	font-medium text-gray-500">{title}</p>
        <h2 class="mb-2 text-3xl font-semibold text-gray-800">{value}</h2>
        <div class="text-xs font-medium	text-gray-500">
          <div class="flex">
            <div class="rounded-lg bg-green-50">
              <img class="inline" src="/arrowUp.svg" />
              <span class="mr-2  text-green-500"> {increase}</span>
            </div>
            <p class="inline"> Compared to last month</p>
          </div>
        </div>
      </div>

      <img class="absolute right-4 top-4" src={icon} />
    </div>
  );
}
