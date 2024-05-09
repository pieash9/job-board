import { ReactNode } from "react";

const Badge = ({ children }: { children: ReactNode }) => {
  return (
    <span className="rounded border bg-muted px-2 py-0.5 text-sm font-medium text-muted-foreground">
      {children}
    </span>
  );
};

export default Badge;
