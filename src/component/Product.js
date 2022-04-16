import React from "react";
import { NavLink } from "react-router-dom";
import { products } from "../constant/data";
const Product = () => {
  const cardItem = (item) => {
    return (
      <div className="card mb-4" style={{width: "18rem"}}>
        <img src={item.url} className="card-img-top" alt={item.title.shortTitle} style={{width: "100px"}} />
        <div className="card-body">
          <h5 className="card-title">{item.title.shortTitle}</h5>
         <p className="lead">${item.price.mrp}</p>
          <NavLink to={`/product/${item.id}`} className="btn btn-primary">
           buy-now
          </NavLink>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Product</h1>
            <hr />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-around">{products.map(cardItem)}</div>
      </div>
    </div>
  );
};

export default Product;
