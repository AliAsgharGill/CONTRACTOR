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
import RequestSoilDeposit from "./pages/RequestSoilDeposit";
import MyRequest from "./pages/MyRequest";
import TeamMembers from "./pages/TeamMembers";
import AccountOverview from "./pages/AccountOverview/AccountOverview";
import Approved from "./pages/MyRequest/Approved";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index path="/" element={<Main />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/change-password" element={<ChangePassword />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/request-soil-deposit" element={<RequestSoilDeposit />} />
      <Route path="/my-request" element={<MyRequest />} />
      <Route path="/team-members" element={<TeamMembers />} />
      <Route path="/account-overview" element={<AccountOverview />} />
      <Route path="/approved" element={<Approved />} />

      {/* No Route Found */}
      <Route path="*" element={<PageNotFound />} />
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
