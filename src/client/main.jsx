import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import Root from "./Routes/Root";
import Breaking from "./Pages/breaking";
import Stored from "./Pages/Stored";
import Explore from "./Pages/Explore";
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"breaking/",
        element: <Breaking />,
      },
      {
        path: "stored/",
        element: <Stored />,
      },
      {
        path: "explore/",
        element: <Explore />,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
