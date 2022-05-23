import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home';
import AllProduct from './Pages/Home/AllProduct';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';

function App() {
  return (
    <div>
    
        
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/products" element={<AllProduct></AllProduct>}></Route>
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/registration" element={<Registration></Registration>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     
    </div>
  );
}

export default App;
