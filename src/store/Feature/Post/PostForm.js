import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";
const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e) => {
    setContent(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (title !== "" && content !== "") {
      dispatch(addPost(title,content));
    }
  };
  return (
    <section>
      <h1>Add a New Post</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input id="title" onChange={titleHandler} />
        <label htmlFor="content">Content</label>
        <textarea id="content" onChange={contentHandler} />
        <button>Save Data</button>
      </form>
    </section>
  );
};
export default PostForm;
