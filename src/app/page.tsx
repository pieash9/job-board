import JobListItem from "@/components/JobListItem";
import prisma from "@/lib/prisma";

export default async function Home() {
  const jobs = await prisma.job.findMany({
    where: { approved: true },
    orderBy: { createdAt: "desc" },
  });
  return (
    <main className="mx-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Developer Jobs
        </h1>
        <p className="text-muted-foreground">Find your dream job</p>
      </div>
      <section>
        <div className="space-y-4">
          {jobs.map((job) => (
            <JobListItem key={job.slug} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
}
