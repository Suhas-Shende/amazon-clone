import React from "react";
import { useParams } from "react-router-dom";
import { Productlist } from "./Productlist";
import { useState } from "react";
import "./productdetails.css";

function Productdetails() { 
  const { id } = useParams();
  const product = Productlist[id];

  const[initialQuantity,setQuantity]=useState(1);
  const[initialprice,setprice]=useState(product.price);

  let t=initialQuantity;
  let p=initialprice;
  function getquantity(){

    setQuantity(t+1);
    setprice(p + product.price)
  }
  function removequantity(){
    if(t>1&&p>0){
    setQuantity(t-1);
    setprice(p - product.price);
}
  }
  return (
    <>
      <div className="container-product">
      <div className="container-product-second">
      <img src={product.url} className="product-details-image"></img>
      <h1 style={{ color: "black" }}>{product.name}</h1>
      <h1 style={{color:"red"}}>{initialQuantity}</h1>
      <button onClick={()=>getquantity()} className="button-quantity">Add Quantity</button>
      <button className="button-quantity" onClick={()=>removequantity()}>remove Quantity</button>
      </div>
      <div className="container-product-second">
        <h1>Price</h1>
        <h1 style={{color:"green"}}> $ {initialprice}</h1>
      </div>
   
      </div>
    </>
  );
}
export default Productdetails;
