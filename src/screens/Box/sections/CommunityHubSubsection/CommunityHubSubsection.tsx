import {
  BrainCircuitIcon,
  DumbbellIcon,
  PlusIcon,
  UserIcon,
  UsersIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const communityCards = [
  {
    image: "/image.png",
    title: "城市跑团",
    badge: "热门",
    members: "235 成员",
  },
  {
    image: "/image-1.png",
    title: "健身打卡组",
    badge: "活跃",
    members: "189 成员",
  },
  {
    image: "/image-2.png",
    title: "瑜伽冥想",
    badge: null,
    members: "92 成员",
  },
  {
    image: "/image-3.png",
    title: "户外徒步",
    badge: null,
    members: "150 成员",
  },
];

const navigationItems = [
  {
    icon: DumbbellIcon,
    label: "运动",
    active: false,
  },
  {
    icon: BrainCircuitIcon,
    label: "AI教练",
    active: false,
  },
  {
    icon: UsersIcon,
    label: "社区",
    active: true,
  },
  {
    icon: UserIcon,
    label: "我的",
    active: false,
  },
];

export const CommunityHubSubsection = (): JSX.Element => {
  return (
    <div className="w-full max-w-[390px] min-h-screen relative bg-white shadow-[0px_3px_6px_#120f281f] flex flex-col">
      <header className="w-full bg-white border-0 border-none flex flex-col">
        <img className="w-full h-10" alt="Container" src="/container.svg" />
        <h1 className="w-full text-center py-[19px] [font-family:'Archivo',Helvetica] font-semibold text-[#171a1f] text-lg tracking-[0] leading-7">
          社区
        </h1>
        <img className="w-full h-px object-cover" alt="Line" src="/line.svg" />
      </header>

      <main className="flex-1 relative px-6 pt-6 pb-[100px]">
        <div className="flex bg-[#fafafb] rounded-[22px] border-0 border-none shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f] p-1 mb-8">
          <Button className="flex-1 h-9 bg-[#636ae8] hover:bg-[#636ae8]/90 rounded-md shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
            <span className="[font-family:'Inter',Helvetica] font-medium text-white text-base">
              社群
            </span>
          </Button>
          <Button
            variant="ghost"
            className="flex-1 h-9 hover:bg-transparent rounded-md"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[#565d6d] text-base">
              私信
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {communityCards.map((card, index) => (
            <Card
              key={index}
              className="bg-white rounded-[10px] border-0 border-none shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]"
            >
              <CardContent className="p-4">
                <img
                  className="w-full h-28 object-cover rounded mb-[15px]"
                  alt={card.title}
                  src={card.image}
                />
                <div className="flex items-start justify-between mb-[11px]">
                  <h3 className="[font-family:'Archivo',Helvetica] font-semibold text-[#171a1f] text-lg tracking-[0] leading-7">
                    {card.title}
                  </h3>
                  {card.badge && (
                    <Badge className="bg-[#e8618c] hover:bg-[#e8618c] rounded-[13px] h-[26px] px-2">
                      <span className="[font-family:'Inter',Helvetica] font-medium text-white text-xs tracking-[0] leading-5">
                        {card.badge}
                      </span>
                    </Badge>
                  )}
                </div>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#565d6d] text-sm tracking-[0] leading-5">
                  {card.members}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button className="fixed bottom-[81px] right-6 w-14 h-14 bg-[#636ae8] hover:bg-[#636ae8]/90 rounded-[28px] p-0 shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
          <PlusIcon className="w-6 h-6 text-white" />
        </Button>
      </main>

      <nav className="fixed bottom-0 left-0 right-0 w-full bg-white border-t border-[#e5e7eb] shadow-[0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1f]">
        <div className="flex w-full">
          {navigationItems.map((item, index) => (
            <button
              key={index}
              className="flex-1 h-16 flex flex-col items-center justify-center gap-1"
            >
              <item.icon
                className={`w-6 h-6 ${
                  item.active ? "text-[#636ae8]" : "text-[#565d6d]"
                }`}
              />
              <span
                className={`[font-family:'Inter',Helvetica] text-[10px] tracking-[0] leading-4 ${
                  item.active
                    ? "font-bold text-[#636ae8]"
                    : "font-normal text-[#565d6d]"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};
