import { WhyHireUsPoints } from "@/constants";
import { checked } from "@/public/assets";
import { graphicDesignersWorkspace } from "@/public/assets/images";
import Image from "next/image";
import React from "react";

const Whyus = () => {
  return (
    <div className="mt-40 bg-whyhireusBG grid relative">
      <div className="w-[80%] h-20 bg-inherit absolute -z-10 left-[50%] -translate-x-2/4 -bottom-4" />

        <div className="lg:flex gap-8 lg:py-8">
        <img
        src="/assets/images/graphic-designers-workspace.webp"
        alt="graphic designer"
        className="max-w-[300px] lg:min-w-[450px] block mx-auto -mt-20 lg:mt-0"
      />
      <div className="mt-8 flex flex-col p-4">
        <h1 className="font-bold text-center text-[30px]">
          Why Hire A Freelance Graphic Designer Team?
        </h1>
        <div className="mt-8">
          {WhyHireUsPoints.map((each, index) => (
            <div
              className="flex gap-2 items-start justify-start my-4"
              key={index}
            >
              <Image src={checked} alt="checked" width={20} height={20} />
              <p className="indent-2"> {each.point} </p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
