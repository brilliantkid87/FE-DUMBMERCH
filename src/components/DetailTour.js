import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import DetailTour2 from "../components/assets/DetailTour2.png";
import DetailTour3 from "../components/assets/DetailTour3.png";
import Rectangle1 from "../components/assets/Rectangle 8 (1).png";
import Rectangle2 from "../components/assets/Rectangle 8 (2).png";
import Rectangle3 from "../components/assets/Rectangle 8 (3).png";
import { Button, Container, Modal } from "react-bootstrap";
import hotel from "../components/assets/hotel 1.png";
import { FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Minus from "./assets/Minus.png";
import Plus from "./assets/Plus.png";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import cardData2 from "../dummy/FakeCardsTour";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { API } from "../config/api";
import { UserContext } from "../context/userContext";

function CarouselImg() {
  let navigate = useNavigate()
  const { id } = useParams()
  // const selectorId = cardData2.find((Nico) => Nico.id === id)

  const [quantity, setQuantity] = useState(1);
  const { state } = useContext(UserContext);

  const handleBookNow = () => {
    const isLoggedIn = localStorage.getItem("isLogin");

    if (isLoggedIn) {
      navigate("/WaitingPayment/");
    } else {
      navigate("/");
    }
  };

  const { data: trip } = useQuery('tripDetailCache', async () => {
    const response = await API.get('/trip/' + id)
    return response.data.data
  })
  // console.log(trip);

  let priceTotal = trip?.price * quantity

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const dataTransaction = [
    {
      title: trip?.title,
      transportation: trip?.transportation,
      accommodation: trip?.accommodation,
      price: priceTotal,
      quantity: quantity,
    }
  ]

  localStorage.setItem('user', JSON.stringify(dataTransaction))

  console.log(dataTransaction)
  return (
    <Container>
      <div>
        <h3 className="mt-5">{trip?.title}</h3>

        <h3>{trip?.country.name}</h3>
        <div className="">
          <div>
            <Image src={trip?.image} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5 overflow-x-hidden">
          <Image
            src={DetailTour2}
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={handleOpenModal}
          />
          <Image
            src={DetailTour3}
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={handleOpenModal}
          />
          <Image
            src={Rectangle1}
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={handleOpenModal}
          />
          <Image
            src={Rectangle2}
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={handleOpenModal}
          />
          <Image
            src={Rectangle3}
            style={{ maxWidth: "250px", cursor: "pointer" }}
            onClick={handleOpenModal}
          />
      

        
        </div>
        <div className="d-flex justify-content-center mt-5">
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image src={hotel} />
            <Form.Label>{trip?.accommodation}</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image src={hotel} />
            <Form.Label>{trip?.transportation}</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image src={hotel} />
            <Form.Label>{trip?.eat}</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image src={hotel} />
            <Form.Label>{trip?.day} day {trip?.night} night</Form.Label>
          </FormGroup>
        </div>
        <div className="mt-5">
          <h5>Description</h5>
          <p >
            {trip?.description}
          </p>
        </div>
        <div className="d-flex justify-content-between mt-5 border-bottom">
          <h5>
            <span className="text-warning">{trip?.price}</span> / Person
          </h5>
          <h5>
            <Image
              src={Minus}
              className="me-3"
              style={{ cursor: "pointer", transition: "0,3 ease" }}
              onClick={handleDecrement}
            ></Image>
            <span className="me-3">{quantity}</span>
            <Image
              src={Plus}
              style={{ cursor: "pointer", transition: "0,3 ease" }}
              onClick={handleIncrement}
            ></Image>
          </h5>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <h5>Total : </h5>
          <h5>
            <span className="text-warning">
              IDR. {(trip?.price * quantity).toLocaleString()}
            </span>
          </h5>
        </div>
        <div className="d-flex justify-content-end mt-2">
  
          <Link to="/WaitingPayment/">
            <Button>Book Now</Button>
          </Link>
        
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          <img src={trip?.image} alt="Pop-up Image" style={{ width: "100%", height: '100%' }} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default CarouselImg;
