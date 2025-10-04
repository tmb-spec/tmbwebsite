import { Suspense } from "react";
import TassenLoginClient from "./tassenloginclient"; // exakte Schreibweise beachten

export default function LoginPage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Lade...</p>}>
      <TassenLoginClient />
    </Suspense>
  );
}
