"use client";

import { useState } from "react";
import Dropdown from "./Dropdown";
import { jobs_dropdown_options } from "@/lib/mock_data";

function JobsDropdown() {
  const [label, setLabel] = useState("");

  return (
    <div className="mb-10 flex items-center gap-x-8">
      <Dropdown>
        <div className="flex gap-6">
          {jobs_dropdown_options.filters.map((item, index) => {
            return (
              <Dropdown.Header
                key={index}
                header={item.label}
                label={label}
                setLabel={setLabel}
                style={{
                  backgroundColor: item.bgColor,
                }}
                className={`flex flex-row items-center rounded-[36px] border-[3px] px-6 py-2 text-xl font-semibold`}
              />
            );
          })}
        </div>
        <div>
          {jobs_dropdown_options.filters.map((item, index) => {
            return (
              <Dropdown.Body key={index} header={item.label} label={label}>
                {item.label === label && (
                  <ul className="mt-4 flex list-none flex-wrap gap-6">
                    {item.options.map((list, index) => {
                      return (
                        <button
                          className="rounded-[36px] border-2 border-solid border-[#F3F6E7] bg-[#F3F6E7] px-6 py-3 text-base transition-all duration-300 hover:border-black hover:bg-[#CCCCCC]"
                          key={index}
                        >
                          <li>{list}</li>
                        </button>
                      );
                    })}
                  </ul>
                )}
              </Dropdown.Body>
            );
          })}
        </div>
      </Dropdown>
    </div>
  );
}

export default JobsDropdown;
