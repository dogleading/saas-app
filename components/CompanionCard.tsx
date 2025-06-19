import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CompanionCardProps {
  id: string;
  name: string;
  topic: string;
  subject: string;
  duration: number;
  color: string;
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
}: CompanionCardProps) => {
  return (
    <article className="companion-card" style={{ backgroundColor: color }}>
      <div className="flex justify-between items-center">
        <div className="subject-badge">{subject}</div>
        <button className="companion-bookmark">
          <Image
            src={"/icons/bookmark.svg"}
            alt="bookmark"
            width={12}
            height={16}
          />
        </button>
      </div>

      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-sm ">{topic}</p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src={"/icons/clock.svg"}
            alt="duration"
            width={12}
            height={12}
          />
          <p className="textsm">{duration} minutes</p>
        </div>
      </div>

      <Link href={`/companion/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center hover:opacity-90 hover:text-white">
          Start Conversation
        </button>
      </Link>
    </article>
  );
};

export default CompanionCard;
