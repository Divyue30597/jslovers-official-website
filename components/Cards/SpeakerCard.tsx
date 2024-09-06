import { Speaker } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImageDoubleFrame } from "@/components/ImageDoubleFrame";

const SpeakerCard = ({
  speaker,
  isDoubleFrame = true,
}: {
  speaker: Speaker;
  isDoubleFrame: boolean;
}) => {
  return (
    <div
      className={
        isDoubleFrame
          ? "lg:mx-auto"
          : "min-w-[204px] rounded-xl border-[6px] border-[#CCCCCC] p-4"
      }
    >
      {isDoubleFrame ? (
        <ImageDoubleFrame>
          <Image
            src={speaker.imageSrc}
            width={204}
            height={204}
            alt=""
            className="h-[174px] w-[174px] rounded-[10px] object-cover lg:h-[204px] lg:w-[204px]"
            loading="lazy"
          />
        </ImageDoubleFrame>
      ) : (
        <div className="flex justify-center mb-4">
          <Image
            src={speaker.imageSrc}
            width={164}
            height={164}
            alt={speaker.name}
          />
        </div>
      )}

      <div
        className={
          isDoubleFrame
            ? "inline-flex w-[279px] flex-col items-center gap-2 py-2 lg:items-start"
            : "w-full"
        }
      >
        <div
          className={
            isDoubleFrame
              ? "text-2xl font-semibold leading-[normal] text-black lg:text-[40px]"
              : "mb-2 text-[16px] font-semibold"
          }
        >
          {speaker.name}
        </div>
        <p
          className={
            isDoubleFrame
              ? "text-base font-normal leading-[normal] text-black lg:text-lg"
              : "mb-2 text-[12px] font-normal"
          }
        >
          {`${speaker.designation}${
            speaker.company ? `, ${speaker.company}` : ""
          }`}
        </p>
        <p
          className={
            isDoubleFrame
              ? "w-[251px] text-xs font-medium leading-[normal] text-[#383a48] lg:text-sm"
              : "mb-4 text-[14px]"
          }
        >
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
