import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Sprig } from "@/components/brand/botanicals";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="mx-auto max-w-2xl px-4 py-20 text-center">
        <div className="border-sage-deep/50 bg-accent-soft relative mx-auto flex h-48 w-40 items-end justify-center overflow-hidden rounded-t-full border">
          <Sprig className="text-sage-deep h-40 w-14" />
        </div>
        <p className="text-sage-deep mt-8 text-xs font-semibold tracking-[0.24em] uppercase">404</p>
        <h1 className="text-primary mt-2 text-5xl font-medium">
          This path has <em className="text-accent font-normal">wandered off</em>
        </h1>
        <p className="text-muted mt-4">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back to home</Link>
        </Button>
      </main>
      <Footer />
    </>
  );
}
