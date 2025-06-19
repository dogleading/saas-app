import CompanionForm from "@/components/CompanionForm";
import React from "react";

const NewCompanion = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-4 pb-8">
      <article className="w-full max-w-md lg:max-w-lg xl:max-w-xl gap-4 flex flex-col">
        <h1 className="text-2xl font-bold text-center">Companion Builder</h1>
        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
