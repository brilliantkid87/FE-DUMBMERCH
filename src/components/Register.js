import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Alert, FormGroup } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";

function RegisterComp(props) {
  const { showModal, handleCloseModal } = props;
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   handleLogin();
  //   handleCloseModal();
  // };

  const [message, setMessage] = useState(null)
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  })


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  console.log(form.email);

  // let {data: product} = useQuery('registerCache', async () => {
  //   const response = await API.post('/register')
  //   return response.data.data
  // })
  // console.log(product);


  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault()
      handleCloseModal()

      const response = await API.post('/register', form)
      console.log("register success : ", response)

      const alert = (
        <Alert variant="success" className="py-1">
          Register Success
        </Alert>  
      )
      setMessage(alert)
      setForm({
        fullName: '',
        email: '',
        password: '',
      })
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed to register
        </Alert> 
      )
   
    setMessage(alert)
    console.log("register failed :", error);
  }
  })

  return (
    <Modal show={showModal} onHide={handleCloseModal}>
      <h3 className="mx-auto my-3">Register</h3>
      <Form onSubmit={(e) => handleSubmit.mutate(e)}>
        <FormGroup controlId="" className="p-2">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Full Name"
            // value={fullName}
            name="Name"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup controlId="formBasicEmail" className="p-2">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            // value={email}
            name="email"
            onChange={handleChange}
          />
        </FormGroup>

        <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            // value={password}
            name="password"
            onChange={handleChange}
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
