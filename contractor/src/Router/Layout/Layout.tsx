import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/StyledCommon/Sidebar";
import Navbar from "../../components/StyledCommon/Navbar";
import { useEffect, useState } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedOut(true);
    navigate("/login");
  };

  useEffect(() => {
    if (user) {
      setIsLoggedOut(false);
    }
  }, [user]);

  return (
    <>
      {user && !isLoggedOut ? (
        <>
          <header>
            <Navbar onLogout={handleLogout} />
          </header>
          <aside>
            <Sidebar />
          </aside>
        </>
      ) : null}
      <main>
        <Outlet />
      </main>
      <footer>{/* <Footer /> */}</footer>
    </>
  );
};

export default Layout;
