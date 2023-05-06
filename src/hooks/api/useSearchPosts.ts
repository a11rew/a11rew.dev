import useSWR from "swr";

import { IPost } from "@/lib/posts";

export default function useSearchPosts(query: string) {
  return useSWR(query ? ["search", query] : null, async () => {
    const res = await fetch(`/api/posts/search?query=${query}`);
    const posts = await res.json();

    return posts as IPost[];
  });
}
