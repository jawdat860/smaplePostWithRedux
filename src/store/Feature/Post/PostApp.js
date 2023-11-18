import { useSelector } from "react-redux";
import { postSelecter } from "./postSlice";
const PostApp = () => {
  const posts = useSelector(postSelecter);
  const listPost = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </article>
  ));
  return <section>
    <h1>Posts:</h1>
    {listPost}
    </section>;
};
export default PostApp;
