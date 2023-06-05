import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
import ProfileUser from "../components/assets/User.png";
import { Link, useParams } from "react-router-dom";
import cardData2 from "../dummy/FakeCardsTour";


function ProfileDropdown({ handleLogout }) {
  const { id } = useParams();
  const selectorId = cardData2.find((Nico) => Nico.id === id);
  const { quantity } = useParams();
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="profile-dropdown" className="" style={{ border: "none" }}>
        <Image src={ProfileUser} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <>
        <Dropdown.Item>
        <Link style={{ textDecoration: "none", color: "black"}} to={"/ProfilePages"}>
            Profile
          </Link>
        </Dropdown.Item>

        <Dropdown.Item>
          <Link style={{ textDecoration: "none", color: "black"}} to={"/WaitingPayment"}>
            Pay
          </Link>
        </Dropdown.Item>
          {/* <Dropdown.Item href="/WaitingPayment/:id/:quantity">Pay</Dropdown.Item> */}
          <Dropdown.Item onClick={handleLogoutClick}>Logout</Dropdown.Item>
        </>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileDropdown;
