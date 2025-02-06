/** @format */

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./productDetails.css";
import SingleProduct from "./singleProduct";

const productDetails = () => {
  const urlparams = useParams();
  useEffect(() => {
    fetchproducts();
  }, []);
  const fetchproducts = () => {
    fetch(`https://fakestoreapi.com/products/${urlparams.id}`)
      .then((res) => res.json())
      .then((json) => setproduct(json));
  };

  const [product, setproduct] = useState({});
  return (
    <div className="container productContainer">
      <Card style={{ width: "18rem" }} className="card">
        <Card.Img variant="top" className="cardImg" src={product.image} />
        <Card.Body>
          {/* <Card.Title>{product.title}</Card.Title> */}
          {/* <Card.Text>Price : {product.discription} </Card.Text> */}
          {/* <h2>{product.price}</h2> */}
        </Card.Body>
      </Card>{" "}
      <div className="details">
        <h2> {product.title}</h2>
        <h4>{product.category}</h4>
        <p>{product.description}</p>
        <SingleProduct
          // id={product.id}
          // title={product.title}
          // desc={product.description}
          price={product.price}
          uiClassname="productDetailsUi"
          image={product.image}
        />
      </div>
    </div>
  );
};
export default productDetails;
