import { Outlet, Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import AddTripAdmins from './components/Admin/AddTripAdmin';
import ProfilePages from './pages/ProfilesPage';
import DetailTourPage from './pages/DetailTourPage';
import './components/style/App.css';
import WaitingPayment from './pages/PaymentPendingPage';
import IncomeTrips from './components/IncomeTrip';
import ListTransactionAdmins from './components/Admin/ListTransactionAdmin';
import PaymentCardWaitingApprove from './components/Payment/PaymentApprove';
import { UserContext } from './context/userContext';
import { useContext, useEffect, useState } from 'react';
import { API, setAuthToken } from './config/api';



// const PrivateRoute = ({ isLogin }) => {
//   if (isLogin) {
//     return <Outlet />
//   } else {
//     return <Navigate to="/" />
//   }
// };

// const [state, dispatch] = useContext(UserContext)
// const [isLoading, setIsLoading] = useState(true)

// const checkUser = async () => {
//   try {
//     const response = await API.get('/check-auth')
//     console.log("check user success : ", response);

//     let payload = response.data.data

//     payload.token = localStorage.token

//     dispatch({
//       type: 'USER_ SUCCESS',
//       payload,
//     })

//     setIsLoading(false)
//   } catch (error) {
//     console.log("check user failed :", error);
//     dispatch({
//       type: 'AUTH_ERROR'
//     })

//     setIsLoading(false)
//   }
// }

// useEffect(() => {
//   if (localStorage.token) {
//     setAuthToken(localStorage.token)
//     checkUser()
//   } else {
//     setIsLoading(false)
//   }
// },[])

// useEffect(() => {
//   if (isLoading) {
//     if (state.isLogin === false) {
//       Navigate('/auth')
//     }
//   }
// }, [isLoading])



const data = JSON.parse(localStorage.getItem("login"));
// login = key

console.log(data);
function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route element={<PrivateRoute isLogin={data?.isAdmin} />}> */}
          <Route path="/AddTripAdmin" element={<AddTripAdmins />} />
          <Route path="/IncomeTrips" element={<IncomeTrips />} />
          <Route path="/HomeAdmin" element={<ListTransactionAdmins />} />
          {/* </Route> */}

          {/* <Route element={<PrivateRoute isLogin={data?.isUser} />}> */}AC
          <Route path="/ProfilePages" element={<ProfilePages />} />
          <Route path="/DetailTourPage/:id" element={<DetailTourPage />} />
          <Route path="/WaitingPayment" element={<WaitingPayment />} />
          <Route path="/DetailTourPage/:id" element={<DetailTourPage />} />
          <Route path="/WaitingApprove" element={<PaymentCardWaitingApprove />} />
          {/* </Route> */}

        </Routes>
      </Router>
    </>
  )
}

export default App


// import { Outlet, Navigate, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import Home from './pages/Home';
// import AddTripAdmins from './components/Admin/AddTripAdmin';
// import ProfilePages from './pages/ProfilesPage';
// import DetailTourPage from './pages/DetailTourPage';
// import './components/style/App.css';
// import WaitingPayment from './pages/PaymentPendingPage';
// import IncomeTrips from './components/IncomeTrip';
// import ListTransactionAdmins from './components/Admin/ListTransactionAdmin';
// import PaymentCardWaitingApprove from './components/Payment/PaymentApprove';
// import { UserContext } from './context/userContext';
// import { useContext, useEffect, useState } from 'react';
// import { API, setAuthToken } from './config/api';
// import Auth from './pages/Auth';

// const data = JSON.parse(localStorage.getItem("login"));
// // // login = key

// console.log(data);
// function App() {
//   const [state, dispatch] = useContext(UserContext);
//   const [isLoading, setIsLoading] = useState(true);

//   const checkUser = async () => {
//     try {
//       const response = await API.get('/check-auth');
//       console.log("check user success: ", response);

//       let payload = response.data.data;

//       payload.token = localStorage.token;

//       dispatch({
//         type: 'USER_SUCCESS',
//         payload,
//       });

//       setIsLoading(false);
//     } catch (error) {
//       console.log("check user failed:", error);
//       dispatch({
//         type: 'AUTH_ERROR',
//       });

//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (localStorage.token) {
//       setAuthToken(localStorage.token);
//       checkUser();
//     } else {
//       setIsLoading(false);
//     }
//   }, [checkUser]);

//   useEffect(() => {
//     if (isLoading) {
//       if (state.isLogin === false) {
//         Navigate('/auth');
//       }
//     }
//   }, [isLoading, state.isLogin]);

//   const data = JSON.parse(localStorage.getItem("login"));

//   console.log(data);

//   return (
//     <>
//       {isLoading ? null :
//         <Router>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/auth" element={<Auth />} />
//             {/* <Route element={<PrivateRoute isLogin={data?.isAdmin} />}> */}
//             <Route path="/AddTripAdmin" element={<AddTripAdmins />} />
//             <Route path="/IncomeTrips" element={<IncomeTrips />} />
//             <Route path="/HomeAdmin" element={<ListTransactionAdmins />} />
//             {/* </Route> */}

//             {/* <Route element={<PrivateRoute isLogin={data?.isUser} />}> */}
//             <Route path="/ProfilePages/:id/:quantity" element={<ProfilePages />} />
//             <Route path="/DetailTourPage/:id" element={<DetailTourPage />} />
//             <Route path="/WaitingPayment/:id/:quantity" element={<WaitingPayment />} />
//             <Route path="/DetailTourPage/:id" element={<DetailTourPage />} />
//             <Route path="/WaitingApprove/:id/:quantity" element={<PaymentCardWaitingApprove />} />
//             {/* </Route> */}

//           </Routes>
//         </Router>
//       }
//     </>
//   );
// }

// export default App;

