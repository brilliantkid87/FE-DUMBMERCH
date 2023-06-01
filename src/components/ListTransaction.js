// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import SearchIcon from "./assets/search 1.png";
// import Image from "react-bootstrap/Image";
// import PaymentCardWaitingApprove from "./Payment/PaymentApprove";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// function ListTransactionAdmin() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <Container>
//       <div className="mt-5">
//         <h3>Incoming Transaction</h3>
//         <table className="table table-success table-striped">
//           <thead>
//             <tr>
//               <th scope="col">No</th>
//               <th scope="col">Users</th>
//               <th scope="col">Trip</th>
//               <th scope="col">Bukti Transfer</th>
//               <th scope="col">Status Payment</th>
//               <th scope="col">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Radif Ganteng</td>
//               <td>6D/4N Fun Tassie Vaca ...</td>
//               <td>bca.jpg</td>
//               <td>Pending</td>
//               <td>
//                 <button
//                   type="button"
//                   class="btn"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                 >
//                   <Button variant="primary" onClick={handleShow}>
//                     <Image src={SearchIcon} />
//                   </Button>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Radif Ganteng</td>
//               <td>6D/4N Fun Tassie Vaca ...</td>
//               <td>bca.jpg</td>
//               <td>Pending</td>
//               <td>
//                 <button
//                   type="button"
//                   class="btn"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                 >
//                   <Button variant="primary" onClick={handleShow}>
//                     <Image src={SearchIcon} />
//                   </Button>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//           <tbody>
//             <tr>
//               <th scope="row">1</th>
//               <td>Radif Ganteng</td>
//               <td>6D/4N Fun Tassie Vaca ...</td>
//               <td>bca.jpg</td>
//               <td>Pending</td>
//               <td>
//                 <button
//                   type="button"
//                   class="btn"
//                   data-bs-toggle="modal"
//                   data-bs-target="#exampleModal"
//                 >
//                   <Button variant="primary" onClick={handleShow}>
//                     <Image src={SearchIcon} />
//                   </Button>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       <Modal className="modal-xl" show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <PaymentCardWaitingApprove />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button className="bg-danger" variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//           <Button className="bg-success" variant="primary" onClick={handleClose}>
//             Approve
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// }

// export default ListTransactionAdmin;

import React, { useState } from "react";
import { Container } from "react-bootstrap";
import SearchIcon from "./assets/search 1.png";
import Image from "react-bootstrap/Image";
import PaymentCardWaitingApprove from "./Payment/PaymentApprove";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import cardData3 from "../dummy/listtx";

function ListTransactionAdmin() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div className="mt-5">
      <h3>Incoming Transaction</h3>
      {/* {cardData3.map((card, index) => ( */}

        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Users</th>
              <th scope="col">Trip</th>
              <th scope="col">Bukti Transfer</th>
              <th scope="col">Status Payment</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {cardData3.map((card, index) => (
          <tbody>
            <tr>
              <th scope="row">{card.no}</th>
              <td>{card.name}</td>
              <td>{card.title}</td>
              <td>{card.buktiTransfer}</td>
              <td>{card.statusPayment}</td>
              <td>
                <button
                  type="button"
                  class="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <Button variant="primary" onClick={handleShow}>
                    <Image src={card.image} key={index}/>
                  </Button>
                </button>
              </td>
            </tr>
          </tbody>
          ))}
        </table>

      
        

        
      </div>

      <Modal className="modal-xl" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PaymentCardWaitingApprove />
        </Modal.Body>
        <Modal.Footer>
          <Button className="bg-danger" variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="bg-success" variant="primary" onClick={handleClose}>
            Approve
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ListTransactionAdmin;

