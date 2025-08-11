import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Products";
import About from "./pages/About";

import AddReview from "./pages/AddReview";
import './index.css';
import ReviewForm from "./pages/ReviewForm";
import React from "react";
export default function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Product" element={<Product />}/>
          <Route path="/About" element={<About />}/>
           
          <Route path="/add-review" element={<AddReview />} />
          <Route path="/ReviewForm" element={<ReviewForm />} />
        </Routes>
      </div>
    </Router>
      
      
  );
}




/*import React from "react";
import ReviewForm from "./components/ReviewForm";
import ReviewList from "./components/ReviewList";

export default function App() {
  return (
    <div>
      <ReviewForm />
      <hr className="my-10 border-t-2 border-gray-200" />
      <ReviewList />
    </div>
  );
}*/
