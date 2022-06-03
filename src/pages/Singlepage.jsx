import React from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Editpost from './Editpost'

const Singlepage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/', {replace: true})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
  }, [id])

  return (
    <div>
      <button onClick={goBack}>Go back</button>
      {/* <button onClick={goHome}>Go home</button> */}
      {post && (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <button type="text">
            <Link to={`/posts/${id}/edit`}>
              Edit post
            </Link>
          </button>
        </>
      )}
    </div>
  )
}

export default Singlepage
