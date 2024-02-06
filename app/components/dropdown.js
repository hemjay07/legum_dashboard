// "use client";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
import { RiArrowDropDownLine, RiCalendarFill } from "react-icons/ri";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Dropdown() {
//   return (
//     <div class="absolute right-4 top-6">
//       <Menu as="div" className="relative inline-block text-left">
//         <div>
//           <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
//             <RiCalendarFill class="h-5 w-5 text-[#373737]" />
//             <p class="text-sm font-medium	 text-gray-500"> 1 year</p>
//             <RiArrowDropDownLine
//               className="-mr-1 h-5 w-5 text-gray-400"
//               aria-hidden="true"
//             />
//           </Menu.Button>
//         </div>

//         <Transition
//           as={Fragment}
//           enter="transition ease-out duration-100"
//           enterFrom="transform opacity-0 scale-95"
//           enterTo="transform opacity-100 scale-100"
//           leave="transition ease-in duration-75"
//           leaveFrom="transform opacity-100 scale-100"
//           leaveTo="transform opacity-0 scale-95"
//         >
//           <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//             <div className="py-1">
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block px-4 py-2 text-sm",
//                     )}
//                   >
//                     Account settings
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block px-4 py-2 text-sm",
//                     )}
//                   >
//                     Support
//                   </a>
//                 )}
//               </Menu.Item>
//               <Menu.Item>
//                 {({ active }) => (
//                   <a
//                     href="#"
//                     className={classNames(
//                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
//                       "block px-4 py-2 text-sm",
//                     )}
//                   >
//                     License
//                   </a>
//                 )}
//               </Menu.Item>
//             </div>
//           </Menu.Items>
//         </Transition>
//       </Menu>
//     </div>
//   );
// }
export default function Dropdown({ defaultOption, others }) {
  return (
    <div>
      <button class="inline-flex  justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-800 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {defaultOption}
        <RiArrowDropDownLine
          className="-mr-1 h-5 w-5 text-gray-400"
          aria-hidden="true"
        />
      </button>
      {/* <div class="absolute left-0 z-10 mt-2 flex w-16  flex-col rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 ">
        {others.map((other) => {
          return <p class="text-gray-600">{other}</p>;
        })}
      </div> */}
    </div>
  );
}
