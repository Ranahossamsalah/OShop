/** @format */

import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../e-commerce/singleProduct";
import "./cart.css";

function Cart() {
  const [products, setproduct] = useState([]);
  const cartState = useSelector((state) => state.favSlice.cartId);

  useEffect(() => {
    fetchproducts();
  }, []);
  const fetchproducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproduct(json));
  };

  return (
    <div className="product-wrapper container  ">
      <h2 className=" text-center mt-5  ">Cart </h2>
      <p className=" text-center mb-5  ">
        You can remove or buy any product from cart using one of the availble
        buying method{" "}
      </p>
      <div className=" products  w-100 m-auto " style={{}}>
        {products.map((item, index) => {
          if (cartState.includes(item.id)) {
            return (
              <>
                {" "}
                <div
                  className="w-100 cartContainer     "
                  style={{ margin: "auto", display: "inline-block" }}
                >
                  <SingleProduct
                    id={item.id}
                    title={item.title}
                    // desc={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              </>
            );
          }
        })}{" "}
      </div>
    </div>
  );
}

export default Cart;
