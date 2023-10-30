import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const BLog = () => {
  return (
    <div className="flex flex-col text-center px-10 relative text-light-1 pb-10">
      <div className="w-full h-full absolute left-0 top-0 bg-blogoverlay -z-10 "></div>
      <img
        src="/assets/images/blogBG.png"
        alt="blog bg photo"
        className="absolute left-0 top-0 -z-20 w-full h-full"
      />
      <div className="md:w-[60vw] mx-auto">
        <div className="text-center">
          <h1 className="mt-14 inline-block halfunderline relative text-[30px] uppercase font-bold">
            BLog
          </h1>
        </div>

        <div className="mt-4">
          <h3 className="text-[25px]">
            10 Brand Identity Elements That Influence Our Decisions
          </h3>
          <p className="mt-4">
            In this blog post you'll learn about 10 brand identity design
            elements that you need to include when designing strategic brands so
            that you can design brands that don't just appeal visually, but
            influence buying decisions. Let's face it, graphic designers are not
            thin...
          </p>
        </div>
        <div className="mt-4">
          <Button className="hover:bg-green-600 mx-auto bg-green-500 transition-all duration-300">
            <Link href="#">Read More ...</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BLog;
