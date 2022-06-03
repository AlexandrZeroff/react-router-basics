import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const CreatePost = () => {
  const navigate = useNavigate()
  const { signout } = useAuth()

  return (
    <div>
      <h1>Create a post</h1>
      <button
        type="text"
        onClick={() => signout(() => navigate('/', { replace: true }))}
      >Log out</button>
    </div>
  )
}

export default CreatePost
