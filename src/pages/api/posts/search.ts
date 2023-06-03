import Fuse from "fuse.js";
import type { NextApiRequest, NextApiResponse } from "next";

import { getAllPosts } from "@/lib/posts";

type Payload = {
  query: string;
};

const posts = getAllPosts();

const fuse = new Fuse(posts, {
  keys: ["title", "slug", "date", "tags"],
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { query } = req.query as Payload;

  if (!query) {
    return res.status(400).json({ name: "Bad Request" });
  }

  const results = fuse.search(query).map((result) => result.item);

  res.status(200).json(results);
}
