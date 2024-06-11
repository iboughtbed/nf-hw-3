import Link from "next/link";

import { Icons } from "~/components/icons";
import { ModeToggle } from "~/components/mode-toogle";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 py-5 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60">
      <div className="container relative flex h-8 items-center justify-between">
        <div className="flex w-full items-center justify-end gap-2">
          <ModeToggle />

          <Link
            href="/new"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            Add post
          </Link>
        </div>

        <Link
          href="/"
          className="absolute left-1/2 flex -translate-x-1/2 items-center justify-center py-3"
        >
          <Icons.logo />
        </Link>
      </div>
    </header>
  );
}
