"use client";

import { Settings2, Sparkles, Zap } from "lucide-react";
import React from "react";

const features = [
  {
    icon: Zap,
    title: "Highly Customizable",
    description:
      "Adapt the system to your workflow with flexible structure, layouts, and organization options designed to scale with your needs.",
  },
  {
    icon: Settings2,
    title: "Full Control",
    description:
      "Maintain complete control over how your notes are structured, organized, and managed without rigid constraints.",
  },
  {
    icon: Sparkles,
    title: "Expressive Writing",
    description:
      "Structure content with headings, lists, formatting, and blocks to clearly express ideas as they evolve.",
  },
];


export default function FeaturesSection() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("features-section");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section
      id="features-section"
      className="bg-gray-50 py-16 dark:bg-gray-900/50 md:py-32"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div
          className={`text-center transition-all duration-1000 ${
            isVisible
              ? "translate-y-0 opacity-100 blur-0"
              : "translate-y-3 opacity-0 blur-sm"
          }`}
        >
          <h2 className="text-balance text-4xl font-semibold text-gray-900 dark:text-white lg:text-5xl">
            Built to cover your needs
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Built to handle note-taking, organization, and structured thinking at scale.
          </p>
        </div>


        <div className="mx-auto mt-8 grid max-w-sm gap-6 md:mt-16 md:max-w-none md:grid-cols-3 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg shadow-gray-950/5 transition-all duration-1000 hover:shadow-xl hover:shadow-gray-950/10 dark:border-gray-800 dark:bg-gray-950 dark:shadow-black/20 ${
                  isVisible
                    ? "translate-y-0 opacity-100 blur-0"
                    : "translate-y-3 opacity-0 blur-sm"
                }`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
              >

                <div className="relative mx-auto mb-6 flex h-36 w-36 items-center justify-center">

                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-position-[24px_24px] opacity-50 dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)]"
                    style={{
                      maskImage:
                        "radial-gradient(circle at center, black 40%, transparent 60%)",
                      WebkitMaskImage:
                        "radial-gradient(circle at center, black 40%, transparent 60%)",
                    }}
                  />

                  <div className="relative z-10 flex h-12 w-12 items-center justify-center border-l border-t border-gray-300 bg-white shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:shadow-md dark:border-gray-700 dark:bg-gray-950">
                    <Icon
                      className="h-6 w-6 text-blue-600 dark:text-blue-400"
                      aria-hidden
                    />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="mb-3 text-lg font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Gradient Effect */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-br from-blue-500/5 to-purple-600/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
