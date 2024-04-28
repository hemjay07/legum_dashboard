"use client";

import { TailSpin } from "react-loader-spinner";

export default function LoaderSpiner() {
  return (
    <TailSpin
      visible={true}
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="tail-spin-loading"
      radius="1"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
}
