"use client";
import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";
interface CustomInputProps {
  route: string;
  iconPosition: string;
  placeholder: string;
  otherClass?: string;
  imgSrc: string;
}
const LocalSearch = ({
  route,
  iconPosition,
  placeholder,
  otherClass,
  imgSrc,
}: CustomInputProps) => {
  return (
    <div className="relative w-full">
      <div
        className={`background-light800_darkgradient relative flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4 ${otherClass}
      `}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
        <Input
          type="text"
          placeholder={placeholder}
          value=""
          onChange={() => {}}
          className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
        />
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            alt="search"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearch;
