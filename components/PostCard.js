import Link from "next/link";

const PostCard = (props) => {
  const { post } = props;
  return (
    <Link className="unstyled" href={`/post/${post.slug}`}>
      <div className="postCard">
        <h3>{post.title}</h3>
        <p>{post.bio}</p>
        <div className="statsContainer">
          <div>
            <h5>Priority 1</h5>
            <p>{post.priority1}</p>
          </div>
          <div>
            <h5>Priority 2</h5>
            <p>{post.priority2}</p>
          </div>
          <div>
            <h5>Priority 3</h5>
            <p>{post.priority3}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
