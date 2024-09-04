import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Talk } from "@/types";

const PreviousTalk = ({ data }: { data: Talk[] }) => {
  const createCardsList = () => {
    return data.map((item: Talk, index: number) => {
      return (
        <Link
          className="min-w-[262px]"
          href="#"
          key={`previousTalk.title + ${index}`}
        >
          <div className="carousel-item rounded-lg border-2 border-border p-5 transition-all duration-300 hover:shadow-[12px_12px_0px_-3px_#CCCCCC] mb-4 mr-4 lg:p-7">
            <div className="flex flex-col">
              <div className="mb-4 flex h-2/3 items-center justify-center">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={200}
                  height={200}
                />
              </div>
              <span className="text-base font-medium lg:text-[20px]">
                {item.date}
              </span>
              <h4 className="text-[20px] font-semibold lg:text-[28px]">
                {item.title}
              </h4>
              <p className="text-text-sub-heading text-lg font-semibold">
                by {item.speaker}
              </p>
            </div>
          </div>
        </Link>
      );
    });
  };
  return <>{data && createCardsList()}</>;
};

export default PreviousTalk;
