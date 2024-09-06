"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/Button";
import SpeakerCard from "@/components/Cards/SpeakerCard";
import { Icons } from "@/components/Icons";
import { SPEAKERS } from "@/config/speakers";

export default function SpeakerAndVenueSection() {
  const [isTabActive, setIsTabActive] = useState(false);

  const pathname = usePathname();

  const handleClick = () => {
    setIsTabActive(!isTabActive);
  };
  return (
    <section className="relative mb-12">
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
          <Link
            href={`https://twitter.com/intent/tweet?text=All%20About%20Accessibility&hashtags=JSLovers,JavaScript&url=https://jslovers.com${pathname}`}
            className={cn(
              buttonVariants(),
              "twitter-share-button w-fit border-2 border-[#6295FF] bg-transparent text-base text-[#6295FF] hover:bg-[#6295FF] hover:text-white",
            )}
            target="_blank"
          >
            <span className="mr-3">Tweet a thanks</span>
            <span>{Icons.twitter()}</span>
          </Link>
        </>
      ) : (
        <div className="mb-4 mt-4 flex justify-start gap-3 overflow-x-scroll lg:overflow-x-auto">
          {SPEAKERS.Speakers.map((speaker) => {
            return <SpeakerCard key={speaker.id} speaker={speaker} />;
          })}
        </div>
      )}
    </section>
  );
}
