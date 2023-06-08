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

import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import SearchIcon from "./assets/search 1.png";
import Image from "react-bootstrap/Image";
import PaymentCardWaitingApprove from "./Payment/PaymentApprove";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import cardData3 from "../dummy/listtx";
import { useQuery } from "react-query";
import { UserContext } from "../context/userContext";
import { API } from "../config/api";
import ProfilePages from "../pages/ProfilesPage";

function ListTransactionAdmin() {

  // const [state] = useContext(UserContext)
  const { data: listTrans } = useQuery('listTransCache', async () => {
    const response = await API.get('/transactions')
    return response.data.data
  })
  console.log("yoman", listTrans);


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <div className="mt-5">
        <h3>Incoming Transaction</h3>


        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Users</th>
              <th scope="col">Trip</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {listTrans?.map((data, index) => (
            <tbody>
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{data?.User?.name}</td>
                <td>{data?.trips.title}</td>
                <td>
                <button
                    type="button"
                    class="btn"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <Button variant="primary" onClick={handleShow}>
                      <Image src={data?.listTrans} key={index} />
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

