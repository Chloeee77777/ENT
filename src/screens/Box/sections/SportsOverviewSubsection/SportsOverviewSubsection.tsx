import { BarChart3Icon, HomeIcon, SettingsIcon, UserIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const daysOfWeek = [
  { label: "Mon", left: "left-[67px]" },
  { label: "Tue", left: "left-[102px]" },
  { label: "Wed", left: "left-[133px]" },
  { label: "Thu", left: "left-[169px]" },
  { label: "Fri", left: "left-[206px]" },
  { label: "Sat", left: "left-[237px]" },
  { label: "Sun", left: "left-[269px]" },
];

const yAxisLabels = [
  { label: "0k", top: "top-[159px]", left: "left-[57px]" },
  { label: "0.25k", top: "top-[118px]", left: "left-10" },
  { label: "0.5k", top: "top-[78px]", left: "left-[47px]" },
  { label: "0.75k", top: "top-[37px]", left: "left-[41px]" },
  { label: "1k", top: "top-px", left: "left-[60px]" },
];

const gridLines = [
  { src: "/group.png", top: "top-[63.74%]" },
  { src: "/group-1.png", top: "top-[48.85%]" },
  { src: "/group-2.png", top: "top-[33.96%]" },
  { src: "/group-3.png", top: "top-[19.07%]" },
  { src: "/group-4.png", top: "top-[4.18%]" },
];

const dataPoints = [
  { src: "/group-6.png", top: "top-[32.30%]", left: "left-0" },
  { src: "/group-7.png", top: "top-[23.37%]", left: "left-[12.08%]" },
  { src: "/group-8.png", top: "top-[20.39%]", left: "left-[22.87%]" },
  { src: "/group-9.png", top: "top-[26.35%]", left: "left-[33.66%]" },
  { src: "/group-10.png", top: "top-[14.43%]", left: "left-[44.44%]" },
  { src: "/group-11.png", top: "top-[5.50%]", left: "left-[55.23%]" },
  { src: "/group-12.png", top: "top-[11.46%]", left: "left-[66.02%]" },
];

const leaderboardData = [
  {
    rank: "1.",
    name: "Michael Johnson",
    avatar: "/rectangle.png",
    avgDistance: "1500m Daily Avg",
    bgColor: "bg-[#fafafb]",
    avatarBg: "bg-[#ffeee1]",
  },
  {
    rank: "2.",
    name: "Sarah Chen",
    avatar: "/rectangle-1.png",
    avgDistance: "1350m Daily Avg",
    bgColor: "bg-white",
    avatarBg: "bg-[#f9f3e4]",
  },
  {
    rank: "3.",
    name: "David Rodriguez",
    avatar: "/rectangle-2.png",
    avgDistance: "1200m Daily Avg",
    bgColor: "bg-[#fafafb]",
    avatarBg: "bg-[#e9f8e5]",
  },
];

const navigationItems = [
  { icon: HomeIcon, label: "Community", active: false },
  { icon: BarChart3Icon, label: "Sports", active: true },
  { icon: UserIcon, label: "Profile", active: false },
  { icon: SettingsIcon, label: "Settings", active: false },
];

export const SportsOverviewSubsection = (): JSX.Element => {
  return (
    <div className="w-full flex flex-col bg-white shadow-[0px_3px_6px_#120f281f]">
      <header className="flex flex-col bg-white border-0 border-none">
        <img className="w-full h-10" alt="Container" src="/container.svg" />

        <h1 className="text-center mt-5 [font-family:'Archivo',Helvetica] font-semibold text-[#171a1f] text-lg tracking-[0] leading-7 whitespace-nowrap">
          Sports
        </h1>

        <img
          className="w-full mt-[8.5px] h-px object-cover"
          alt="Line"
          src="/line.svg"
        />
      </header>

      <main className="flex flex-col px-6 py-6 border-0 border-none">
        <Card className="bg-white rounded-2xl border-0 border-none shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1f]">
          <CardContent className="p-0">
            <div className="relative h-[326px]">
              <h2 className="absolute top-[19px] left-4 [font-family:'Archivo',Helvetica] font-semibold text-[#171a1f] text-xl tracking-[-0.50px] leading-7 whitespace-nowrap">
                Daily Progress
              </h2>

              <div className="absolute top-[60px] left-4 w-[334px] h-[250px]">
                <div className="absolute top-0 left-0 w-[310px] h-[250px] overflow-hidden border-0 border-none">
                  <div className="relative w-[99.68%] h-[108.80%] top-[-2.74%] left-[22.90%] flex">
                    <div className="flex-1 w-[309px] flex">
                      <div className="flex-1 w-[309px] flex">
                        <div className="flex-1 w-[309px] relative">
                          {gridLines.map((line, index) => (
                            <img
                              key={`grid-${index}`}
                              className={`absolute w-[64.72%] h-0 ${line.top} left-[2.91%] object-cover`}
                              alt="Group"
                              src={line.src}
                            />
                          ))}

                          <img
                            className="absolute w-[64.72%] h-[26.80%] top-[6.97%] left-[2.59%]"
                            alt="Group"
                            src="/group-5.png"
                          />

                          {dataPoints.map((point, index) => (
                            <img
                              key={`point-${index}`}
                              className={`absolute w-[2.59%] h-[2.94%] ${point.top} ${point.left}`}
                              alt="Group"
                              src={point.src}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {daysOfWeek.map((day, index) => (
                  <div
                    key={`day-${index}`}
                    className={`absolute top-[177px] ${day.left} [font-family:'Inter',Helvetica] font-normal text-[#565d6d] text-xs tracking-[0] leading-4 whitespace-nowrap`}
                  >
                    {day.label}
                  </div>
                ))}

                {yAxisLabels.map((label, index) => (
                  <div
                    key={`y-axis-${index}`}
                    className={`absolute ${label.top} ${label.left} [font-family:'Inter',Helvetica] font-normal text-[#565d6d] text-xs tracking-[0] leading-4 whitespace-nowrap`}
                  >
                    {label.label}
                  </div>
                ))}
              </div>

              <div className="absolute top-[293px] left-[101px] w-2 h-2 bg-[#636ae8] rounded-sm border-0 border-none" />

              <div className="absolute top-[289px] left-[115px] [font-family:'Inter',Helvetica] font-normal text-[#171a1f] text-xs tracking-[0] leading-4 whitespace-nowrap">
                Swimming Distance
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="mt-[27px] [font-family:'Archivo',Helvetica] font-semibold text-[#171a1f] text-xl tracking-[0] leading-7 whitespace-nowrap">
          Leaderboard
        </h2>

        <div className="flex flex-col gap-2 mt-[13px]">
          {leaderboardData.map((entry, index) => (
            <Card
              key={`leaderboard-${index}`}
              className={`${entry.bgColor} rounded-2xl border-0 border-none ${index === 1 ? "shadow-none" : ""}`}
            >
              <CardContent className="p-0">
                <div className="flex items-center h-20 px-4">
                  <div className="[font-family:'Inter',Helvetica] font-bold text-[#636ae8] text-lg tracking-[0] leading-7 whitespace-nowrap">
                    {entry.rank}
                  </div>

                  <div
                    className={`w-10 h-10 ml-3 ${entry.avatarBg} rounded-[20px] flex overflow-hidden border-0 border-none`}
                  >
                    <img
                      className="flex-1 w-10"
                      alt="Rectangle"
                      src={entry.avatar}
                    />
                  </div>

                  <div className="ml-3 [font-family:'Inter',Helvetica] font-medium text-[#171a1f] text-base tracking-[0] leading-6">
                    {entry.name}
                  </div>

                  <div className="ml-auto [font-family:'Inter',Helvetica] font-normal text-[#565d6d] text-sm tracking-[0] leading-5 whitespace-nowrap">
                    {entry.avgDistance}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <nav className="flex flex-col gap-[0.5px] border-0 border-none shadow-[0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1f]">
        <img
          className="w-full mt-[-0.5px] h-px object-cover"
          alt="Line"
          src="/line.svg"
        />

        <div className="w-full flex bg-white border-0 border-none shadow-[0px_8px_17px_#171a1f26,0px_0px_2px_#171a1f1f]">
          <div className="w-full flex">
            {navigationItems.map((item, index) => (
              <div key={`nav-${index}`} className="flex-1 h-16 relative">
                <item.icon
                  className={`absolute top-[calc(50.00%_-_20px)] left-[calc(50.00%_-_12px)] w-6 h-6 ${
                    item.active ? "text-[#636ae8]" : "text-[#565d6d]"
                  }`}
                />

                <div
                  className={`absolute top-[calc(50.00%_+_4px)] left-1/2 -translate-x-1/2 [font-family:'Inter',Helvetica] ${
                    item.active
                      ? "font-bold text-[#636ae8]"
                      : "font-normal text-[#565d6d]"
                  } text-[10px] tracking-[0] leading-4 whitespace-nowrap`}
                >
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};
