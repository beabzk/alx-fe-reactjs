import React, { useState } from "react";
import { usePosts } from "./usePosts";

function PostsComponent() {
  const { posts, isLoading, isError, error, refetch, addPost } = usePosts();
  const [newPostTitle, setNewPostTitle] = useState("");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  const handleAddPost = () => {
    addPost({ title: newPostTitle, body: "New post body", userId: 1 });
    setNewPostTitle("");
  };

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <div>
        <input
          type="text"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
          placeholder="Enter new post title"
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
