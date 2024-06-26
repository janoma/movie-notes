import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import { store } from "./app/store";
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
