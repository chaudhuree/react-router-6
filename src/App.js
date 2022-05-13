import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import About from './pages/About';
import Error from './pages/Error';
import Home from './pages/Home';
import Products from './pages/Products';
function App() {
  return <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route path='first' element={<div>First page</div>}></Route>
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
      </Route>
      <Route path='*' element={<Error />} />

    </Routes>
  </Router>;
}

export default App;
