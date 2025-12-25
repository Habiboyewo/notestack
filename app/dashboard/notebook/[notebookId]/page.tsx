import { CreateNoteButton } from "@/components/create-note-button";
import NoteCard from "@/components/note-card";
import { PageWrapper } from "@/components/page-wraper";
import { getNotebookById } from "@/server/notebooks";

type Params = Promise<{
  notebookId: string;
}>;

export default async function NotebookPage({ params }: { params: Params }) {
  const { notebookId } = await params;

  const { notebook } = await getNotebookById(notebookId);

  if (!notebook) {
    return (
      <PageWrapper
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Notebook", href: `/dashboard/notebook/${notebookId}` },
        ]}
      >
        <div className="flex flex-col items-center justify-center py-12">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Notebook not found
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            This notebook doesn&apos;t exist or has been deleted.
          </p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashboard", href: "/dashboard" },
        {
          label: notebook.name,
          href: `/dashboard/notebook/${notebookId}`,
        },
      ]}
    >
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold md:text-2xl">{notebook.name}</h1>
        <CreateNoteButton notebookId={notebookId} />
      </div>

      {notebook.notes && notebook.notes.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {notebook.notes.map((note) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center rounded-lg border border-dashed border-gray-300 py-12 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            No notes in this notebook yet.
          </p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-500">
            Create your first note to get started.
          </p>
        </div>
      )}
    </PageWrapper>
  );
}