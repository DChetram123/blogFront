import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './BlogMainRead.css';

const BlogMainRead = ({ blogData, onReturnBack }) => {
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const textPath = "/uploads/lostandfoundp1.txt"

  useEffect(() => {
    const loadContent = async () => {
      if (!blogData || !blogData.contentFilePath) {
        setError('Invalid blog data or missing content file path');
        return;
      }

      console.log('Loading content from:', blogData.contentFilePath);

      try {
        const response = await fetch(blogData.contentFilePath); // Fetch the file
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const text = await response.text();
        setContent(text);
        setError(null); // Clear any existing errors
        console.log('Content loaded successfully:', text.substring(0, 100) + '...');
      } catch (err) {
        console.error('Error loading content:', err);
        setError(`Failed to load content: ${err.message}`);
      }
    };

    loadContent();
  }, [blogData]);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } },
  };

  if (!blogData) {
    return <div className="error-message">No blog data provided</div>;
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="blog-read-container"
    >
      <motion.button
        onClick={onReturnBack}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="blog-read-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24px"
          height="24px"
        >
          <path d="M14 7l-5 5 5 5V7z" />
        </svg>
        
      </motion.button>

      <motion.h1 variants={titleVariants} className="blog-title">
        {blogData.title}
      </motion.h1>

      <motion.div variants={contentVariants} className="blog-content">
        <p className="blog-slug">{blogData.slug}</p>
        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="blog-text-content">
            {content ? (
              content.split('\n').map((paragraph, index) => (
                paragraph.trim() && (
                  <p key={index} className="blog-paragraph">
                    {paragraph}
                  </p>
                )
              ))
            ) : (
              <p>Loading content...</p>
            )}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BlogMainRead;
