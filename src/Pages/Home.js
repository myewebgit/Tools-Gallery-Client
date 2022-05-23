import React from "react";
import Banner from "./Banner";
import CustomerReview from "./Home/CustomerReview";
import Description from "./Home/Description";
import Items from "./Home/Items";
import Summary from "./Home/Summary";

const Home =()=>{
    return (
        <div>
		
<Banner></Banner>
<Description></Description>
<Items></Items>
<CustomerReview></CustomerReview>
<Summary></Summary>
        </div>
    );
};

export default Home;
