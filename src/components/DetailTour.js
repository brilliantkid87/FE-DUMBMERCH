import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";
import DetailTour2 from "../components/assets/DetailTour2.png";
import DetailTour3 from "../components/assets/DetailTour3.png";
import Rectangle1 from "../components/assets/Rectangle 8 (1).png";
import Rectangle2 from "../components/assets/Rectangle 8 (2).png";
import Rectangle3 from "../components/assets/Rectangle 8 (3).png";
import { Button, Container } from "react-bootstrap";
import hotel from "../components/assets/hotel 1.png";
import { FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Minus from "./assets/Minus.png";
import Plus from "./assets/Plus.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import cardData2 from "../dummy/FakeCardsTour";
import { useParams } from "react-router-dom";

function CarouselImg() {
  const {id} = useParams() 
  const selectorId = cardData2.find((Nico) => Nico.id === id)

  const [quantity, setQuantity] = useState(1);
  const isLoggedIn = localStorage.getItem("login");
  const isUser = JSON.parse(localStorage.getItem("login"))?.isUser;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  

  return (
    <Container>
      <div>
        <h3 className="mt-5">{selectorId?.title}</h3>
        <h3>{selectorId?.country}</h3>
        <div className="">
          <div>
            <Image src={selectorId?.image} style={{ width: "100%" }} />
          </div>
        </div>
        <div className="d-flex justify-content-between mt-5">
          <Image src={DetailTour2} style={{ maxWidth: "450px" }}></Image>
          <Image src={DetailTour3} style={{ maxWidth: "450px" }}></Image>
          <Carousel style={{ maxWidth: "450px" }}>
            <Carousel.Item>
              <Image
                className=""
                style={{ maxWidth: "450px" }}
                src={Rectangle1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className=""
                style={{ maxWidth: "450px" }}
                src={Rectangle2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className=""
                style={{ maxWidth: "450px" }}
                src={Rectangle3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image src={hotel} />
            <Form.Label>Hotel 4 Nights</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image src={hotel} />
            <Form.Label>Hotel 4 Nights</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image src={hotel} />
            <Form.Label>Hotel 4 Nights</Form.Label>
          </FormGroup>
          <FormGroup controlId="formBasicEmail" className="p-2">
            <Image src={hotel} />
            <Form.Label>Hotel 4 Nights</Form.Label>
          </FormGroup>
        </div>
        <div>
          <h5>Description</h5>
          <p >
            {selectorId?.description}
          </p>
        </div>
        <div className="d-flex justify-content-between mt-5 border-bottom">
          <h5>
            <span className="text-warning">{selectorId?.price}</span> / Person
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
              IDR. {(selectorId?.price * quantity).toLocaleString()}
            </span>
          </h5>
        </div>
        <div className="d-flex justify-content-end mt-2">
        {isUser && isLoggedIn ? (
          <Link to={`/WaitingPayment/${selectorId.id}/${quantity}`}>
            <Button>Book Now</Button>
          </Link>
        ) : (
          <Button disabled>Login to Book</Button>
        )}
      </div>
      </div>
    </Container>
  );
}

export default CarouselImg;
