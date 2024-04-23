import { NavLink, Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";

export const Layout = () => {
  const links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Gallery", link: "gallery" },
  ];

  return (
    <>
      <Navbar links={links} />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout