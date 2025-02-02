/** @format */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCartId,
  addCartNum,
  addFavId,
  addFavNum,
  deleteFavId,
  deleteFavNum,
} from "../../redux/slices/favSlice";
import { useEffect } from "react";
import "./singleProduct.css";

function SingleProduct(props) {
  const dispatch = useDispatch();
  const favState = useSelector((state) => state.favSlice.favId);
  const cartState = useSelector((state) => state.favSlice.cartId);

  const [favActive, setfavActive] = useState(false);
  const [cartActive, setcartActive] = useState(false);

  useEffect(() => {
    if (favState.includes(props.id)) {
      setfavActive(true);
    } else {
      setfavActive(false);
    }
  }, [favState]);
  useEffect(() => {
    if (cartState.includes(props.id)) {
      setcartActive(true);
    } else {
      setcartActive(false);
    }
  }, [cartState]);

  const addToFavorite = () => {
    console.log(props.id, favState);

    if (favActive === false) {
      setfavActive(true);
      dispatch(addFavId(props.id));
      dispatch(addFavNum());
    } else {
      setfavActive(false);
      dispatch(deleteFavId(props.id));
      dispatch(deleteFavNum());
    }
  };
  const addToCart = () => {
    console.log(props.id, favState);
    dispatch(addCartId(props.id));
    // dispatch(addFavNum());
    !cartActive ? setcartActive(true) : setcartActive(false);
    if (cartActive === false) {
      setcartActive(true);
      dispatch(addCartId(props.id));
      dispatch(addCartNum());
    } else {
      setfavActive(false);
      dispatch(deleteCartId(props.id));
      // dispatch(deleteCartNum());
    }
  };
  return (
    <div className="singleProduct m-1">
      {" "}
      <Link
        to={`/ecommerce/${props.id}`}
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
              height: "80%",
              margin: "auto",
              objectFit: "contain",
            }}
            src={props.image}
          ></img>
        </div>
        <div
          className=" d-flex flex-column bg-light  "
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
            {props.title}
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
            {props.desc}
          </p>
        </div>
      </Link>
      <div
        class="card-footer  
      "
        style={{ padding: "1" }}
      >
        <small class="text-body-secondary d-flex ">
          <h3
            className=" flex-grow-1 "
            style={{
              fontSize: "1em",
              color: "black",
            }}
          >
            Price : {props.price} $
          </h3>
          <button onClick={addToFavorite} style={{}}>
            <svg
              className={favActive ? "btnActice" : ""}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-suit-heart-fill"
              viewBox="0 0 16 16"
            >
              <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1" />
            </svg>
          </button>
          <button onClick={addToCart} className=" ms-2 " hover-zoom>
            <svg
              className={cartActive ? "btnActice" : ""}
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
  );
}

export default SingleProduct;
