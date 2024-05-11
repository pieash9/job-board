"use client";

import { useFormStatus } from "react-dom";
import LoadingButton from "./LoadingButton";

const FormSubmitBtn = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  const { pending } = useFormStatus();
  return <LoadingButton {...props} loading={pending} />;
};

export default FormSubmitBtn;
