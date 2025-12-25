'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { authClient } from '@/lib/auth_client'

export default function HeroSection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const { data: session, isPending } = authClient.useSession()

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="overflow-hidden">

        <section className="relative">

          <div className="relative pt-24">
            <div className="absolute inset-0 -z-10 size-full bg-gradient-radial from-transparent via-transparent to-white dark:to-gray-950" />
            
            <div className="mx-auto max-w-5xl px-6">
              <div className="sm:mx-auto lg:mr-auto lg:mt-0">

                <h1 
                  className={`mt-8 max-w-2xl text-balance text-4xl font-medium transition-all duration-1000 md:text-6xl lg:mt-16 ${
                    isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-3 opacity-0 blur-sm'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  Your Thoughts, Perfectly Stacked.
                </h1>

                <p 
                  className={`mt-8 max-w-2xl text-pretty text-lg md:text-xl text-gray-600  transition-all duration-1000 dark:text-gray-400 ${
                    isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-3 opacity-0 blur-sm'
                  }`}
                  style={{ transitionDelay: '300ms' }}
                >
                 A fast, structured note-taking system built to capture, organize, and manage ideas at scale — structured for clarity, built for scale.
                </p>

                <div 
                  className={`mt-12 flex flex-wrap items-center gap-3 transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-3 opacity-0 blur-sm'
                  }`}
                  style={{ transitionDelay: '500ms' }}
                >
                  {!isPending && (
                    <div className="rounded-[calc(1rem+0.125rem)] border border-gray-200 bg-gray-100/50 p-0.5 dark:border-gray-800 dark:bg-gray-900/50">
                      <Link
                        href={session ? "/dashboard" : "/signup"}
                        className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-500 dark:bg-blue-800 px-6 text-base font-medium text-white shadow-lg shadow-blue-500/30 transition-all hover:shadow-xl hover:shadow-blue-500/40"
                      >
                        <span className="whitespace-nowrap">
                          {session ? "Back to Dashboard" : "Get Started Free"}
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div 
              className={`relative -mr-56 mt-8 overflow-hidden px-2 transition-all duration-1000 sm:mr-0 sm:mt-12 md:mt-20 ${
                isVisible ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-3 opacity-0 blur-sm'
              }`}
              style={{ 
                transitionDelay: '700ms',
                maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)'
              }}
            >
              <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl p-2 border border-gray-200 bg-white shadow-2xl shadow-gray-950/10 ring-1 ring-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:shadow-black/30 dark:ring-white/10">

                <div className="relative aspect-15/8 overflow-hidden rounded-2xl dark:hidden">
                  <Image
                    className="h-full w-full object-cover"
                    src="/heroImgLight.png"
                    alt="NoteStack app dashboard image"
                    width={2700}
                    height={1440}
                    priority
                  />
                </div>

                <div className="relative hidden aspect-15/8 overflow-hidden rounded-2xl dark:block">
                  <Image
                    className="h-full w-full object-cover"
                    src="/heroImgDark.png"
                    alt="NoteStack app dashboard image"
                    width={2700}
                    height={1440}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}