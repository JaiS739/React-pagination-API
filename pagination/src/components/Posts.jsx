import React from "react";

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ul className="list-group mb-4">
      {posts.map((e) => (
        <li key={e.id} className="list-group-item">
          {e.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
