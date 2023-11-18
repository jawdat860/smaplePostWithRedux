import PostApp from "./store/Feature/Post/PostApp";
import PostForm from "./store/Feature/Post/PostForm";

const App = () => {
  return (
    <main>
      <PostForm />
      <PostApp />
    </main>
  );
};

export default App;
