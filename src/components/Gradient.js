import React from 'react'
import { motion } from 'framer-motion';
import './Gradient.css';
const Gradient = () => {
  return (
    <div>
<motion.div
  className="gradientBackground"
  initial={{ background: 'linear-gradient(45deg, #2C3E50, #BDC3C7)' }}
  animate={{
    background: [
      'linear-gradient(45deg, #2C3E50, #BDC3C7)',
      'linear-gradient(45deg, #34495E, #ECF0F1)',
      'linear-gradient(45deg, #95A5A6, #7F8C8D)'
    ]
  }}
  transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
>
</motion.div>
    </div>
  )
}

export default Gradient
