/** @format */

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SingleProduct from "../e-commerce/singleProduct";

const Favourite = (props) => {
  const [products, setproduct] = useState([]);
  const favState = useSelector((state) => state.favSlice.favId);

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
      <h2 className=" text-center mt-5  ">Favorites </h2>
      <p className=" text-center mb-5  ">
        You can add or delete any product and add it to cart if you want to buy{" "}
      </p>
      <div className=" products  w-50 m-auto" style={{}}>
        {products.map((item, index) => {
          if (favState.includes(item.id)) {
            return (
              <>
                {" "}
                <div
                  className="w-100 shadow-sm bg-white rounded     "
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
          }
        })}{" "}
      </div>
    </div>
  );
};

export default Favourite;
