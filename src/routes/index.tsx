import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BLOQE" },
      {
        name: "description",
        content: "BLOQE — proyecto en construcción.",
      },
      { property: "og:title", content: "BLOQE" },
      {
        property: "og:description",
        content: "BLOQE — proyecto en construcción.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-[0.3em] text-foreground">
          BLOQE
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Próximamente
        </p>
      </div>
    </div>
  );
}
