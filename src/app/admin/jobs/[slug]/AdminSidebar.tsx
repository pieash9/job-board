"use client";

import FormSubmitBtn from "@/components/FormSubmitBtn";
import { Job } from "@prisma/client";
import { useFormState } from "react-dom";
import { approveSubmission, deleteJob } from "./action";

const AdminSidebar = ({ job }: { job: Job }) => {
  return (
    <aside className="flex w-[200px] flex-none flex-row items-center gap-2 md:flex-col md:items-stretch">
      {job.approved ? (
        <span className="text-center font-semibold text-green-500">
          Approved
        </span>
      ) : (
        <ApproveSubmissionButton jobId={job.id} />
      )}

      <DeleteJobButton jobId={job.id} />
    </aside>
  );
};

export default AdminSidebar;

const ApproveSubmissionButton = ({ jobId }: { jobId: number }) => {
  const [formState, formAction] = useFormState(approveSubmission, undefined);
  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId} />
      <FormSubmitBtn className="w-full bg-green-500 hover:bg-green-600">
        Approve
      </FormSubmitBtn>

      {formState?.error && (
        <p className="text-sm text-red-500">{formState?.error}</p>
      )}
    </form>
  );
};

const DeleteJobButton = ({ jobId }: { jobId: number }) => {
  const [formState, formAction] = useFormState(deleteJob, undefined);
  return (
    <form action={formAction} className="space-y-1">
      <input hidden name="jobId" value={jobId} />
      <FormSubmitBtn className="w-full bg-red-500 hover:bg-red-600">
        Delete
      </FormSubmitBtn>

      {formState?.error && (
        <p className="text-sm text-red-500">{formState?.error}</p>
      )}
    </form>
  );
};
