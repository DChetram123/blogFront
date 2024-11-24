import React, { useState, useEffect } from 'react';
import MainBlog from './MainBlog';
import OtherBlogs from './OtherBlogs';
import BlogMainRead from './BlogMainRead';
import BlogJson from './posts/postInfo.json';

const BlogContainer = () => {
  const [mainBlog, setMainBlog] = useState(null);
  const [otherBlogs, setOtherBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showMainBlog, setShowMainBlog] = useState(true);

  useEffect(() => {
    const loadBlogs = () => {
      try {
        // Get the first post as the main blog
        const mainPost = BlogJson.posts[0];
        setMainBlog(mainPost);

        // Get all other posts
        const remainingPosts = BlogJson.posts.slice(1);
        setOtherBlogs(remainingPosts);

        console.log('Main blog loaded:', mainPost);
        console.log('Other blogs loaded:', remainingPosts);
      } catch (error) {
        console.error('Failed to load blogs:', error);
      }
    };

    loadBlogs();
  }, []);
  useEffect(()=>{
    console.log(mainBlog)
  },[mainBlog])

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    setShowMainBlog(false);
  };

  const handleReturnBack = () => {
    setShowMainBlog(true);
    setSelectedBlog(null);
  };

  if (!mainBlog) {
    return <div className="text-center p-4">Loading...</div>;
  }

  return (
    <div className="mainContainer">
      {showMainBlog ? (
        <div className="animate_animated fade_out">
          <MainBlog 
            blog={mainBlog} 
            onBlogClick={handleBlogClick} 
          />
          {otherBlogs.length > 0 && (
            <OtherBlogs 
              blogs={otherBlogs} 
              onBlogClick={handleBlogClick} 
            />
          )}
        </div>
      ) : (
        <BlogMainRead 
          blogData={selectedBlog} 
          onReturnBack={handleReturnBack}
        />
      )}
    </div>
  );
};

export default BlogContainer;