
import React, { useState } from "react";
import Logo from "../assets/Icon (2).png";
import Image from "react-bootstrap/Image";
import { Button, Container, Modal } from "react-bootstrap";
import PaymentProof from "../assets/paymentproof.png";
import { Link, useParams } from "react-router-dom";
import cardData2 from "../../dummy/FakeCardsTour";

function PaymentCard() {
  const { id } = useParams();
  const selectorId = cardData2.find((Nico) => Nico.id === id);
  const { quantity, price } = useParams();

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handlePayButtonClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationClose = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Container>
        <div className="shadow p-3 mt-5 mb-5 bg-body-tertiary rounded border">
          <div className="d-flex justify-content-between ">
            <div>
              <Image src={Logo} />
            </div>
            <div>
              <p>Booking</p>
              <p>
                Saturday, <span>27 agustus 2023</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3 mb-3 mb-sm-0">
              <div className="">
                <div className="card-body">
                  <h5 className="card-title">6D/4N Fun Tassie Vacation</h5>
                  <p className="card-text">Australia</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="card-body ">
                  <p
                    className="card-text text-warning border bg-primary p-1"
                    width
                    style={{ width: "44%" }}
                  >
                    Waiting Payment
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="">
                <div className="card-body">
                  <h5 className="card-title">Date Trip</h5>
                  <p className="card-text">26 August 2020</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="card-body">
                  <h5 className="card-title">Accomodation</h5>
                  <p className="card-text">Hotel 4 Nights</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="">
                <div className="card-body">
                  <h5 className="card-title">Duration</h5>
                  <p className="card-text">6 Day 4 Night</p>
                </div>
              </div>
              <div className="mt-3">
                <div className="card-body">
                  <h5 className="card-title">Transporartion</h5>
                  <p className="card-text">Qatar Airways</p>
                </div>
              </div>
            </div>
            <div className="col-sm-3 d-flex justify-content-end">
              <div className="">
                <div className="card-body">
                  <Image src={PaymentProof} />
                </div>
              </div>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No</th>
                <th scope="col">Full Name</th>
                <th scope="col">Gender</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Radif Ganteng</td>
                <td>Male</td>
                <td>083896833112</td>
                <td>Qty</td>
                <td>:</td>
                <td>{quantity}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>:</td>
                <td className="text-warning">
                  IDR. {(selectorId?.price * quantity).toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
      <Container className="d-flex justify-content-end">
        <Button onClick={handlePayButtonClick}>Pay</Button>
      </Container>

      <Modal show={showConfirmation} onHide={handleConfirmationClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Your payment will be confirmed within 1 x 24 hours.</p>
          <p>
            To see your orders, click <Link to={`/WaitingApprove/${selectorId?.id}/${quantity}`}>Here</Link>. Thank you!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleConfirmationClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default PaymentCard;

