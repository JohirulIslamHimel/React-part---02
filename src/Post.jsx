export default function Post({ post }) {
  //   destructuring from object
  //   const { title, body } = post;
  return (
    <div className="card">
      {/* direct access from object */}
      <h5>{post.title}</h5>
      <p>Post: {post.body}</p>
      {/* destructuring from object */}
      {/* <h5>{title}</h5>
      <p>Post: {body}</p> */}
    </div>
  );
}
