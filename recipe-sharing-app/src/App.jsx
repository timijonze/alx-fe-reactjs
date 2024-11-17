import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList'
import AddRecipeForm from './components/AddRecipeForm'
import { useRecipeStore } from './components/recipeStore'
import RecipeDetails from './components/RecipeDetails'
import EditRecipeForm from './components/EditRecipeForm'
import SearchBar from './components/SearchBar'
import FavoritesList from './components/FavoritesList'
import RecommendationsList from './components/RecommendationsList'
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';


const RecipeDetailsWrapper = (props) => 
  { const location = useLocation(); 
    const recipeId = location.state?.recipeId; 
    return <RecipeDetails recipeId={recipeId} {...props} />; 
  };


  const EditRecipeFormWrapper = (props) => 
    { const location = useLocation(); 
      const recipeId = location.state?.recipeId; 
      return <EditRecipeForm recipeId={recipeId} {...props} />; 
    };

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
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
      <nav> 
        <Link to="/">Home</Link> | <Link to="/favorites">Favorites</Link>
      </nav>
      <div> 
        <AddRecipeForm /> 
      </div> 
      <div> 
        <RecipeList /> 
        <Routes> 
          <Route path="/" element={<RecipeList />} /> 
          <Route path="/add" element={<AddRecipeForm />} /> 
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} /> 
          <Route path="/edit/:id" element={<EditRecipeFormWrapper />} /> 
          </Routes>
        </div>
        </Router>
        <div>
          <SearchBar />
        </div>
        <div>
          <RecommendationsList />
        </div>
    </>
  )
}

export default App