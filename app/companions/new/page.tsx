import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

const NewCompanion = async () => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

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
