"use client";
import Image from "next/image";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { clock, email, location, whastaap } from "@/public/assets";
import { formSchema } from "@/lib/validation";
import { Textarea } from "../ui/textarea";

const Contacts = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    form.reset();
  }

  return (
    <div className="px-8 text-center pt-20 bg-contactbg pb-8 md:flex gap-14 justify-around">
      <div>
        <h2 className="pt-4 capitalize">We Are Available For Freelance</h2>
        <h1 className="text-[30px] mt-2 capitalize">Let's Work Together!</h1>
        <div className="mt-4 flex flex-col">
          <div className="flex gap-4 items-start ">
            <Image src={email} alt="email" width={32} height={32} />
            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-bold">Email</h2>
              <p>sangaamosi04@gmail.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-start mt-4">
            <Image src={whastaap} alt="email" width={32} height={32} />
            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-bold">Whatsaap</h2>
              <p>+25564454589</p>
            </div>
          </div>
          <div className="flex gap-4 items-start mt-4">
            <Image src={location} alt="email" width={32} height={32} />
            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-bold">Adress</h2>
              <p>Upanga Dar es salaam Tz</p>
            </div>
          </div>
          <div className="flex gap-4 items-start mt-4">
            <Image src={clock} alt="email" width={32} height={32} />
            <div className="flex flex-col gap-2 text-left">
              <h2 className="font-bold">Working Hours</h2>
              <p>Flexible</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 md:mt-0 md:min-w-[300px] lg:min-w-[400px] bg-light-1 p-4 py-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="focus:border-none focus:outline-none"
                      placeholder="Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Email" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={5}
                      placeholder="Message here ..."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-[13px] hidden">
              Thanks for your time 🙏, i will come back to you as soon as
              possible
            </p>
            <Button
              type="submit"
              className="hover:bg-green-500 mx-auto bg-green-400 transition-all duration-300"
            >
              Send
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Contacts;
