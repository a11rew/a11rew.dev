import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, withContent: boolean = false) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    ...data,
    ...(withContent && { content }),
  } as IPost;
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => !post?.draft)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export interface IPost {
  slug: string;
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  coverImage?: string;
  ogImage: {
    url: string;
  };
  content: string;
  draft?: boolean;
}
