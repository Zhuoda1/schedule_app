import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.css";

function Layout() {
  return (
    <>
      <div className="layoutWrapper" id="background">
        <div className="headerWrapper">
          <Header />
        </div>

        <div className="outletWrapper">
          <Outlet />
        </div>

        <div className="footerWrapper">
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Layout