import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Home from './Pages/Home';
import AllProduct from './Pages/Home/AllProduct';
import Blogs from './Pages/Home/Blogs';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import RequireAuth from './Pages/Login/RequireAuth';
import Footer from './Shared/Footer';
import Navbar from './Shared/Navbar';
import NotFound from './Shared/NotFound';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import MyReviews from './Pages/Dashboard/MyReviews';
import MyProfile from './Pages/Dashboard/MyProfile';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import ManageAdmin from './Pages/Dashboard/ManageAdmin';
import Payment from './Pages/Dashboard/Payment';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import AddProduct from './Pages/Dashboard/AddProduct';


function App() {
  return (
    <div>
    
        
     <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Home></Home>}></Route>
       <Route path="/home" element={<Home></Home>}></Route>
       <Route path="/products" element={<RequireAuth><AllProduct></AllProduct></RequireAuth>}></Route>

       <Route path="/dashboard" element={<RequireAuth><Dashboard></Dashboard></RequireAuth>}>
         <Route index element={<MyOrders></MyOrders>}></Route>
         <Route path="myreview" element={<MyReviews></MyReviews>}></Route>
         <Route path="payment/:id" element={<Payment></Payment>}></Route>
         <Route path="myprofile" element={<MyProfile></MyProfile>}></Route>
         <Route path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
         <Route path="makeAdmin" element={<RequireAdmin><MakeAdmin></MakeAdmin></RequireAdmin>}></Route>
         <Route path="manageAdmin" element={<RequireAdmin><ManageAdmin></ManageAdmin></RequireAdmin>}></Route>
         <Route path="addproduct" element={<RequireAdmin><AddProduct></AddProduct></RequireAdmin>}></Route>
    
       </Route>
       
       <Route path="/about" element={<About></About>}></Route>
       <Route path="/blogs" element={<Blogs></Blogs>}></Route>
       <Route path="/myportfolio" element={<MyPortfolio></MyPortfolio>}></Route>
       <Route path="/login" element={<Login></Login>}></Route>
       <Route path="/registration" element={<Registration></Registration>}></Route>
       <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
     <ToastContainer />
    </div>
  );
}

export default App;
