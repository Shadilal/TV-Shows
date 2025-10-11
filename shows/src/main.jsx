import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./usercomponents/homepage/Home";
import Root from "./usercomponents/root/Root";
import Fav from "./usercomponents/fav/Fav";
import { Provider } from "react-redux";
import { Store } from "./usercomponents/Redux/Store";
import SearchResult from "./usercomponents/searchResult/searchResult";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/fav",
        element: <Fav />,
      },
      {
        path: "/searchresult",
        element: <SearchResult />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
