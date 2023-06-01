import { Outlet, Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ isAdmin, isUser }) {
  const location = useLocation();

  if (isAdmin && !isUser) {
    // Render routes for admin
    const allowedPaths = [
      "/homeadmin",
      "/AddTripAdmin",
      "/ModalApprove",
    ];

    if (allowedPaths.includes(location.pathname)) {
      return <Outlet />;
    }
  } else if (isUser && !isAdmin) {
    // Render routes for user
    const allowedPaths = [
      "/",
      "/ProfilePages/:id/:quantity",
      "/DetailTourPage/:id",
      "/DetailTourPage",
      "/PaymentCardWaitingApprove/:id/:quantity",
      "/WaitingPayment/:id/:quantity",
    ];

    if (allowedPaths.includes(location.pathname)) {
      return <Outlet />;
    }
  }

  // Redirect to a fallback route if the user is not authorized
  return <Navigate to="/" />;
}

export default PrivateRoute;

