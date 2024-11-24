import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './MainBlog.css';

const MainBlog = ({ blog, onBlogClick }) => {
  // Add a guard clause to prevent rendering if blog is undefined
  if (!blog) {
    return (
      <div className="blog-container">
        <div className="card-container">
          <BootstrapCard>
            <BootstrapCard.Body>
              <p>Loading...</p>
            </BootstrapCard.Body>
          </BootstrapCard>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <div className="card-container">
        <motion.div
          className="styled-card"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => onBlogClick(blog)}
        >
          <BootstrapCard>
            <img src={blog.contentImagePath} alt="Blog post" className="card-image" />
            <BootstrapCard.Body>
              <h3>{blog.title}</h3>
              <p>{blog.slug}</p>
            </BootstrapCard.Body>
          </BootstrapCard>
        </motion.div>
      </div>
    </div>
  );
};

export default MainBlog;