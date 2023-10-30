"use client";
import { arrow } from "@/public/assets";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { members } from "@/public/assets/images";

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div>
      <div className="max-h-[105vh] relative">
        <p className="absolute left-[50%] -translate-x-2/4 bottom-4 font-bold text-creatives text-[32px] ">
          CREATIVES
        </p>
        <img
          src="/assets/images/hero-container.png"
          alt="bg"
          className="absolute left-0 top-0 -z-10 w-full h-full"
        />
        <div className="max-w-[350px] mx-auto">
          <div className="flex flex-col gap-4 text-center p-4 pb-20 text-light-1 pt-10">
            <h1 className="uppercase text-[32px] font-bold ">
              We are Proficient graphic designers Team{" "}
            </h1>
            <p className="mt-4">
              Hi there! we are{" "}
              <span className="uppercase text-transparent bg-clip-text bg-gradient-to-l from-pink-700 to-pink-300 font-bold">
                {" "}
                <span className="italic"> 4 </span> graphic designers
              </span>{" "}
              freelancers based in DAR ES SALAAM TANZANIA. Our goal is to help
              you attract more people to your products or services with the help
              of good design. I can help you with designing your website, logo,
              social media posts, brochure, adverts, catalogue, poster, company
              stationery and more at reasonable pricess without sacrificing
              quality.
            </p>
            <div>
              <Button
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                className="bg-white flex gap-2 mx-auto p-2 text-dark-1 hover:bg-light-2 uppercase"
              >
                <span>Let's Chat</span>{" "}
                <div className={` ${!hovered && "hidden"}`}>
                  <Image src={arrow} alt="arrow" width={24} height={24} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-40 relative">
        <Image
          src={members}
          width={300}
          height={300}
          alt="members"
          className="max-w-[350px]"
        />
        <div className="absolute left-0 top-10 h-[230px] w-[320px] bg-square-color -z-10 "></div>
      </div>
    </div>
  );
};

export default Hero;
