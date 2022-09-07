import Head from "next/head";
import { GetStaticProps } from "next";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Subscribe from "../components/subscribe";
import { getAllPostsForHome } from "../lib/api";
import MoreCategories from "../components/more-categories";

// Estoy bloqueado queriendo mostrar un enlace a la página de categoría,
// para poder diferenciar el contenido.

// 7 - 9. Me rindo por hoy :(

export default function Index({ allPosts: { edges }, preview }) {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);
  // Esta const la he copiado. No entiendo qué papel hace.
  const moreCategories = edges.slice(1);

  return (
    <Layout preview={preview}>
      <Head>
        <title>4thofJune</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.featuredImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}

        <Subscribe />
        {/* {moreCategories.length > 0 && <MoreCategories categories={moreCategories} />} */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const allPosts = await getAllPostsForHome(preview);

  return {
    props: { allPosts, preview },
    revalidate: 10,
  };
};
