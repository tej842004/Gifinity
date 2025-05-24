import { Outlet } from "react-router";
import NavBar from "../src/components/NavBar";

interface Props {
  onSearch: (searchText: string) => void;
}

const Layout = ({ onSearch }: Props) => {
  return (
    <>
      <NavBar onSearch={onSearch} />
      <Outlet />
    </>
  );
};

export default Layout;
