import dynamic from "next/dynamic";
import { Suspense } from "react";

const Result = dynamic(() => import("./Result"));

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          กำลังโหลด...
        </div>
      }
    >
      <Result />
    </Suspense>
  );
}
