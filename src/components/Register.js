import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Alert, FormGroup } from "react-bootstrap";
import {API} from '../config/api'
import { useMutation } from "react-query";

function RegisterComp(props) {
  const { showModal, handleCloseModal, handleLogin } = props;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleLogin();
  //   handleCloseModal();
  // };

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();
    
      const response = await API.post('/register', form);

      const alert = (
        <Alert variant="success" className="py-1">
          Register Success!
        </Alert>
      );
      setMessage(alert);
      setForm({
        name: '',
        email: '',
        password: '',
      });

    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed to Register!
        </Alert>
      );

      setMessage(alert);
      console.log("register failed :", error);
    }

  });



  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <h3 className="mx-auto my-3">Register</h3>
      <Form onSubmit={(e) => handleSubmit.mutate(e)}>
        <FormGroup controlId="" className="p-2">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormGroup>
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
          Register
        </Button>
      </Form>
    </Modal>
  );
}

export default RegisterComp;
