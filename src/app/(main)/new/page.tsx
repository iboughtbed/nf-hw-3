"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { useAuth } from "~/components/providers";
import { useMounted } from "~/hooks/use-mounted";
import { NewPostForm } from "./_components/new-post-form";

export default function NewPostPage() {
  const router = useRouter();
  const mounted = useMounted();
  const { user, token } = useAuth();

  React.useEffect(() => {
    if (!mounted) return;

    if (typeof window !== "undefined") {
      if (!token || !user) {
        router.push("/signin");
      }
    }
  }, [token, user, router, mounted]);

  return (
    <div className="container max-w-3xl">
      <div className="flex flex-col">
        <NewPostForm userId={user?.id} />
      </div>
    </div>
  );
}
