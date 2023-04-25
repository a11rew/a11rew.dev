import clsx from "clsx";
import Head from "next/head";
import Link from "next/link";
import React, { Fragment } from "react";

import SearchIcon from "@/assets/sprites/search.svg";
import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getAllPosts, IPost } from "@/lib/posts";

export default function PostsPage({
  postsGroupedByYear,
}: {
  postsGroupedByYear: Record<string, IPost[]>;
}) {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Posts | Andrew Glago</title>
      </Head>
      <div className="doc-padding max-w-[1158px] m-auto min-h-screen flex flex-col">
        <Header white />
        <div className="mt-[8vh] text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.45rem] font-medium cursor-default">
          <AnimatedLineBlock>Posts</AnimatedLineBlock>
        </div>

        <div className="mt-6 sm:mt-12 md:mt-24">
          <div className="flex items-center justify-end mb-2">
            <SearchIcon className="inline mr-4" />
            <input
              type="text"
              placeholder="Search for a post"
              className={clsx(
                "h-full py-2",
                "placeholder:text-theme-bg-black focus-visible:placeholder-slate-300 focus-visible:outline-none",
                "transition-width duration-1000 w-[8rem] focus-visible:w-full"
              )}
            />
          </div>
          <hr className="border-theme-text-white" />
          <div className="mt-8">
            {Object.entries(postsGroupedByYear)
              .reverse()
              .map(([year, posts], idx) => (
                <Fragment key={year}>
                  <div className="flex flex-col gap-4 md:flex-row">
                    <div className="text-[1.5rem] leading-[2.25rem] font-medium md:w-1/6">
                      {year}
                    </div>
                    <div className="md:w-5/6">
                      {posts.map((post, idx) => (
                        <Fragment key={post.slug}>
                          <div>
                            <Link
                              href={`/posts/${post.slug}`}
                              className="text-[1.125rem] leading-[1.75rem] font-medium underline underline-offset-4 hover:no-underline"
                            >
                              {post.title}
                            </Link>
                            <div className="mt-2 text-[0.875rem] leading-[1.25rem] text-theme-bg-black">
                              {new Date(post.date).toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </div>
                            {post?.tags && post?.tags?.length && (
                              <div className="mt-2 text-[0.875rem] leading-[1.25rem] text-theme-bg-black">
                                {post.tags.join(", ")}
                              </div>
                            )}
                          </div>
                          {
                            // Don't render a divider after the last post
                            idx !== posts.length - 1 && (
                              <hr
                                className="my-8 border-theme-text-white"
                                key={"hr" + post.slug}
                              />
                            )
                          }
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  {
                    // Don't render a divider after the last year
                    idx !== Object.keys(postsGroupedByYear).length - 1 && (
                      <hr className="my-8 border-theme-text-white" />
                    )
                  }
                </Fragment>
              ))}
          </div>
        </div>
      </div>

      <Footer page />
    </div>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  const postsGroupedByYear = allPosts.reduce((acc, post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);

    return acc;
  }, {} as Record<number, typeof allPosts>);

  return {
    props: { postsGroupedByYear },
  };
};
