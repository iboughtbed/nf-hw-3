"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

import { useAuth } from "~/components/providers";
import { useMounted } from "~/hooks/use-mounted";
import { getPosts as _getPosts } from "~/lib/queries";
import type { Post } from "~/types";
import { PostList } from "./_components/post-list";

export default function HomePage() {
  const router = useRouter();
  const mounted = useMounted();
  const { token } = useAuth();

  const [posts, setPosts] = React.useState<Post[]>([]);

  React.useEffect(() => {
    if (!mounted) return;

    if (typeof window !== "undefined") {
      if (!token) {
        router.push("/signin");
      }
    }
  }, [token, router, mounted]);

  React.useEffect(() => {
    async function getPosts() {
      try {
        const { data } = await _getPosts();
        setPosts(data.posts);
      } catch (error) {
        console.log("error", error);
      }
    }

    void getPosts();
  }, []);

  return (
    <div className="container max-w-3xl">
      <div className="flex flex-col">
        <div className="relative overflow-hidden px-1 pb-10 pt-8 md:pt-16">
          <PostList posts={posts} />
        </div>
      </div>
    </div>
  );
}
