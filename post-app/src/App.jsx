import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'

import './App.css'
import PostListPage from './pages/PostListPage'
import EditPostPage from './pages/EditPostPage'
import NewPostPage from './pages/NewPostPage'
import NotFoundPage from './pages/NotFoundPage'
import Home from './pages/Home'


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>

          <Route path="/" element={<Home/>} />
          <Route path="/posts" element={<PostListPage/>} />
          <Route path="/posts/:id/edit" element={<EditPostPage/>} />
          <Route path="/posts/new" element={<NewPostPage/>} />
          <Route path="*" element={<NotFoundPage/>} />
          
        </Route>
      </Routes>
    </>
  )
}

export default App