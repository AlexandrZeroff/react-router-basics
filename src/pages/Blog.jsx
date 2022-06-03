import { React, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data))
  }, [])

  return (
    <div>
      <h1>Our news</h1>
      <div>
        <Link to='/posts/new'>Create a post</Link>
      </div>
      {
        posts.map(post => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))
      }
    </div>
  )
}

export default Blog
