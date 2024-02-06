import "./globals.css";

export default function SignIn() {
  return (
    <div class=" h-screen flex-col   p-8 ">
      <div class="relative h-full justify-between lg:flex lg:flex-row">
        <div class=" relative h-full lg:-mr-32 lg:ml-8  lg:w-1/2 lg:px-6">
          <h1 class="absolute inset-0 top-12 flex justify-center text-center text-5xl font-semibold lg:top-20">
            Welcome to <br /> Legum Limited{" "}
          </h1>
          <img class=" h-full w-full" src="/welcomeToLegum.jpg" />
        </div>

        <div class=" items:center absolute inset-0 mx-auto my-56 h-[350px] w-4/5 justify-center p-6  lg:relative lg:my-auto lg:h-[500px] lg:w-[450px]">
          <h3
            class="mb-8 text-4xl  font-medium text-gray-900	lg:mb-16
            "
          >
            Sign in
          </h3>
          <div class="flex flex-col ">
            <label
              class="mb-1 text-sm font-medium		lg:text-gray-500"
              for="username"
            >
              Username
            </label>
            <input
              placeholder="Enter username"
              class="mb-6 w-full rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="text"
              id="username"
            />
          </div>
          <div class="flex flex-col">
            <label
              class="mb-1 text-sm	font-medium	lg:text-gray-500"
              for="password"
            >
              Password
            </label>
            <input
              placeholder="Enter username"
              class="mb-6 w-full rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
              type="text"
              id="password"
            />
          </div>
          <button class="w-full rounded-lg bg-primary-color p-3 font-normal text-white">
            Log in{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
