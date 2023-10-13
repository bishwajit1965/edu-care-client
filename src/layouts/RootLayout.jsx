import Footer from "../components/common/Footer/Footer";
import NavBar from "../components/common/NavBar/NavBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-20rem)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
