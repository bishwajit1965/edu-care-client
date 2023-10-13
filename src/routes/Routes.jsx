import ErrorPage from "../pages/errorPage/ErrorPage";
import Events from "../components/events/Events";
import Login from "../pages/login/Login";
import LoginLayout from "../layouts/LoginLayout";
import Register from "../pages/register/Register";
import RootLayout from "../layouts/RootLayout";
import TermsConditions from "../pages/termsConditions/TermsConditions";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Events />,
      },
    ],
  },
  {
    path: "/",
    element: <LoginLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/terms-conditions",
        element: <TermsConditions />,
      },
    ],
  },
]);

export default router;
