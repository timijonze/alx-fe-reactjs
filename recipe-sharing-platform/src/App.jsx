import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import "./index.css";
import HomePage from "./components/HomePage";
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return <>
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/recipe/:id" element={<RecipeDetail />}></Route>
      <Route path="/add-recipe" element={<AddRecipeForm />}></Route>
    </Routes>
  </Router>
  
  </>
}

export default App;
