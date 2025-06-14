import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { slug } = useParams();

  return (
    <div className="p-10">
      <h1 className="text-2xl font-semibold">Post: {slug}</h1>
      <p className="mt-4">Content for the blog post will go here.</p>
    </div>
  );
};

export default PostPage;
