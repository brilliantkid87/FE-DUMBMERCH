import { Outlet, Navigate, Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './pages/Home';
import AddTripAdmins from './components/Admin/AddTripAdmin';
import ProfilePages from './pages/ProfilesPage';
import DetailTourPage from './pages/DetailTourPage';
import './components/style/App.css';
import WaitingPayment from './pages/PaymentPendingPage';
import IncomeTrips from './components/IncomeTrip';
import ListTransactionAdmins from './components/Admin/ListTransactionAdmin';
import PaymentCardWaitingApprove from './components/Payment/PaymentApprove';



const PrivateRoute  = ({ isLogin }) => {
  if (isLogin) {
    return <Outlet />
  } else {
    return <Navigate to="/" />
  }
};

const data = JSON.parse(localStorage.getItem("login")); 
// login = key

console.log(data);
function App () {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<PrivateRoute isLogin={data?.isAdmin} />}>
          <Route path="/AddTripAdmin" element={<AddTripAdmins />} />  
          <Route path="/IncomeTrips" element={<IncomeTrips />} />  
          <Route path="/HomeAdmin" element={<ListTransactionAdmins />} />  
        </Route>

        <Route element={<PrivateRoute isLogin={data?.isUser} />}>
          <Route path="/ProfilePages/:id/:quantity" element={<ProfilePages />} />
          <Route path="/DetailTourPage/:id" element={<DetailTourPage />} />
          <Route path="/WaitingPayment/:id/:quantity" element={<WaitingPayment />} />
          <Route path="/DetailTourPage/:id" element={<DetailTourPage />} />
          <Route path="/WaitingApprove/:id/:quantity" element={<PaymentCardWaitingApprove />} />
        </Route>

      </Routes>
    </Router>
    </>
  )
}

export default App
