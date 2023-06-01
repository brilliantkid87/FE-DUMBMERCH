// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
// import { FormGroup } from "react-bootstrap";

// const users = [
//   {
//     email: "user@gmail.com",
//     password: "user",
//     isAdmin: false
//   },
//   {
//     email: "admin@gmail.com",
//     password: "admin",
//     isAdmin: true
//   },
// ]

// function LoginComp(props) {

//   const { showModal, handleCloseModal, handleLogin } = props;
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   console.log(setPassword);
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let user = false;
//     let isAdmin = false
//     for (let i = 0; i < users.length; i++) {
//       if (users[i].email === email && users[i].password === password) {
//         user = true;
//         isAdmin = users[i].isAdmin
//         break;
//       }
//     }

//     if (user) {
//       handleLogin(isAdmin);
//       handleCloseModal();
//     } else {
//       alert("Yang Bener aja");
//     }
//   };

//   return (
//     <Modal show={showModal} onHide={handleCloseModal}>
//       <h3 className="mx-auto my-3">Login</h3>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup controlId="formBasicEmail" className="p-2">
//           <Form.Label>Email Address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </FormGroup>

//         <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Group>
//         <Button className="m-2 rounded" variant="primary" type="submit">
//           Login
//         </Button>
//       </Form>
//       <Form.Group className="mb-3 p-2 m-auto" controlId="formBasicCheckbox">
//         <Form.Label>Don't Have Account Click Here</Form.Label>
//       </Form.Group>
//     </Modal>
//   );
// }

// export default LoginComp;

import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FormGroup } from "react-bootstrap";

const users = [
  {
    email: "user@gmail.com",
    password: "user",
    isAdmin: false,
    isUser: true,
  },
  {
    email: "admin@gmail.com",
    password: "admin",
    isAdmin: true,
    isUser: false,
  },
];

function LoginComp(props) {
  const { showModal, handleCloseModal} =
    props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataLogin, setDataLogin] = useState({
    email: "",
    password: "",
    isUser: false,
  });
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.email === email && user.password === password
    );


    if (user) {
      setDataLogin({
        email: user.email,
        password: user.password,
        isUser: user.isUser,
        isAdmin: user.isAdmin,
      });
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };
  

  useEffect(() => {
    if (dataLogin.isUser || dataLogin.isAdmin) {
      localStorage.setItem("login", JSON.stringify(dataLogin));
      // jika salah satu true makan akan di set di key login dan datanya dari dataLogin
      if (!dataLogin.isAdmin) {
        window.location.href = "/";
      } else {
        window.location.href = "/HomeAdmin";
      }
    }
  }, [dataLogin]);
  // kalo kosong render semua yang ada di useEffect
  

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <h3 className="mx-auto my-3">Login</h3>
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="formBasicEmail" className="p-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
          <Button className="m-2 rounded" variant="primary" type="submit">
            Login
          </Button>
      </Form>
      <Form.Group className="mb-3 p-2 m-auto" controlId="formBasicCheckbox">
        <Form.Label>Don't have an account? Click here</Form.Label>
      </Form.Group>
    </Modal>
  );
}

export default LoginComp;

// Jangan dihapus
//
