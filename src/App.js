import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return <Router>
    <Routes>
      <Route path='/' element={<div>Home</div>}></Route>
      <Route path='testing' element={<h2>testing</h2>}></Route>
    </Routes>
  </Router>;
}

export default App;
