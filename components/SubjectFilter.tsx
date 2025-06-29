"use client";

import { subjects } from "@/constants";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const SubjectFilter = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [subjectQuery, setSubjectQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (subjectQuery === "all") {
        const params = new URLSearchParams(searchParams);
        params.delete("subject");
        router.push(`${pathname}?${params.toString()}`);
      } else if (subjectQuery.trim()) {
        const params = new URLSearchParams(searchParams);
        params.set("subject", subjectQuery);
        router.push(`${pathname}?${params.toString()}`);
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [subjectQuery, router, searchParams, pathname]);

  return (
    <Select value={subjectQuery} onValueChange={setSubjectQuery}>
      <SelectTrigger className="w-[180px] relative border border-black rounded-lg items-center flex gap-2 px-2 py-1 h-fit input capitalize">
        <SelectValue placeholder="Select a Subject" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all" className="cursor-pointer capitalize">
          All Subjects
        </SelectItem>
        {subjects.map((subject) => (
          <SelectItem
            key={subject}
            value={subject}
            className="cursor-pointer capitalize"
          >
            {subject}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SubjectFilter;
