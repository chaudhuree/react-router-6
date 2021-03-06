import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
// import { StyledNavbar } from './components/StyledNavbar';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Error from './pages/Error';
import Home from './pages/Home';
import Login from './pages/Login';
import { PrivateRoute } from './pages/PrivateRoute';
import Products from './pages/Products';
import { SharedLayout } from './pages/SharedLayout';
import SingleProduct from './pages/SingleProduct';



function App() {
  const [user, setUser] = useState(null);
  return <Router>
    <Navbar />
    {/* <StyledNavbar/> */}
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        {/* index page */}
        <Route index element={<Home />}></Route>
        <Route path='first' element={<div>First page</div>}></Route>
        <Route path='about' element={<About />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:productId' element={<SingleProduct />} />
        <Route path='login' element={<Login setUser={setUser} />} />
        <Route path='*' element={<Error />} />
        <Route
          path='dashboard'
          element={
            <PrivateRoute user={user}>
              <Dashboard user={user} />
            </PrivateRoute>
          }
        />


      </Route>

    </Routes>
  </Router>;
}

export default App;
