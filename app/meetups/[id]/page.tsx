"use client";
import { useState } from "react";
import { buttonVariants } from "@/components/Button";
import { Icons } from "@/components/Icons";
import { cn } from "@/lib/utils";
import { mock_speakers_list } from "@/lib/mock_data";
import SpeakerCard from "@/components/Cards/SpeakerCard";

export default function page() {
  const [isTabActive, setIsTabActive] = useState(false);

  const handleClick = () => {
    setIsTabActive(!isTabActive);
  };

  return (
    <div className="container">
      <section className="mb-8">
        <h1 className="mb-2 mt-8 text-3xl font-semibold ">
          All About Accessibility
        </h1>
        <p className="mb-6 text-[#505050] lg:w-[45%]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="lg:flex lg:gap-3">
          <div className="mb-4 h-52 rounded-xl bg-[#EAC1FD] lg:mb-0 lg:h-72 lg:w-[75%]"></div>
          <div className="h-fit rounded-xl border-2 border-[#9C9C9C] p-4 lg:w-[25%]">
            <p className="mb-4 flex flex-row items-center gap-4 text-sm text-[#9C9C9C] lg:text-[18px]">
              <span>{Icons.clock()}</span>
              On 24th October at 05:00PM to 07:00PM IST
            </p>
            <p className="flex flex-row items-center gap-4 text-sm text-[#9C9C9C] lg:text-[18px]">
              <span>{Icons.videoCamera()}</span>
              This is an online event.
            </p>
          </div>
        </div>
      </section>
      <section className="relative mb-8">
        <button
          onClick={handleClick}
          className={`${!isTabActive ? "border-b-[7px] border-b-[#AAC4FA]" : "text-[#676769]"} mr-4 p-2 text-2xl font-semibold`}
        >
          Details
        </button>
        <button
          onClick={handleClick}
          className={`${isTabActive ? "border-b-[7px] border-b-[#AAC4FA]" : "text-[#676769]"} p-2 text-2xl font-semibold`}
        >
          Speaker
        </button>
        <hr className="absolute top-[51px] -z-[1] w-full" />
        {!isTabActive ? (
          <>
            <div className="mb-6 mt-4 whitespace-pre-wrap text-base text-[#383A48] lg:w-[70%] lg:text-[20px]">
              {`Hello JSLovers, 

[Invites are out] 

Session Details: 

Talk 1: Accessibility Beyond Compliance 
Speaker: Tanisha Sabherwal, Software Engineer, JP Morgan (https://twitter.com/tanishaaa03) 

Talk 2: Nested Interactive Elements Accessibility 
Speaker: Gaurav Gupta, Lead Software Engineer, smallcase (https://twitter.com/gaurav5430) 

Meetup link will be shared over Invites. 

Thanks, 
JSLovers 

Team Venue - Online`}
            </div>
            <button
              className={cn(
                buttonVariants(),
                "border-2 border-[#6295FF] bg-transparent text-base text-[#6295FF] hover:bg-[#6295FF] hover:text-white",
              )}
            >
              <span className="mr-3">Tweet a thanks</span>
              <span>{Icons.twitter()}</span>
            </button>
          </>
        ) : (
          <div className="mb-4 mt-4 flex justify-start gap-3 overflow-x-scroll lg:overflow-x-auto">
            {mock_speakers_list.map((speaker) => {
              return <SpeakerCard key={speaker.id} speaker={speaker} />;
            })}
          </div>
        )}
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-medium">More by the Speaker</h2>
      </section>
      <section className="mb-8">
        <h2 className="text-3xl font-medium">Similar Meetups</h2>
      </section>
    </div>
  );
}
