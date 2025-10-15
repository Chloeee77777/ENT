import { ChevronRightIcon } from "lucide-react";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const menuItems = [
  {
    icon: "/user.svg",
    label: "Personal Data",
    width: "w-[120px]",
  },
  {
    icon: "/award.svg",
    label: "Badges",
    width: "w-[65px]",
  },
  {
    icon: "/settings.svg",
    label: "Settings",
    width: "w-[72px]",
  },
  {
    icon: "/circle-help.svg",
    label: "Help & Support",
    width: "w-[131px]",
  },
  {
    icon: "/shield.svg",
    label: "Privacy Policy",
    width: "w-[120px]",
  },
];

const navigationItems = [
  {
    icon: "/dumbbell.svg",
    label: "Sports",
    active: false,
  },
  {
    icon: "/brain-cog.svg",
    label: "AI",
    active: false,
  },
  {
    icon: "/users.svg",
    label: "Community",
    active: false,
  },
  {
    icon: "/user.svg",
    label: "Me",
    active: true,
  },
];

export const MyProfileSubsection = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-white shadow-[0px_3px_6px_#120f281f]">
      <header className="flex flex-col bg-white border-0 border-none">
        <img className="w-full h-10" alt="Container" src="/container.svg" />

        <div className="flex justify-center items-center h-7 mt-5">
          <h1 className="[font-family:'Archivo',Helvetica] font-semibold text-[#171a1f] text-lg text-center leading-7 tracking-[0] whitespace-nowrap">
            Me
          </h1>
        </div>

        <Separator className="mt-[8.5px]" />
      </header>

      <main className="flex flex-col bg-white border-0 border-none">
        <section className="w-full flex flex-col items-center bg-[#f2f2fd] border-0 border-none py-8 px-6">
          <Avatar className="w-24 h-24 bg-[#f4fad6] rounded-[48px]">
            <AvatarImage src="/rectangle-13.png" alt="John Doe" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>

          <h2 className="mt-[19px] [font-family:'Archivo',Helvetica] font-semibold text-[#19191f] text-2xl tracking-[0] leading-8 whitespace-nowrap">
            John Doe
          </h2>

          <Button
            variant="outline"
            className="mt-[13px] h-9 bg-[#f2f2fd] rounded-md border border-solid border-[#19191f] [font-family:'Inter',Helvetica] font-medium text-[#19191f] text-sm"
          >
            Edit Profile
          </Button>
        </section>

        <nav className="flex flex-col gap-4 px-6 mt-6 pb-6">
          {menuItems.map((item, index) => (
            <Card
              key={index}
              className="bg-white rounded-[10px] border-0 border-none shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="flex items-center p-4 h-[60px]">
                <img className="w-6 h-6" alt={item.label} src={item.icon} />

                <span
                  className={`${item.width} ml-4 [font-family:'Inter',Helvetica] font-medium text-[#171a1f] text-lg tracking-[0] leading-7 whitespace-nowrap`}
                >
                  {item.label}
                </span>

                <ChevronRightIcon className="w-5 h-5 ml-auto text-[#171a1f]" />
              </CardContent>
            </Card>
          ))}
        </nav>
      </main>

      <footer className="flex flex-col gap-[0.5px] border-0 border-none shadow-[0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1f]">
        <Separator />

        <nav className="w-full flex bg-white border-0 border-none shadow-[0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1f]">
          <div className="w-full flex">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                className="flex-1 h-16 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <img className="w-6 h-6" alt={item.label} src={item.icon} />
                <span
                  className={`mt-1 [font-family:'Inter',Helvetica] ${item.active ? "font-bold text-[#636ae8]" : "font-normal text-[#565d6d]"} text-[10px] tracking-[0] leading-4 whitespace-nowrap`}
                >
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </footer>
    </div>
  );
};
