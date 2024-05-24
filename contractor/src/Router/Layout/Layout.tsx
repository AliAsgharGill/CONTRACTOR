import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <header>
        {/* <Nav /> */}
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        {/* <Footer /> */}
      </footer>
    </>
  );
};

export default Layout;