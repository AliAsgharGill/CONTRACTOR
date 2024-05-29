import { Outlet } from "react-router-dom";
import Sidebar from "../../components/StyledCommon/Sidebar";
import Navbar from "../../components/StyledCommon/Navbar";
const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Outlet />
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default Layout;
