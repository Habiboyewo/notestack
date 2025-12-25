"use client"

import * as React from "react";
import { Search } from "lucide-react";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";
import { useQueryState } from "nuqs";

function SearchFormContent({ ...props }: React.ComponentProps<"form">) {
  const [search, setSearch] = useQueryState("search", { defaultValue: "" });
  
  return (
    <form {...props}>
      <SidebarGroup className="py-0">
        <SidebarGroupContent className="relative">
          <Label htmlFor="search" className="sr-only">
            Search
          </Label>
          <SidebarInput
            id="search"
            placeholder="Search the docs..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <React.Suspense fallback={
      <form {...props}>
        <SidebarGroup className="py-0">
          <SidebarGroupContent className="relative">
            <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
          </SidebarGroupContent>
        </SidebarGroup>
      </form>
    }>
      <SearchFormContent {...props} />
    </React.Suspense>
  );
}