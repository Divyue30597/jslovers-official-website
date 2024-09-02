"use client";

import { Icons } from "../Icons";

import React, {
  createContext,
  Dispatch,
  HTMLAttributes,
  ReactNode,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import useDropdownContext from "./useDropdownContext";

type DropdownProps = {
  children: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

type TDropdownContext = {
  setIsActive: Dispatch<SetStateAction<boolean>>;
  isActive: boolean;
};

type DropdownHeaderProps = {
  header: string;
  label?: string;
  setLabel?: Dispatch<SetStateAction<string>>;
} & HTMLAttributes<HTMLButtonElement>;

type DropdownBodyProps = {
  children: ReactNode;
  label?: string;
  header?: string;
} & HTMLAttributes<HTMLDivElement>;

export const DropdownContext = createContext<TDropdownContext | null>(null);

function Dropdown({ children, ...props }: DropdownProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <DropdownContext.Provider value={{ setIsActive, isActive }}>
      <div {...props}>{children}</div>
    </DropdownContext.Provider>
  );
}

function Header({ header, setLabel, label, ...props }: DropdownHeaderProps) {
  const { setIsActive, isActive } = useDropdownContext();

  const handleClick = () => {
    if (setLabel && typeof setLabel === "function") {
      setLabel(header);
      setIsActive((prevVal) => {
        if (label !== header) return true;
        return !prevVal;
      });
    } else {
      setIsActive(!isActive);
    }
  };

  return (
    <button onClick={handleClick} {...props}>
      <h3 className="mr-2">{header}</h3>
      <span
        className={`${isActive && header === label ? "rotate-180" : "rotate-0"} transition-all duration-300`}
      >
        {Icons.DownArrow()}
      </span>
    </button>
  );
}

function Body({ children, label, header, ...props }: DropdownBodyProps) {
  const { isActive } = useDropdownContext();
  const [height, setHeight] = useState("0px");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && header === label) {
      const contentHeight = contentRef.current?.scrollHeight || 0;
      setHeight(`${contentHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isActive, label, header]);

  return (
    <div
      ref={contentRef}
      style={{ height }}
      className={`overflow-hidden transition-all duration-300 ${
        isActive ? "visible opacity-100" : "invisible opacity-0"
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

Dropdown.Header = Header;
Dropdown.Body = Body;

export default Dropdown;
