import { Link, NavLink } from "react-router-dom";
import { SidebarContainer, SidebarDiv, Spacer, Title } from "./style";
import Img from "../Global/Img";

const Sidebar = () => {
  return (
    <>
      <SidebarDiv>
        <Link to="/dashboard">
          <Img src="src/assets/images/LogoWithName.png" alt="logo" />
        </Link>
        <Spacer />

        <SidebarContainer>
          <NavLink
            to="/dashboard"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_43_789" fill="white">
                <rect x="12" width="9.99994" height="12.9999" rx="1" />
              </mask>
              <rect
                x="12"
                width="9.99994"
                height="12.9999"
                rx="1"
                stroke="#83CDC8"
                stroke-width="2.4"
                mask="url(#path-1-inside-1_43_789)"
              />
              <mask id="path-2-inside-2_43_789" fill="#83CDC8">
                <rect
                  x="12"
                  y="14.9999"
                  width="9.99994"
                  height="7.49996"
                  rx="1"
                />
              </mask>
              <rect
                x="12"
                y="14.9999"
                width="9.99994"
                height="7.49996"
                rx="1"
                stroke="#83CDC8"
                stroke-width="2.4"
                mask="url(#path-2-inside-2_43_789)"
              />
              <mask id="path-3-inside-3_43_789" fill="#83CDC8">
                <rect width="9.99994" height="7.49996" rx="1" />
              </mask>
              <rect
                width="9.99994"
                height="7.49996"
                rx="1"
                stroke="#83CDC8"
                stroke-width="2.4"
                mask="url(#path-3-inside-3_43_789)"
              />
              <mask id="path-4-inside-4_43_789" fill="#83CDC8">
                <rect y="9.49988" width="9.99994" height="12.9999" rx="1" />
              </mask>
              <rect
                y="9.49988"
                width="9.99994"
                height="12.9999"
                rx="1"
                stroke="#83CDC8"
                stroke-width="2.4"
                mask="url(#path-4-inside-4_43_789)"
              />
            </svg>

            <Title>Dashboard</Title>
          </NavLink>
        </SidebarContainer>

        <SidebarContainer>
          <NavLink
            to="/request-soil-deposit"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 18 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 1H3C2.46957 1 1.96086 1.21071 1.58579 1.58579C1.21071 1.96086 1 2.46957 1 3V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H15C15.5304 21 16.0391 20.7893 16.4142 20.4142C16.7893 20.0391 17 19.5304 17 19V7L11 1Z"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 1V7H17"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 17V11"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 14H12"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Title>Request Soil Deposit</Title>
          </NavLink>
        </SidebarContainer>

        <SidebarContainer>
          <NavLink
            to="/my-request"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H8L10 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V17Z"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11 9V15"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H14"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Title>My Requests</Title>
          </NavLink>
        </SidebarContainer>

        <SidebarContainer>
          <NavLink
            to="/team-members"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="23"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23 19V17C22.9993 16.1137 22.7044 15.2528 22.1614 14.5523C21.6184 13.8519 20.8581 13.3516 20 13.13"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16 1.13C16.8604 1.35031 17.623 1.85071 18.1676 2.55232C18.7122 3.25392 19.0078 4.11683 19.0078 5.005C19.0078 5.89318 18.7122 6.75608 18.1676 7.45769C17.623 8.1593 16.8604 8.6597 16 8.88"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <Title>Team Members</Title>
          </NavLink>
        </SidebarContainer>

        <SidebarContainer>
          <NavLink
            to="/account-overview"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <svg
              width="23"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.9999 19L14.6499 14.65"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 7V12"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M9 5L9 12"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
              />
              <path
                d="M12 7V12"
                stroke="#83CDC8"
                stroke-width="1.2"
                stroke-linecap="round"
              />
            </svg>

            <Title>Account Overview</Title>
          </NavLink>
        </SidebarContainer>
      </SidebarDiv>
    </>
  );
};

export default Sidebar;
