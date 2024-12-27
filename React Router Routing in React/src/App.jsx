
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Login from "./components/login";
import User from "./components/user";
import About from "./components/about";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar /> <Home />
        </>
      ),
    },
    {
      path: "/login",
      element: (
        <>
          <Navbar /> <Login />
        </>
      ),
    },
   {
      path: "/about",
      element: (
        <>
          <Navbar /> <About />
        </>
      ),
    },  
    {
      path: "/User/:username",
      element: (
        <>
          <Navbar /> <User />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
