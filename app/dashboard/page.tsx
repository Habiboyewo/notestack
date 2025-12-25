import { CreateNotebookButton } from "@/components/create-notebook-button";
import NotebookCard from "@/components/notebook-card";
import { PageWrapper } from "@/components/page-wraper";
import { getNotebooks } from "@/server/notebooks";

export default async function Page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashboard", href: "/dashboard" }]}>
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold md:text-2xl">Notebooks</h1>
        <CreateNotebookButton />
      </div>

      {notebooks.success && notebooks.notebooks && notebooks.notebooks.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notebooks.notebooks.map((notebook) => (
            <NotebookCard key={notebook.id} notebook={notebook} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-12 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            No notebooks found.
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Create your first notebook to get started.
          </p>
        </div>
      )}

      {!notebooks.success && (
        <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-red-300 bg-red-50 py-12 dark:border-red-800 dark:bg-red-900/20">
          <p className="text-red-600 dark:text-red-400">
            Failed to load notebooks.
          </p>
          <p className="mt-1 text-sm text-red-500 dark:text-red-500">
            {notebooks.message || "Please try again later."}
          </p>
        </div>
      )}
    </PageWrapper>
  );
}