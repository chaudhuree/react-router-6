import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Products from './pages/Products';
function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<div>First page</div>}></Route>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='products' element={<Products/>}/>
    </Routes>
  </Router>;
}

export default App;
