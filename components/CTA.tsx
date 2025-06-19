import Image from "next/image";
import Link from "next/link";
import React from "react";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-badge">Start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Your Own AI Companion
      </h2>
      <p className="text-sm">
        Create a custom AI companion that suits your learning style and
        interests.
      </p>
      <Image src="/images/cta.svg" alt="CTA" width={400} height={300} />
      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={16} height={16} />
        <Link href="/companions/new">Build Your Companion</Link>
      </button>
    </section>
  );
};

export default Cta;
