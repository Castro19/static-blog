import React from "react";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/utils/getPostMetaData";
import fs from "fs";
import matter from "gray-matter";

function getPostContent(slug) {
  const folder = "posts/april/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf8");

  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({ slug: post.slug }));
};

export async function generateMetadata({ params, searchParams }) {
  const id = params?.slug ? " ⋅ " + params?.slug : "";
  return {
    title: `My Software Journey ${id.replaceAll("_", " ")}`,
  };
}

export default function BlogPage(props) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log(post);
  return (
    <main>
      <article>
        <Markdown>{post.content}</Markdown>
      </article>
    </main>
  );
}
