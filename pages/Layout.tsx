import { Outlet } from "react-router";
import NavBar from "../src/components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default Layout;
