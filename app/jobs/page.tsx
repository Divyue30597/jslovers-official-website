import { buttonVariants } from "@/components/Button";
import { Icons } from "@/components/Icons";
import JobCard from "@/components/Cards/JobCard";
import { jobsList } from "@/lib/mock_data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import SignupForMeetupCard from "@/components/Cards/SignupForMeetupCard";
import JobsDropdown from "@/components/Dropdown/JobsDropdown";

export default async function page() {
  return (
    <div>
      <section className="container mt-20 flex flex-col items-center justify-center lg:mt-[10px]">
        <h1 className="page-heading text-5xl lg:text-7xl">Jobs</h1>
        <p className="text-text-paragraph mt-8 max-w-xl text-center text-[20px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className="mb-9 mt-10 grid w-full grid-cols-2 justify-items-center gap-3 lg:mb-[110px] lg:flex lg:items-center lg:justify-center lg:gap-x-12">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <Icons.amazon key={i} />
          ))}
        </div>
      </section>
      <section>
        <div className="hidden lg:container lg:block">
          <p className="mb-6 text-[20px] font-medium">
            Filter the job results as per your need
          </p>
          <JobsDropdown />
          <div className="border-divider mb-10 border-[1.5px]" />
        </div>
        <div className="carousel carousel-center flex max-w-full justify-between gap-7 lg:container lg:grid lg:grid-cols-4 lg:gap-4">
          {jobsList?.length > 0 &&
            jobsList.map((job, i) => (
              <JobCard
                key={i}
                {...job}
                className="carousel-item min-w-[280px] lg:min-w-min"
              />
            ))}
        </div>
        <p className="mb-14 mt-9 text-center text-2xl font-medium lg:hidden">
          Similar Jobs
        </p>
        <div className="carousel carousel-center mb-64 flex max-w-full justify-between gap-7 lg:hidden">
          {jobsList?.length > 0 &&
            jobsList.map((job, i) => (
              <JobCard
                key={i}
                {...job}
                className="carousel-item min-w-[280px] lg:min-w-min"
              />
            ))}
        </div>
        <div className="hidden items-center justify-center lg:flex">
          <button
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "my-16 border-2 border-solid border-border px-8 py-6 text-xl font-medium",
            )}
          >
            Load more
          </button>
        </div>
      </section>
      {/* <SignupForMeetupCard /> */}
      <section className="flex flex-col items-center justify-center bg-[#F3F6E6]">
        <p className="mb-5 mt-10 max-w-xs text-center text-2xl font-semibold lg:max-w-3xl lg:text-[40px]">
          Want to brushUp your learning and get ready for interviews ?
        </p>
        <p className=" text-text-paragraph max-w-xs text-center lg:max-w-2xl lg:text-xl">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <button
          className={cn(
            buttonVariants(),
            "mb-14 mt-9 border-2 border-solid border-border",
          )}
        >
          Start Learning
          <Image
            src="/assets/icons/right_arrow.svg"
            width="11"
            height="11"
            alt="right-arrow"
            className="ml-1"
            loading="lazy"
          />
        </button>
      </section>
    </div>
  );
}
