import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import React from "react";
interface Props {
  _id: number;
  name: string;
  question?: string;
  showCount?: boolean;
}
const RenderTags = ({ _id, name, question, showCount }: Props) => {
  return (
    <Link href={`/tags/${_id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 border-none px-4">
        {name}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{question}</p>
      )}
    </Link>
  );
};

export default RenderTags;
