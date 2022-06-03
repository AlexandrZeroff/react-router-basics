import { Outlet, NavLink } from 'react-router-dom'
import CustomLink from './CustomLink'
import React from 'react'


const Layout = () => {
  return (
    <div className='root-container'>
      <header className="app-header">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="main-container">
        <Outlet />
      </main>
      <footer className='footer'>React-Router 2021</footer>
    </div>
  )
}

export default Layout
