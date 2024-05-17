import { BrowserRouter, Routes, Route } from 'react-router-dom'


// pages & components
import Home from './pages/Home'
//import CustomerHome from './pages/CustomerHome';
import Navbar from './components/Navbar'
import Login from './components/Login';
import { CustomersContextProvider } from './context/CustomersContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CustomersContextProvider>
          <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
          </div>
        </CustomersContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

//<Route path="/Store" element={<CustomerHome />} />