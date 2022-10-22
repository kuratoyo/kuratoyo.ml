import Head from "next/head";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Post from "../components/Post.jsx";
import Sidemenu from "../components/Sidemenu";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>くらとよ</title>
      </Head>
      <div className="main">
        <div className="posts">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
        <Sidemenu />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug,
      frontmatter,
    };
  });
  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.frontmatter.date) > new Date(postB.frontmatter.date) ? -1 : 1
  );

  return {
    props: {
      posts: sortedPosts,
    },
  };
}
