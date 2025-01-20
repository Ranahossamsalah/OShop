/** @format */

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SingleProduct from "./singleProduct";

const Ecommerce = () => {
  const [products, setproduct] = useState([]);
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
      <h2 className=" text-center mt-5  ">OShop </h2>
      <p className=" text-center mb-5  ">Online Shopping website</p>
      <div className=" products  row" style={{}}>
        {products.map((item, index) => {
          return (
            <>
              {" "}
              <div
                className=" col-3  shadow-sm bg-white rounded     "
                style={{ margin: "auto", display: "inline-block" }}
              >
                <SingleProduct
                  id={item.id}
                  title={item.title}
                  desc={item.description}
                  price={item.price}
                  image={item.image}
                />
              </div>
            </>
          );
          console.log(products);
        })}{" "}
      </div>
    </div>
  );
};
export default Ecommerce;
