import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'
import Shop from './components/Shop'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;