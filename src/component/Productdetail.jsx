import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../constant/data";
import { useDispatch } from "react-redux";
import { additem, delitem } from "../redux/actions/ProductActions";

const Productdetail = () => {
  const [cartBtn, SetcartBtn] = useState("Add to cart");
  const proid = useParams();
  const prodetail = products.filter((x) => {
    return x.id == proid.id;
  });
  const product = prodetail[0];
  const dispatch = useDispatch();

  const handlecart = (product) => {
    if (cartBtn == "Add to cart") {
      dispatch(additem(product))

      SetcartBtn("Remove From cart");
    } else {
      dispatch(delitem(product))
      SetcartBtn("Add to cart");
    }
  };

  return (
    <div>
      {/* \Now we need product detail page which is pass from product page */}

      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.url} />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title.shortTitle}</h1>
            <hr />
            <h2 className="my-4">${product.price.mrp}</h2>
            <p>{product.description}</p>
            <button
              onClick={() => handlecart(product)}
              className="btn btn-outline-primary"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetail;
