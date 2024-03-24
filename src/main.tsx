import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/root.tsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
