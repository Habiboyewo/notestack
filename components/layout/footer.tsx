'use client'

import Link from 'next/link'
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react'


const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
]

export function FooterComponent() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 dark:border-gray-800 dark:bg-gray-950 md:py-20">
      <div className="mx-auto max-w-5xl px-6">
        
        <Link href="/" aria-label="NoteStack home" className="mx-auto block w-fit">
          <div className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-900 dark:bg-white">
              <span className="text-base font-bold text-white dark:text-gray-900">NS</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 dark:text-white">NoteStack</span>
          </div>
        </Link>


        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => {
            const Icon = social.icon
            return (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </Link>
            )
          })}
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800" />

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} NoteStack. All rights reserved.
        </p>
      </div>
    </footer>
  )
}