import React from "react";
import Header from "./component/Header";
import Middle from "./component/Middle";
import Footer from "./component/Footer";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import "./App.css";
import Productdetails from "./component/Productdetails";
const App=()=>{

  return(<>
  
    <div className="container">
    <BrowserRouter>  
    <Header/> 
     <Routes>
    
    <Route path="/" element={<Middle/>}/>
    <Route path="/details/:id" element={<Productdetails/>}/>
    </Routes>
    <Footer/>   
    </BrowserRouter>
    </div>
   
    </>
  )
  }
  export default App;