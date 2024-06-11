"use client";

import Image from "next/image";
import Link from "next/link";

import { Badge } from "~/components/ui/badge";
import type { Post } from "~/types";

export function PostItem({ body, id, tags, title }: Post) {
  // const [author, setAuthor] = React.useState<User>();

  // React.useEffect(() => {
  //   async function getAuthor() {
  //     try {
  //       const { data } = await getUser(userId);
  //       setAuthor(data);
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   }

  //   void getAuthor();
  // });

  // const fullName = `${author?.lastName} ${author?.firstName}`;

  // NOTE: not gonna lie, the dummyjson and axios combo is killing me hahahaha
  // I will only display the post info, without user info, due to 429 error

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center gap-1 text-sm font-medium">
        <Image
          alt="iboughtbed"
          src="https://github.com/iboughtbed.png"
          className="size-6 rounded-full border"
          height={24}
          width={24}
        />

        <p>Zhangaliev Sanzhar</p>
        <span>·</span>
        <p className="text-muted-foreground">7 july</p>
      </div>

      <div className="flex flex-col gap-4">
        <Link href={`/post/${id}`} className="text-2xl font-bold">
          {title}
        </Link>
        <p className="line-clamp-3">{body}</p>
      </div>

      <div className="flex items-center gap-3">
        {tags.map((tag, i) => (
          <Badge key={i} variant="secondary">
            {tag}
          </Badge>
        ))}

        <p className="text-sm text-muted-foreground">12 min read</p>
      </div>
    </div>
  );
}
