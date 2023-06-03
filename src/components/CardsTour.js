// import Card  from "react-bootstrap/Card"
// import Image from 'react-bootstrap/Image'
// import cardData2 from '../dummy/FakeCardsTour'
// import Container from 'react-bootstrap/Container';
// import { Link } from "react-router-dom";


// function CardsTour() {
//     return (
//         <>
//             <Container>
//                 <h3 className="text-primary" style={{  display: 'flex', justifyContent: 'center', marginTop: '5px'}}>Group Tour</h3>

//                 <div style={{  display: 'flex', justifyContent: 'center', marginTop: '10px' , flexWrap: 'wrap', position: 'relative', border: 'none'}}>
//                     {cardData2.map((card, index) => (
//                     <Card className="shadow p-1 mb-5 bg-white rounded" style={{ maxWidth: '450px', marginRight: '20px', borderRadius: '5px', marginTop: '20px'}}  key={index}>
//                         <Image style={{ Width: '100%', maxHeight: '200px'}} variant="top" src={card.image} />
//                         <Card.Body>   
//                             <Card.Title><Link style={{ textDecoration: "none", color: "black"}} to={`/DetailTourPage/${card.id}`}>{card.title}/</Link></Card.Title>
//                         </Card.Body>
//                         <div style={{ padding: '16px'}} className='d-flex justify-content-between'>
//                             <p className='text-warning'>
//                                 IDR. {(card.price)}
//                             </p>
//                             <p>{card.country}</p>
//                         </div>
//                         <p style={{ position: 'absolute', top: '10%', right: '0', borderRadius: '5px', backgroundColor: 'white'}}>{card.slide}</p>
//                     </Card>
//                     ))}
//                 </div>

//             </Container>

//         </>
//     )
// }

// export default CardsTour


// // import Card  from "react-bootstrap/Card"
// // // import CardImgTour from './assets/Rectangle8.png'
// // import Image from 'react-bootstrap/Image'
// // import Container from 'react-bootstrap/Container';
// // import { useParams } from "react-router-dom";
// // import cardData2 from "../dummy/FakeCardsTour";


// // function CardsTour() {
// //     const {id} = useParams()
// //     const selectorId = cardData2.find((Nico) => Nico.No === id)


// //     return (
// //         <>
// //             <Container>
// //                 <h3 className="text-primary" style={{  display: 'flex', justifyContent: 'center', marginTop: '10px'}}>Group Tour</h3>

// //                 <div style={{  display: 'flex', justifyContent: 'center', marginTop: '100px' , flexWrap: 'wrap', position: 'relative', border: 'none'}}>

// //                     <Card className="shadow p-1 mb-5 bg-white rounded" style={{ maxWidth: '450px', marginRight: '20px', borderRadius: '5px', marginTop: '20px'}}>
// //                         <Image style={{ Width: '100%', maxHeight: '200px'}} variant="top" src={selectorId.image} />
// //                         <Card.Body>   
// //                             <Card.Title><a target="blank" href={`/DetailTourPage/${selectorId.id}`}>{selectorId.title}</a></Card.Title>
// //                         </Card.Body>
// //                         <div style={{ padding: '16px'}} className='d-flex justify-content-between'>
// //                             <p className='text-warning'>
// //                                 {selectorId.price}
// //                             </p>
// //                             <p>{selectorId.country}</p>
// //                         </div>
// //                         <p style={{ position: 'absolute', top: '10%', right: '0', borderRadius: '5px', backgroundColor: 'white'}}>{selectorId.slide}</p>
// //                     </Card>


// //                 </div>

// //             </Container>

// //         </>
// //     )
// // }

// // export default CardsTour

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
            <Container>

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
                                maxWidth: "450px",
                                marginRight: "20px",
                                borderRadius: "5px",
                                marginTop: "20px",
                            }}
                            key={index}
                        >
                            <Image
                                style={{ Width: "100%", maxHeight: "200px" }}
                                variant="top"
                                src={card.image}
                            />
                            <Card.Body>
                                <Card.Title>
                                    <a target="blank" href={`/DetailTourPage/${card.id}`}>
                                        {card.title}
                                    </a>
                                </Card.Title>
                            </Card.Body>
                            <div
                                style={{ padding: "16px" }}
                                className="d-flex justify-content-between"
                            >
                                <p className="text-warning">IDR. {card.price}</p>
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
