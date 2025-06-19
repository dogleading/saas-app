import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { getSubjectColor } from "@/lib/utils";

interface CompanionListProps {
  title: string;
  companions?: Companion[];
  classNames?: string;
}

const CompanionList = ({
  title,
  companions,
  classNames,
}: CompanionListProps) => {
  return (
    <article className={cn("companion-list", classNames)}>
      <h2 className="text-2xl font-bold">{title}</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-lg w-2/3">Lessons</TableHead>
            <TableHead className="text-lg">Subject</TableHead>
            <TableHead className="text-lg text-right">Duration</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companions?.map((companion) => {
            const { id, name, subject, duration, topic } = companion;
            return (
              <TableRow key={id}>
                <TableCell>
                  <Link href={`/companion/${id}`}>
                    <div className="flex items-center gap-2">
                      <div
                        className="size-[72]px flex items-center justify-center rounded-lg max-md:hidden"
                        style={{ backgroundColor: getSubjectColor(subject) }}
                      >
                        <Image
                          src={`/icons/${subject}.svg`}
                          alt={subject}
                          width={40}
                          height={40}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-lg font-bold">{name}</p>
                        <p className="text-sm text-muted-foreground">{topic}</p>
                      </div>
                    </div>
                  </Link>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="subject-badge w-fit max-md:hidden">
                      {subject}
                    </div>
                    <div
                      className="flex items-center justify-center rounded-lg w-fit p-2 md:hidden"
                      style={{ backgroundColor: getSubjectColor(subject) }}
                    >
                      <Image
                        src={`/icons/${subject}.svg`}
                        alt={subject}
                        width={18}
                        height={18}
                      />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right">{duration} minutes</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </article>
  );
};

export default CompanionList;
