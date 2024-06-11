import * as React from "react";

import { Separator } from "~/components/ui/separator";
import type { Post } from "~/types";
import { PostItem } from "./post-item";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col gap-16">
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <PostItem {...post} />
          <Separator />
        </React.Fragment>
      ))}
    </div>
  );
}
