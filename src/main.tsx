import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Root from "./routes/root.tsx";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

const router = createBrowserRouter([
  {
    children: [
      {
        element: <App />,
        index: true,
        path: "/",
      },
    ],
    element: <Root />,
    path: "/",
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
