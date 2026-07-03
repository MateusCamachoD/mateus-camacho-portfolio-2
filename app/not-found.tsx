import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>This page took a different path.</h1>
      <p>The product is still here. The route isn&apos;t.</p>
      <Link href="/" className={buttonVariants({ variant: "primary" })}>
        <ArrowLeft className="size-4" />
        Return home
      </Link>
    </main>
  );
}
