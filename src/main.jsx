import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import data from "./assets/json/k3s-pizza.json";
import { createContext } from "react";
import App from "./App.jsx";
import PizzaBuy from "./pages/PizzaBuy.jsx";
import PizzaInfo from "./pages/PizzaInfo.jsx";
import PizzaMaker from "./pages/PizzaMaker.jsx";
import Basket from "./pages/Basket.jsx";

export const dataContext = createContext(null);

export default function Main() {
  const router = createBrowserRouter([
    {
      path: "/K3s-Pizza-Redux/",
      element: (
        <Provider store={store}>
          <App />
        </Provider>
      ),
    },
    {
      path: "/K3s-Pizza-Redux/pizza/",
      element: (
        <dataContext.Provider value={{ data }}>
          <Provider store={store}>
            <PizzaBuy />
          </Provider>
        </dataContext.Provider>
      ),
    },
    {
      path: "/K3s-Pizza-Redux/pizza/:pizzaId/",
      element: (
        <dataContext.Provider value={{ data }}>
          <Provider store={store}>
            <PizzaInfo />
          </Provider>
        </dataContext.Provider>
      ),
    },
    {
      path: "/K3s-Pizza-Redux/pizza-maker/",
      element: (
        <Provider store={store}>
          <PizzaMaker />
        </Provider>
      ),
    },
    {
      path: "/K3s-Pizza-Redux/basket/",
      element: (
        <dataContext.Provider value={{ data }}>
          <Provider store={store}>
            <Basket />
          </Provider>
        </dataContext.Provider>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
