import { Suspense } from "react";
import FirstLoginClient from "./FirstLoginClient";

export default function FirstLoginPage() {
  return (
    <Suspense fallback={<div className="text-center mt-10">Lade...</div>}>
      <FirstLoginClient />
    </Suspense>
  );
}
