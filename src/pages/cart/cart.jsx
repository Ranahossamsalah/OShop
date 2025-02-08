/** @format */

import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../e-commerce/singleProduct";
import "./cart.css";

function Cart() {
  const [products, setproduct] = useState([]);
  const [totalPrice, settotalPrice] = useState(0);

  const cartState = useSelector((state) => state.favSlice.cartId);
  const totalPriceState = useSelector((state) => state.favSlice.totalPrice);

  useEffect(() => {
    fetchproducts();
  }, []);
  const fetchproducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproduct(json));
  };
  // useEffect(() => {

  //   products.map((item, index) => {
  //     if (cartState.includes(item.id)) {
  //       settotalPrice(item.id)
     
  //     }
  //   });
  // }, cartState);
  return (
    <div className="product-wrapper container  ">
      <h2 className=" text-center mt-5  ">Cart </h2>
      <p className=" text-center mb-5  ">
        You can remove or buy any product from cart using one of the availble
        buying method{" "}
      </p>
      <div className=" cartContainer  w-100 m-auto ">
        {products.map((item, index) => {
          if (cartState.includes(item.id)) {
            console.log("====================================");
            console.log(cartState);
            console.log("====================================");

            return (
              <>
                {" "}
                <div
                  className="w-100 cart "
                  style={{ margin: "auto", display: "inline-block" }}
                >
                  <SingleProduct
                    id={item.id}
                    title={item.title}
                    uiClassname="cartUi"
                    desc={item.description}
                    price={item.price}
                    image={item.image}
                  />
                </div>
              </>
            );
          }
        })}{" "}
        <div className="total">Total: {totalPriceState} $</div>
        {/* <button className="buy"> Buy Now </button> */}
      </div>
    </div>
  );
}

export default Cart;
