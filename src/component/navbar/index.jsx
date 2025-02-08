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
    <Navbar className="navBar"collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand >
          <button onClick={goToShopping}> OShop</button>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto nav navBarTitles">
            <li>
              <Link className=" link fs-7 p-3 " to="/home">
                Home
              </Link>
            </li>
            {/* <li>
              <Link className=" link fs-7 p-3 " to="/signup">
                SignUp
              </Link>
            </li> */}
            <li>
              <Link className="link fs-7 p-3" to="/ecommerce">
                Start Shopping
              </Link>
            </li>
            <li>
              <Link className=" link fs-7 p-2" to="/favourite">
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
            <li>
              <Link className=" link " to="/cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-cart-plus-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0" />
                </svg>
              </Link>
            </li>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
