import { Speaker } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImageDoubleFrame } from "@/components/ImageDoubleFrame";

const SpeakerCard = ({ speaker }: { speaker: Speaker }) => {
  return (
    <div
      style={{ minWidth: "208px" }}
      className="w-52 rounded-xl border-[6px] border-[#CCCCCC] p-4 lg:min-w-0"
    >
      <Image
        src={speaker.imageSrc}
        width={204}
        height={204}
        alt=""
        className="h-[164px] w-[164px] rounded-[10px] object-cover"
        loading="lazy"
      />

      <div className="flex flex-col items-center justify-between gap-2 py-2 lg:items-start">
        <div className="text-[16px] font-semibold leading-[normal] text-black ">
          {speaker.name}
        </div>
        <p className="text-[12px] font-normal leading-[normal] text-black">
          {`${speaker.designation}${
            speaker.company ? `, ${speaker.company}` : ""
          }`}
        </p>
        <p className="text-[14px] font-medium leading-[normal] text-[#383a48] lg:text-sm">
          {speaker.description}
        </p>
        <div className="flex w-fit items-center justify-center gap-4">
          {speaker.socials.map((social) => (
            <Link key={social.href} href={social.href} target="_blank">
              <Image
                src={`/assets/icons/${social.platform}.svg`}
                width={25}
                height={25}
                alt={social.platform}
                loading="lazy"
                className="transition-transform duration-200 ease-in-out hover:scale-[1.2]"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakerCard;
