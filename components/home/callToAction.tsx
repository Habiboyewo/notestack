"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { authClient } from "@/lib/auth_client";

export default function CallToAction() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <section className="border-y border-gray-200 bg-white py-16 dark:border-gray-800 dark:bg-gray-950 md:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl">
            Ready to get started?
          </h2>


          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
            Start organizing your thoughts with a powerful note-taking system designed for clarity and efficiency.
          </p>

          
          {!isPending && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={session ? "/dashboard" : "/login"}
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-8 py-4 text-base font-semibold text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
              >
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          )}

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-gray-900 dark:text-white" />
              <span>Free to start</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-gray-900 dark:text-white" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-gray-900 dark:text-white" />
              <span>Secure</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}