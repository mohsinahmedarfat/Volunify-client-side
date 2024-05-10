import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";

const Root = () => {
  return (
    <div className="font-mont">
      <Navbar></Navbar>
      <div className="*:py-10">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Root;
