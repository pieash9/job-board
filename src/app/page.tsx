import JobFilterSidebar from "@/components/JobFilterSidebar";
import JobResults from "@/components/JobResults";
import H1 from "@/components/ui/h1";
import { JobFilterValues } from "@/lib/validation";
import { Metadata } from "next";

interface HomePageProps {
  searchParams: {
    q?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function getTitle({ q, type, location, remote }: JobFilterValues) {
  const titlePrefix = q
    ? `${q} jobs`
    : type
      ? `${type} jobs`
      : remote
        ? "Remote jobs"
        : "All jobs";
  const titleSuffix = location ? `in ${location}` : "";
  return `${titlePrefix} ${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { q, type, location, remote },
}: HomePageProps): Metadata {
  return {
    title: `${getTitle({ q, type, location, remote: remote === "true" })} | Job Board`,
  };
}

export default async function HomePage({
  searchParams: { q, type, location, remote, page },
}: HomePageProps) {
  const filterValues: JobFilterValues = {
    q,
    type,
    location,
    remote: remote === "true",
  };

  return (
    <main className="mx-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults
          filterValues={filterValues}
          page={page ? parseInt(page) : undefined}
        />
      </section>
    </main>
  );
}
