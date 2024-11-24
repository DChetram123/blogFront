import React from 'react'
import './OtherBlogs.css';
import { Card as BootstrapCard } from 'react-bootstrap';
import { motion } from 'framer-motion';
const OtherBlogs = ({ blogObjects, onBlogClick}) => {
  return (
    <div className="other-container">
      {blogObjects.map((blog, index) => (
        <div className="otherBlog" key={index} >
        <motion.div
          key={index}
          className="other-styled-card"
          whileHover={{ scale: 1.015 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={() => onBlogClick(index+1)}
        >
          <BootstrapCard>
            <BootstrapCard.Body>
              <h3>{blog.title}</h3>
              <p>{blog.slug}</p>
            </BootstrapCard.Body>
          </BootstrapCard>
        </motion.div>
        </div>
      ))}
    </div>
  )
}

export default OtherBlogs
