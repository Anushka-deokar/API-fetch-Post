//import { useState } from "react";

//const FetchPost = () => {
//  const [postId, setPostId] = useState("");
//  const [post, setPost] = useState(null);
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);

// const fetchPost = async () => {
//   if (!postId) {
//      setError("Please enter a post ID");
//       return;
//   }
//   setLoading(true);
//  setError(null);

//  try {
//     const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
//     if (!response.ok) {
//     throw new Error("Post not found");
// }
//  const data = await response.json();
//  setPost(data);
// } catch (err) {
//   setError(err.message);
//   setPost(null);
//  } finally {
//      setLoading(false);
//  }
// };

// return (
//   <div>
//     <input
//       type="number"
//     placeholder="Enter a post ID"
//   value={postId}
//   onChange={(e) => setPostId(e.target.value)}
// />
//  <button onClick={fetchPost}>Fetch Post</button>

//{loading && <p>Loading...</p>}
//  {error && <p style={{ color: "red" }}>{error}</p>}
//  {post && (
//     <div>
//       <h3>{post.title}</h3>
//     <p>{post.body}</p>
//  </div>
//   )}
// </div>
//  );
// };

// export default FetchPost;

