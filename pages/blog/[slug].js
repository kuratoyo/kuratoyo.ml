import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Sidemenu from "../../components/Sidemenu";
import Blog from "../../components/Blog";

export default function PostPage({ frontmatter, slug, content }) {
  return (
    <>
      <title>くらとよ</title>
      <div className="main">
        <div className="posts">
          <Blog content={marked(content)} frontmatter={frontmatter}></Blog>
        </div>
        <Sidemenu />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: { frontmatter, slug, content },
  };
}
