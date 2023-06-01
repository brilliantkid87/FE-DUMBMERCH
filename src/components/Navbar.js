import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Wallpaper from "./assets/image1.png";
import Logo from "./assets/Icon.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import LoginComp from "./Login";
import RegisterComp from "./Register";
import ProfileDropdown from "./ProfileDropdown";
import ProfileDropdownAdmin from "./Admin/Dropdwon";
import { Link } from "react-router-dom";


function NavbarComponents() {
  const data = JSON.parse(localStorage.getItem("login"))
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(data,"ini data");
  
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleShowLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const handleShowRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleAdmin = () => {
    setIsAdmin(true);
  }

  const handleLogout = () => {
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  // const handleLogout = () => {
  //   localStorage.removeItem("login");
  //   if (loggedIn) {
  //     window.location.href = "/";
  //   } else if (isAdmin)
  //     window.location.href = "/HomeAdmin";
  // };


//  console.log(isAdmin);
//  console.log(loggedIn);

  return (
    <div style={{ position: "relative" }}>
      <Image src={Wallpaper} fluid />
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "100px",
          zIndex: "1",
        }}
      >
        <Link to="/"><Image src={Logo}  /></Link>
      </div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "100px",
          zIndex: "1",
        }}
      >
        {data?.isUser ? (
          <ProfileDropdown handleLogout={handleLogout} />
        ) : data?.isAdmin ? <ProfileDropdownAdmin handleLogout={handleLogout}/> : (
          <>
            <Button
              className="btn border me-2"
              variant=""
              onClick={handleShowLoginModal}
            >
              Login
            </Button>
            <Button
              className="btn bg-warning"
              variant="primary"
              onClick={handleShowRegisterModal}
            >
              Register
            </Button>
          </>
        )}
      </div>
      <div
        style={{ position: "absolute", top: "40%", left: "100px", zIndex: "1" }}
      >
        <h1>Explore</h1>
        <h3>your amazing city together</h3>
      </div>
      <div
        style={{ position: "absolute", top: "65%", zIndex: "1", width: "100%" }}
        className="input-group"
      >
        <InputGroup className="mb-3 m-auto" style={{ width: "80%" }}>
          <Form.Control
            placeholder="Search..."
            aria-label="Search..."
            aria-describedby="basic-addon2"
          />
          <Button
            className="bg-warning"
            variant="outline-secondary"
            id="button-addon2"
          >
            Search
          </Button>
        </InputGroup>
      </div>
      <LoginComp
        showModal={showLoginModal}
        handleCloseModal={handleCloseLoginModal}
        handleLogin={handleLogin}
        handleAdmin={handleAdmin}
        setIsAdmin={setIsAdmin}
        handleLogout={handleLogout}
      />
      <RegisterComp
        showModal={showRegisterModal}
        handleCloseModal={handleCloseRegisterModal}
        handleLogin={handleLogin}
      />
    </div>
  );
}

export default NavbarComponents



