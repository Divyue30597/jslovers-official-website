import { Icons } from "@/components/Icons";
import { speaker_meetups_mock } from "@/lib/mock_data";
import PreviousTalk from "@/components/Cards/Talk";
import SpeakerAndVenueSection from "@/components/Meetups/DetailPageSection/SpeakerAndVenueSection";

export default function page() {
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
      <SpeakerAndVenueSection />
      <section className="mb-12">
        <h2 className="mb-8 text-center text-2xl font-medium lg:text-left lg:text-3xl">
          More by the Speaker
        </h2>
        <div className="flex flex-row gap-4 overflow-x-scroll md:gap-8 lg:gap-16 lg:overflow-x-auto">
          <PreviousTalk data={speaker_meetups_mock} />
        </div>
      </section>
      <section className="mb-8">
        <h2 className="mb-8 text-center text-2xl font-medium lg:text-left lg:text-3xl">
          Similar Meetups
        </h2>
        <div className="flex flex-row gap-4 overflow-x-scroll md:gap-8 lg:gap-16 lg:overflow-x-auto">
          <PreviousTalk data={speaker_meetups_mock} />
        </div>
      </section>
    </div>
  );
}
