import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Router/Layout/Layout";
import Main from "./pages/Main/Main";
import CreateAccount from "./pages/CreateAccount";
import Login from "./pages/LoginScreen";
import PageNotFound from "./pages/PageNotFound";
import ChangePassword from "./pages/ChangePassword";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Main />} />
      <Route index path="/create-account" element={<CreateAccount />} />
      <Route index path="/login" element={<Login />} />
      <Route index path="/change-password" element={<ChangePassword />} />
      <Route index path="/dashboard" element={<Dashboard />} />
      <Route index path="*" element={<PageNotFound />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
