import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";

import AnimatedLineBlock from "@/components/animatables/AnimatedLineBlock";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import markdownToHtml from "@/lib/markdownToHTML";
import { getAllPosts, getPostBySlug, IPost } from "@/lib/posts";

type Props = {
  post: IPost;
  morePosts: IPost[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const title = `${post.title} | Andrew Glago`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <div>
        <div className="min-h-screen">
          <div className="doc-padding max-w-[1158px] m-auto min-h-screen flex flex-col">
            <Header white />
            <div className="mt-[8vh]">
              {router.isFallback ? (
                <div>Loading…</div>
              ) : (
                <>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.coverImage}
                    className="object-scale-down w-full mb-8 md:object-cover h-96"
                    alt={post.title}
                  />
                  <div className="mb-2 -ml-1 text-[2.25rem] leading-[3.25rem] md:text-[3.5rem] md:leading-[4.45rem] font-medium cursor-default">
                    <AnimatedLineBlock>{post.title}</AnimatedLineBlock>
                  </div>
                  <AnimatedLineBlock>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </AnimatedLineBlock>
                  <div className="italic text-theme-text-white-muted">
                    <AnimatedLineBlock>
                      {post.tags?.join(", ")}
                    </AnimatedLineBlock>
                  </div>

                  <hr className="my-8" />

                  <article className="prose">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post.content,
                      }}
                    />
                  </article>
                </>
              )}
            </div>
          </div>
        </div>
        <Footer page />
      </div>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, true);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts();

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
