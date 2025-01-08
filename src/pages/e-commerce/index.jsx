/** @format */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  useEffect(() => {
    fetchproducts();
  }, []);
  const fetchproducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setproduct(json));
  };

  const [products, setproduct] = useState([]);
  return (
    <div className="product-wrapper container  ">
      <h2 className=" text-center mt-5  ">OShop </h2>
      <p className=" text-center mb-5  ">Online Shopping website</p>
      <div className=" products  row" style={{}}>
        {products.map((item, index) => {
          return (
            <>
              <div
                className=" col-3  shadow-sm bg-white rounded     "
                style={{ margin: "auto", display: "inline-block" }}
              >
                <Link
                  to={`/ecommerce/${item.id}`}
                  key={index}
                  className="single-prodict    "
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <div
                    className="d-flex mb-2 "
                    style={{
                      height: "200px",
                    }}
                  >
                    <img
                      className="mb-auto p-2 row-3"
                      style={{
                        // width: "60%",
                        height: "80%",
                        margin: "auto",
                        objectFit: "contain",
                      }}
                      src={item.image}
                    ></img>
                  </div>
                  <div
                    className="d-flex flex-column bg-light "
                    style={{ height: "30%" }}
                  >
                    <h3
                      className="p-1 "
                      style={{
                        // margin: "auto",
                        fontSize: "0.9em",
                        color: "black",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="p-1 "
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        color: "grey",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
                <div
                  class="card-footer  
                  "
                  style={{ padding: "1" }}
                >
                  <small class="text-body-secondary d-flex">
                    <h3
                      className=" flex-grow-1 "
                      style={{
                        fontSize: "1.2em",
                        color: "orange",
                      }}
                    >
                      {item.price}
                    </h3>
                    <button>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-heart"
                        viewBox="0 0 16 16"
                      >
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                      </svg>
                    </button>
                    <button className=" ms-2 "  hover-zoom>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="bi bi-cart-plus"
                        viewBox="0 0 16 16"
                      >
                      
                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z" />
                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                      </svg>
                    </button>
                  </small>
                </div>{" "}
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
