import { Routes, Route, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import Singlepage from './pages/Singlepage'
import Layout from './components/Layout'
import CreatePost from './pages/CreatePost'
import Editpost from './pages/Editpost'
import Loginpage from './pages/Loginpage'
import RequireAuth from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider'

function App() {
  return ( 
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='about-us' element={<Navigate to='/about' replace />} />
          <Route path='posts' element={<Blog />} />
          <Route path='posts/:id' element={<Singlepage />} />
          <Route path='posts/:id/edit' element={<Editpost />} />
          <Route path='posts/new' element={
            <RequireAuth>
              <CreatePost />
            </RequireAuth>
          } />
          <Route path='login' element={<Loginpage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </AuthProvider>

  );
}

export default App;
