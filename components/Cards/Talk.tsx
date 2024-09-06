import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Talk } from "@/types";

const PreviousTalk = ({ data }: { data: Talk[] }) => {
  const createCardsList = () => {
    return data.map((item: Talk, index: number) => {
      return (
        <Link href="#" key={`previousTalk.title + ${index}`}>
          <div className="carousel-item h-full min-w-[262px] rounded-lg border-2 border-border p-5 lg:p-7">
            <div className="flex flex-col">
              <div className="mb-8 flex h-2/3 items-center justify-center">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  width={200}
                  height={200}
                />
              </div>
              <span className="text-[20px] font-medium">{item.date}</span>
              <h4 className="text-[28px] font-semibold">{item.title}</h4>
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
