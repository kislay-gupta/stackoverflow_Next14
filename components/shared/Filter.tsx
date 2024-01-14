"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
interface CustomInputProps {
  filters: {
    name: string;
    value: string;
  }[];
  otherClass?: string;
  containerClass?: string;
}
const Filter = ({ filters, containerClass, otherClass }: CustomInputProps) => {
  return (
    <>
      <div className={` relative ${containerClass}`}>
        <Select>
          <SelectTrigger
            className={`${otherClass} body-regular background-light800_dark300  light-border text-dark500_light700 w-full  px-5  py-2.5 md:w-[180px]`}
          >
            <div className="line-clamp-1">
              <SelectValue placeholder="Select a filter" />
            </div>
          </SelectTrigger>
          <SelectContent className=" text-light400_light500">
            <SelectGroup>
              {filters.map((tags) => {
                return (
                  <>
                    <SelectItem key={tags.value} value={tags.value}>
                      {tags.name}
                    </SelectItem>
                  </>
                );
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Filter;
