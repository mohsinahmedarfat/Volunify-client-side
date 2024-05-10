import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <div className="font-mont">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
