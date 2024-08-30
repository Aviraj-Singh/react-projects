import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
//import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Shimmer from "./components/Shimmer";
const About = lazy(() => import ('./components/About'));
import Footer from "./components/Footer";
import Cart from "./components/Cart";

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div className="">    
      <Header />
      <Outlet />
      <Footer/>
    </div>
    </Provider>
  );
};

//contains list of routes and associated element
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path: "/about",
        element: <Suspense fallback = {<Shimmer/>}>
          <About/>
        </Suspense>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/restaurants/:resId",
        element: <Menu/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
    errorElement: <Error/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
