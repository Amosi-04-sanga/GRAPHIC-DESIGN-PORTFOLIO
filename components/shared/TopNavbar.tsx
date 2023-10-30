"use client";
import { close, menu, moon, sun } from "@/public/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const TopNavbar = () => {
  const [opened, setOpened] = useState(false);
  const [toggled, setToggled] = useState(false);

  return (
    <nav className="bg-dark-1 sticky left-0 top-0 z-10">
      <div className="flex justify-between h-[10vh] items-center px-4">
        <div className="text-light-1">
          <Link
            href='/'
            className="cursor-pointer"
          >
          <span className="text-[22px]">LOGO</span>
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <div className="mr-4 cursor-pointer">
            <Image
              width={30}
              height={30}
              onClick={() => {
                setToggled(!toggled);
              }}
              src={!toggled ? moon : sun}
              alt="light toggle"
            />
          </div>
          <div className="cursor-pointer">
            <Image
              width={36}
              height={36}
              onClick={() => {
                setOpened(!opened);
              }}
              src={!opened ? menu : close}
              alt="menu"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
