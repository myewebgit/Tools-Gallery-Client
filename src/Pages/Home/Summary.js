import React from "react";
import { useNavigate } from "react-router-dom";

const Summary =()=>{
  const navigate =useNavigate();
    return (
        <div className="py-10">
          <div class="hero min-h-screen bg-base-200">
  <div class="hero-content">
    <div class="max-w-96">
      <h1 class="text-sm ">News</h1>
      <p class="py-6 text-5xl text-green-900 font-bold">Tools-Gallery Named to TIME’s List of the TIME100 Most Influential Companies</p>
      <button onClick={()=> navigate('/about')} class="btn btn-primary">Learn More</button>
    </div>
  </div>
  <img className="" width="760" height="600"  src="https://i.ibb.co/sF0HtLD/istockphoto-1136735121-612x612-1.jpg" alt=""/>
  
</div>
          <div class="stats w-full stats-vertical lg:stats-horizontal shadow ">
  
          <div class="stat">
    <div class="stat-title">Corporate Social <br/>Resposibility Year-2022</div>
    <div class="stat-value">$890,400</div>
    <div class="stat-actions">
      <button class="btn btn-sm btn-success">Donation</button>
    </div>
  </div>
  
  <div class="stat">
    <div class="stat-title">Business Progress</div>
    <div class="stat-value">$894,200</div>
    <div class="stat-desc">↗︎ Year-2021 (62%)</div>
    <progress class="progress progress-success w-56" value="0" max="100"></progress>
<progress class="progress progress-success w-56" value="10" max="100"></progress>
<progress class="progress progress-success w-56" value="40" max="100"></progress>
<progress class="progress progress-success w-56" value="70" max="100"></progress>
<progress class="progress progress-success w-56" value="100" max="100"></progress>
  </div>
  
  <div class="stat">
    <div class="stat-title">Business Ratings</div>
    <div class="stat-value">1.2 Million</div>
    <div class="stat-desc">↗︎  90 (94%)</div>
    <div class="rating">
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star"/>
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star" />
  <input type="radio" name="rating-1" class="mask mask-star"  checked />
</div>
  </div>
  <div class="stat">
    <div class="stat-title">Tools: Production</div>
    <img class="mask mask-decagon mx-auto"  width="80" height="80"  src="https://i.ibb.co/z426DyV/hammer-milwaukee-m18bh-0-body-only.jpg" />
    <div class="stat-value">13,200++</div>
  </div>
  <div class="stat">
    <div class="stat-title">Customers Order</div>
    <div class="stat-value">10,200</div>
    <div class="stat-desc">↗︎ 94 (14%)</div>
    
    <button class="btn gap-2">
  Inbox
  <div class="badge badge-secondary">+999</div>
</button>
  </div>
  <div class="stat">
    <div class="stat-title">Customers Review</div>
    <div class="stat-value">1,200</div>
    <div class="stat-desc">↗︎  90 (14%)</div>
    <div class="avatar-group -space-x-6">
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=4818" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=40311" />
    </div>
  </div>
  <div class="avatar">
    <div class="w-12">
      <img src="https://api.lorem.space/image/face?hash=84348" />
    </div>
  </div>
  <div class="avatar placeholder">
    <div class="w-12 bg-neutral-focus text-neutral-content">
      <span>+99</span>
    </div>
  </div>
</div>
  </div>
  
</div>

        </div>
        
    );
};

export default Summary;
