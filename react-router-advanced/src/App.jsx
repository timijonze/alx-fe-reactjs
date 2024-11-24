import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import AuthProvider from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';



const Home = () => { 
  return <h2>Home Page</h2>; 
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <AuthProvider>
      <Router>
        <div>
          <h1>Sam's Blog Post</h1>
          <nav>
            <Link to="/">Home</Link>
            {' | '}
            <Link to="/profile">Profile</Link>
            {' | '}
            <Link to="/posts">Posts</Link>
            {' | '}
            <Link to="/blog/1">Blog Post 1</Link>
            {' | '}
            <Link to="/blog2">Blog Post 2</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/*" element={<Profile />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
      </AuthProvider>
      
    </>
  )
}

export default App
