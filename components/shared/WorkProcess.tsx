"use client";
import { DesignProcess } from "@/constants";
import { minus, plus } from "@/public/assets";
import Image from "next/image";
import React, { useState } from "react";

const WorkProcess = () => {
  const [value, setValue] = useState(null);
  const [active, setActive] = useState(0);

  const openAns = (index: any) => {
    active !== index ? setActive(index) : setActive(-1);
  };

  return (
    <div className="mt-20 bg-processBG ">
      <div className="pt-10">
        <div className="text-center">
          <h2 className="text-[30px] w-[50vw] inline-block relative halfunderline">
            OUR DESIGN PROCESS
          </h2>
        </div>
        <div className="mt-10 pb-10 md:w-[70vw] mx-auto">
          {DesignProcess.map((step, index) => (
            <div key={index} className="p-4 text-center">
              <div
                onClick={() => openAns(index)}
                className="bg-faqBG p-2 cursor-pointer"
              >
                <h2 className="font-bold text-center"> {step.title} </h2>
                <div className="-mt-6">
                  <Image
                    src={active === index ? minus : plus}
                    alt="minus icon"
                    width={20}
                    height={20}
                    className="block ml-auto"
                  />
                </div>
              </div>
              <div
                className={`w-[60vw] h-auto mx-auto mt-8 ${
                  active === index ? "block" : "hidden"
                }`}
              >
                {" "}
                <Image
                  src={step.image}
                  alt={`${step.title}-photo`}
                  className="block mx-auto"
                  width={100}
                  height={100}
                />
                <p className="mt-4"> {step.description} </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
