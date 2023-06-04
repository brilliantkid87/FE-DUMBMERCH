import React, { useContext } from "react";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import PersonalInfo from "../assets/Rectangle 12.png"
import PeronalName from "../assets/name.png"
import Logo from "../assets/Icon (2).png";
import QRcode from "../assets/frame.png"
import cardData2 from "../../dummy/FakeCardsTour";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { API } from "../../config/api";
import jwtDecode from "jwt-decode";
import { UserContext } from "../../context/userContext";

function ProfilesLog() {

  // const token = localStorage.getItem('token')
  const [state] = useContext(UserContext)
  // const decoded = jwtDecode(token)
  // console.log(decoded);



  const { data: profiles } = useQuery('profilesCache', async () => {
  const response = await API.get('/user')
  return response.data.data
  })
console.log(profiles);

  return (
    <Container>
      <div className="card mt-5">
        <div className="row g-0">
          <div className="col-md-8">
            <div className="card-body">
            <div className="row">
          <div className="col-sm-1 mb-3 mb-sm-0">
            <div className="me-3">
              <div className="card-body">
                <Image src={PeronalName} />
              </div>
            </div>
            <div className="mt-3">
              <div className="card-body">
                <Image src={PeronalName} />
              </div>
            </div>
            <div className="mt-3">
              <div className="card-body ">
                <Image src={PeronalName} />
              </div>
            </div>
            <div className="mt-3">
              <div className="card-body ">
                <Image src={PeronalName} />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="">
              <div className="card-body">
                <h6 className="card-title">{state?.user.name}</h6>
                <p className="card-text">
                Full name
                </p>
              </div>
            </div>
            <div className="">
              <div className="card-body">
                <h6 className="card-title">{profiles?.email}</h6>
                <p className="card-text">
                Email
                </p>
              </div>
            </div>
            <div className="">
              <div className="card-body">
                <h6 className="card-title">0812-8623-8911</h6>
                <p className="card-text">
                Mobile phone
                </p>
              </div>
            </div>
            <div className="">
              <div className="card-body">
                <h6 className="card-title">Perumahan Permata Bintaro Residence C-3</h6>
                <p className="card-text">
                Address
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 d-flex justify-content-end" >
            <div className="">
              <div className="card-body">
                {/* <Image src={PaymentProof} /> */}
              </div>
            </div>
          </div>
        </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-end">
            <Image src={PersonalInfo} />
          </div>
        </div>
      </div>
      
      <h3 className="mt-5">History Trip</h3>
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
                <p className="card-text">
                Australia
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div className="card-body ">
                <p className="card-text text-success">
                Approve
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="">
              <div className="card-body">
                <h5 className="card-title">Date Trip</h5>
                <p className="card-text">
                26 August 2020
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div className="card-body">
                <h5 className="card-title">Accomodation</h5>
                <p className="card-text">
                Hotel 4 Nights
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="">
              <div className="card-body">
                <h5 className="card-title">Duration</h5>
                <p className="card-text">
                  6 Day 4 Night
                </p>
              </div>
            </div>
            <div className="mt-3">
              <div className="card-body">
                <h5 className="card-title">Transporartion</h5>
                <p className="card-text">
                Qatar Airways
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 d-flex justify-content-end">
            <div className="">
              <div className="card-body">
                <Image src={QRcode} />
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
              {/* <td>{quantity}</td> */}
            </tr>
            <tr>
              <th scope="row"></th>
              <td></td>
              <td></td>
              <td></td>
              <td>Total</td>
              <td>:</td>
              {/* <td className="text-warning">IDR. {(selectorId?.price * quantity).toLocaleString()}</td> */}
            </tr>
          </tbody>
        </table>
      </div>

    </Container>
  );
}

export default ProfilesLog;
