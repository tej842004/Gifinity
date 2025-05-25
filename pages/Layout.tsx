import { Outlet } from "react-router";
import NavBar from "../src/components/NavBar";
import FadeInComponent from "../src/components/FadeInComponent";

const Layout = () => {
  return (
    <FadeInComponent>
      <NavBar />
      <Outlet />
    </FadeInComponent>
  );
};

export default Layout;
