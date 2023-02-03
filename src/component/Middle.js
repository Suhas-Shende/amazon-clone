import React from "react";
import "./middle.css";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

import {Productlist} from "./Productlist";



const product = Productlist

function Row() {
  return (
    <div className="product-container">
      {product.map((item,index) => {
        return (
          <div className="products">
            <img src={item.url} alt="no image" className="product-image"/>
            <h2>
              <AiFillStar
                style={{ color: "yellow", width: "15px", height: "15px" }}
              />
              <AiFillStar
                style={{ color: "yellow", width: "15px", height: "15px" }}
              />
              <AiFillStar
                style={{ color: "yellow", width: "15px", height: "15px" }}
              />
              <span style={{fontSize:"small",margin:"10px"}}>{item.review}</span>
            </h2>
            <h2>{item.name}</h2>
            <h2>$ {item.price}</h2>
            <button className="buttondeal">Limited time deal</button>
            <Link to={`/details/${index}`}>
            <button className="buttonview"  >view details</button></Link>
            <p className="deal">Get it by tomorrow </p>
            <p className="deal">free delivery by amazon</p>
          </div>
        );
      })}
    </div>
  );
}

function Middle() {
  return (
    <>
      <div className="container-middle-none">
        <img className="banner" src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Collectibles/festive/19/banner-PC-V1.png"/>
      </div>
      <div className="container-middle">
       
        <Row />
      
      </div>
    </>
  );
}
export default Middle;
