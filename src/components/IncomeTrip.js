import React from "react";
import cardData2 from "../dummy/FakeCardsTour";
import Card from "react-bootstrap/Card"
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import { Button } from "react-bootstrap";
import NavLogAfter from "./Navbar/NavlogAfter";
import { Link } from "react-router-dom";
import { API } from "../config/api";
import { useQuery } from "react-query";

function IncomeTrips() {
  const { data: trip } = useQuery('tripsCache', async () => {
    const response = await API.get('/trips');
    return response.data.data;
  });
  return (
    <>
      <NavLogAfter />
      <Container>
        <div className="d-flex justify-content-between mt-5">
          <h3 className="text-primary">
            Income Trip
          </h3>
          <Link to="/AddTripAdmin">
            <Button>Add Trip</Button>
          </Link>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "",
            flexWrap: "wrap",
            position: "relative",
            border: "none",
          }}
        >
          {trip?.map((card, index) => (
            <Card
              className="shadow p-1 mb-5 bg-white rounded"
              style={{
                maxWidth: "400px",
                marginRight: "20px",
                borderRadius: "5px",
                marginTop: "20px",
              }}
              key={index}
            >
              <Image
                style={{ Width: "100%", maxHeight: "100vh" }}
                variant="top"
                src={card.image}
              />
              <Card.Body>
                <Card.Title>
                      {/* <Link to={`/DetailTourPage/${card.id}`} style={{ textDecoration: 'none'}} > */}
                        {card.title}
                      {/* </Link> */}
                </Card.Title>
              </Card.Body>
              <div
                style={{ padding: "16px" }}
                className="d-flex justify-content-between"
              >
                <p className="text-warning">IDR. {(card.price).toLocaleString()}</p>
                <p>{card.country.name}</p>
              </div>
              <p
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "0",
                  borderRadius: "5px",
                  backgroundColor: "white",
                }}
              >
                {card.quota}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}

export default IncomeTrips;
