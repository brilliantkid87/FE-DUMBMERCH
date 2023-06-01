import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Image  from "react-bootstrap/Image";
import ProfileUser from "../assets/User.png"

function ProfileDropdownAdmin(props) {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="" id="profile-dropdown" className="" style={{ border: 'none'}}>
        <Image src={ProfileUser} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="/AddTripAdmin">Trip</Dropdown.Item>
        <Dropdown.Item onClick={props.handleLogout}>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default ProfileDropdownAdmin;