import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebasse.init";
import useAdmin from "../../hooks/useAdmin";

const Dashboard =()=>{
  const [user] =useAuthState(auth);
  const [admin] =useAdmin(user);
    return (
        <div>
		
        <div class="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content flex flex-col  ">
  <h1 className="text-3xl text-purple-500 font-bold">Welcome to my Dashboard </h1>
    <Outlet></Outlet>
  
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      {!admin && <li><Link to="/dashboard">My Orders</Link></li>}
    { !admin && <li><Link to="/dashboard/myreview">Add A Review</Link></li>}
      { admin && <li><Link to="/dashboard/myprofile">My Profile</Link></li>}
      { admin && <li><Link to="/dashboard/users">All Users</Link></li>}
      { admin && <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>}
      { admin && <li><Link to="/dashboard/manageAdmin">Manage Admin</Link></li>}
     
      
    </ul>
  
  </div>
</div>

        </div>
    );
};

export default Dashboard;
