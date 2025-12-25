"use client";

import * as React from "react";
import { SearchForm } from "@/components/search-form";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getNotebooks } from "@/server/notebooks";
import { SidebarData } from "./sidebar-data";
import Link from "next/link";

export function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const [data, setData] = React.useState({
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: [] as Array<{
      title: string;
      url: string;
      items: Array<{ title: string; url: string }>;
    }>,
  });

  React.useEffect(() => {
    getNotebooks().then((notebooks) => {
      setData({
        versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
        navMain: [
          ...(notebooks.notebooks?.map((notebook) => ({
            title: notebook.name,
            url: `/dashboard/${notebook.id}`,
            items: notebook.notes.map((note) => ({
              title: note.title,
              url: `/dashboard/notebook/${notebook.id}/note/${note.id}`,
            })),
          })) ?? []),
        ],
      });
    });
  }, []);

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link
          href="/"
          className="flex items-center py-2 space-x-2 text-xl font-bold text-gray-900 dark:text-white"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 dark:bg-blue-800">
            <span className="text-sm font-bold text-white">NS</span>
          </div>
          <span>NoteStack</span>
        </Link>
        <React.Suspense fallback={<div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />}>
          <SearchForm />
        </React.Suspense>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        <SidebarData data={data} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}