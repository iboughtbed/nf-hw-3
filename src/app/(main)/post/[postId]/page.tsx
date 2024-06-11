"use client";

import { HeartIcon, MessageCircleIcon } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import * as React from "react";
import { toast } from "sonner";

import { useAuth } from "~/components/providers";
import { AspectRatio } from "~/components/ui/aspect-ratio";
import { Button } from "~/components/ui/button";
import { Separator } from "~/components/ui/separator";
import { useMounted } from "~/hooks/use-mounted";
import { deletePost } from "~/lib/actions";
import { getPost as _getPost } from "~/lib/queries";
import type { Post } from "~/types";

export default function PostPage({ params }: { params: { postId: string } }) {
  const router = useRouter();
  const mounted = useMounted();
  const { token } = useAuth();

  const [post, setPost] = React.useState<Post>();
  const id = parseInt(params.postId);

  React.useEffect(() => {
    if (!mounted) return;

    if (typeof window !== "undefined") {
      if (!token) {
        router.push("/signin");
      }
    }
  }, [token, router, mounted]);

  React.useEffect(() => {
    async function getPost() {
      try {
        const { data: post } = await _getPost(id);
        setPost(post);
      } catch (error) {
        console.log("error", error);
      }
    }

    void getPost();
  }, [id]);

  async function handleDelete() {
    try {
      await deletePost(id);
      toast.success("Successfully deleted the post");
      router.push("/");
    } catch (error) {
      console.log("error", error);
      toast.error("Something went wrong, try again");
    }
  }

  if (!post) return <></>;

  return (
    <div className="container max-w-3xl">
      <div className="flex flex-col">
        <div className="relative overflow-hidden px-1 pb-10 pt-8 md:pt-16">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2 font-medium">
              <Image
                alt="iboughtbed"
                src="https://github.com/iboughtbed.png"
                className="size-12 rounded-full border"
                height={48}
                width={48}
              />

              <div className="flex flex-col text-sm">
                <p>Zhangaliev Sanzhar</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <p>7 july</p> ·<p>12 min read</p> ·<p>Member-only</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-2xl font-bold">{post.title}</h1>
              <p className="line-clamp-1">{post.body}</p>
            </div>

            <AspectRatio ratio={16 / 9}>
              <Image
                alt="image"
                src="/og.png"
                priority
                fill
                className="rounded-md"
              />
            </AspectRatio>

            <div className="">
              <p>{post.body}</p>
            </div>

            <Separator />

            <div className="flex items-center gap-3">
              <div className="flex items-center text-xs text-muted-foreground">
                <HeartIcon className="mr-1 size-4 fill-current" />{" "}
                {post.reactions.likes}
              </div>
              <div className="flex items-center text-xs text-muted-foreground">
                <MessageCircleIcon className="mr-1 size-4 fill-current" />{" "}
                {post.reactions.dislikes}
              </div>
            </div>

            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
