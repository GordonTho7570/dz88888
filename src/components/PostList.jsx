import React from 'react';
import PostCard from './PostCard';

const PostList = ({ items }) => {
  return (
    <div className="post-list">
      {items.map((item) => (
        <PostCard key={item.id} data={item} />
      ))}
    </div>
  );
};

export default PostList;
