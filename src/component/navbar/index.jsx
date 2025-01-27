/** @format */

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
function CollapsibleExample() {
  const favNumState = useSelector((state) => state.favSlice.favNum);
  const navigate = useNavigate();

  const goToShopping = () => {
    navigate("/ecommerce");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <button onClick={goToShopping}> OShop</button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav">
            <li>
              <Link className=" link fs-7 p-3 " to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className=" link fs-7 p-3 " to="/signup">
                SignUp
              </Link>
            </li>
            <li>
              <Link className="link fs-7 p-3" to="/ecommerce">
                Start Shopping
              </Link>
            </li>
            <li>
              <Link className=" link fs-7 p-3" to="/favourite">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                  />
                </svg>
                <button className=" px-1">{favNumState}</button>
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
