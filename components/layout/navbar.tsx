"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import React from "react";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { authClient } from "@/lib/auth_client";
import { Logout } from "../logout";


export const NavBar = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { data: session, isPending } = authClient.useSession();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-sm dark:bg-gray-950/80"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 text-xl font-bold text-gray-900 dark:text-white"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 dark:bg-blue-800">
                <span className="text-sm font-bold text-white">NS</span>
              </div>
              <span>NoteStack</span>
            </Link>

            {/* Right side - Desktop */}
            <div className="hidden items-center space-x-4 md:flex">
              <ThemeToggle />
              
              {isPending ? (
                <div className="h-9 w-20 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
              ) : session ? (
                <>
                  <Button asChild size="sm">
                    <Link href="/dashboard">
                      <span>Dashboard</span>
                    </Link>
                  </Button>
                  <Logout />
                </>
              ) : (
                <>
                  <Button asChild variant="outline" size="sm">
                    <Link href="/login">
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href="/signup">
                      <span>Sign Up</span>
                    </Link>
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 md:hidden dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            menuOpen
              ? "max-h-screen opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          } transition-all duration-300`}
        >
          <div className="space-y-1 border-t border-gray-200 bg-white px-4 pb-4 pt-2 dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 dark:border-gray-800">
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Theme
              </span>
              <ThemeToggle />
            </div>

            <div className="space-y-2 pt-4">
              {isPending ? (
                <div className="h-9 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
              ) : session ? (
                <>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                      <span>Dashboard</span>
                    </Link>
                  </Button>
                  <Logout />
                </>
              ) : (
                <>
                  <Button asChild variant="outline" size="sm" className="w-full">
                    <Link href="/login" onClick={() => setMenuOpen(false)}>
                      <span>Login</span>
                    </Link>
                  </Button>
                  <Button asChild size="sm" className="w-full">
                    <Link href="/signup" onClick={() => setMenuOpen(false)}>
                      <span>Sign Up</span>
                    </Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};