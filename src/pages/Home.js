import React from 'react'
import Header from '../components/Header'
import Gradient from '../components/Gradient'
import BlogContainer from '../components/blogPosts/BlogContainer'
import './Home.css'
const Home = () => {
  return (
    <div>
      <Gradient/>
      <Header/>
      <BlogContainer/>
    </div>
  )
}

export default Home
