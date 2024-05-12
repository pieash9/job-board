import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Loader size={32} className="animate-spin" />
    </div>
  );
};

export default Loading;
