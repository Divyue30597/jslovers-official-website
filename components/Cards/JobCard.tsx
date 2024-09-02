import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/Button";
import Link from "next/link";
import { Icons } from "../Icons";

export type JobCardProps = Job & {
  className?: string;
};

type Job = {
  id: number;
  companyName: string;
  location: {
    city: string;
    country: string;
  };
  isRemote: boolean;
  experience: string;
  role: string;
  companyLogo: string;
};

const JobCard = ({
  companyName,
  location,
  isRemote,
  experience,
  role,
  companyLogo,
  className,
}: JobCardProps) => {
  return (
    <div
      className={cn(
        "border-border-card flex flex-col justify-between rounded-[10px] border-[3px] border-solid p-4",
        className,
      )}
    >
      <Image
        src={companyLogo}
        width="205"
        height="52"
        alt={companyName}
        loading="lazy"
      />
      <div className="border-border-heading my-3 border-[1.5px]" />
      <div className="mb-3 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="font-medium">{companyName}</p>
          {isRemote && (
            <p className="rounded bg-gray-200 px-2 py-1 text-sm font-medium">
              Remote
            </p>
          )}
        </div>
        <p className="text-2xl font-semibold">{role}</p>
        <div className="flex items-center gap-x-2">
          <p className="text-text-label-2 font-medium">Location</p>
          <p>
            <span className="text-text-sub-heading">{location?.city}</span>,{" "}
            {location?.country}
          </p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-text-label-2 font-medium">Experience</p>
          <p className="text-text-sub-heading">{experience}</p>
        </div>
      </div>
      <Link
        href={"#"}
        className={cn(
          buttonVariants(),
          "hover:text-white w-fit border-2 border-solid border-border",
        )}
      >
        <span className="mr-2">View Details</span>
        <span className="hover:text-inherit">{Icons.RightArrow()}</span>
      </Link>
    </div>
  );
};

export default JobCard;
