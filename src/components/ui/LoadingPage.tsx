import { Loader2Icon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="animate-spin">
          <Loader2Icon size={48} className="text-amber-600" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
