import Image from "next/image";
import React, { useState } from "react";

interface useDropdownInputType {
  dataArray: string[];
  defaultValue: string | null;
  type: string;
}

const useDropdownInput = (
  dataArray: string[],
  defaultValue: string | null,
  type = "10:00",
) => {
  const [selected, setSelected] = useState(defaultValue);
  const [open, setOpen] = useState(false);

  const handleSelectChild = (select: string) => {
    setSelected(select);
    setOpen(false);
  };

  const renderDropdown = () => {
    return (
      <div className="relative">
        <div
          className={`flex h-12 w-full cursor-pointer items-center justify-between overflow-hidden rounded border-[1px] border-black pl-2 pr-1.5 text-sm leading-[162.5%] md:h-14 md:pl-4 md:text-base 
            ${selected === null ? "text-gray-60" : "text-black"}`}
          onClick={() => setOpen(!open)}
        >
          {selected === null ? type : selected}

          <div
            className={`ml-1 inline-block h-6 w-6 bg-[url('/icons/chevron_down.svg')] bg-center bg-no-repeat duration-100 md:h-5 md:w-5 md:p-6 ${open ? "rotate-180" : "rotate-0"}`}
          />
        </div>
        <ul
          className={`absolute flex w-full translate-y-2 flex-col gap-[1px] overflow-hidden rounded bg-white shadow-lg duration-200 ${open ? "h-max max-h-56 p-2" : "h-0"}`}
        >
          {dataArray.map((item) => (
            <li
              key={item}
              className={`flex cursor-pointer items-center rounded p-2 text-sm md:text-base ${selected === item ? "bg-nomad-black text-white hover:bg-nomad-black" : "text-black hover:bg-gray-30"}`}
              onClick={() => handleSelectChild(item)}
            >
              <div
                className={`${selected === item ? "bg-[url('/icons/checkmark.svg')]" : ""} mr-2 inline-block h-3 w-3 bg-center`}
              ></div>
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  return { selected, renderDropdown };
};

export default useDropdownInput;
