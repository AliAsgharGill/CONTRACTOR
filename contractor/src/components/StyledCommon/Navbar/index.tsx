import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <ul className="flex items-center space-x-8 lg:flex">
        <li>
          <NavLink
            to="/"
            aria-label="Home"
            title="Home"
            className="hover:underline font-bold me-4 md:me-6  tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/campaigns"
            aria-label="Campaigns"
            title="Campaigns"
            className="hover:underline font-bold me-4 md:me-6  tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
            // onClick={handleUnLoginUser}
          >
            Campaigns
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/result"
            aria-label="Result"
            title="Result"
            className="hover:underline font-bold me-4 md:me-6  tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400 "
            // onClick={handleUnLoginUser}
          >
            Result
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
