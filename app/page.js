import PostCard from "@/components/PostCard";
import getPostMetadata from "@/utils/getPostMetaData";

export default function Home() {
  const postMetaData = getPostMetadata("posts");
  console.log(postMetaData);
  return (
    <main>
      <div className="postsContainer">
        {postMetaData.map((post, postIndex) => (
          <PostCard key={postIndex} post={post} />
        ))}
      </div>
    </main>
  );
}
