import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Admin",
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default AdminLayout;
