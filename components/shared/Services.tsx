import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { tabs_content } from "@/constants";
import { lounchIcon } from "@/public/assets/images";
import Link from "next/link";

const Services = () => {
  return (
    <div className="flex flex-col p-4 relative">
      <img
        src="/assets/images/servicesbg.png"
        alt="services background"
        className="absolute left-0 top-0 w-full h-full -z-10"
      />
      <div className="md:w-[70vw] mx-auto">
        <div className="text-center w-[70vw] mx-auto">
          <h2 className="mt-20 relative halfunderline inline-block text-[30px] font-bold">
            Graphic Design Services
          </h2>
        </div>
        <p className="mt-10 indent-4 text-black">
          Brand identity elements like logos, business cards, brochures,
          signage, van livery etc enable you to deliver your core message to
          your audience and helps in distinguishing your brand from your
          competitors.
        </p>
        <p className="mt-4 indent-4">
          Everything your business displays, says, does and produces has to
          reflect the core ideas, values and aims of your business. In order to
          create the right image for your business your branding needs to be
          consistent, direct and stimulating for your audience.
        </p>
        <p className="mt-4">I can design the following for your business:</p>

        <div className="mt-10 mb-20">
          <Tabs defaultValue="posters" className="max-w-[400px] mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {tabs_content.map((each) => (
                <TabsTrigger
                  className="capitalize"
                  key={each.title}
                  value={each.title}
                >
                  {each.title}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabs_content.map((each) => (
              <TabsContent key={each.title} value={each.title}>
                <Card>
                  <Image
                    src={each.image}
                    alt={each.title}
                    width={50}
                    height={50}
                    className="block mx-auto mt-4"
                  />
                  <CardHeader>
                    <CardTitle className="uppercase text-center">
                      {each.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <CardDescription>{each.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="hover:bg-green-500 mx-auto bg-green-400 transition-all duration-300">
                      <Link href="#">view works</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Services;
