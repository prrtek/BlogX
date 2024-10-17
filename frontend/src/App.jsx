import { createBrowserRouter } from "react-router-dom";

import About from "./pages/About";

import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Home from "./Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import { LampDemo } from "./components/ui/Lamp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },

  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <LampDemo />,
  },
]);

export default router;
