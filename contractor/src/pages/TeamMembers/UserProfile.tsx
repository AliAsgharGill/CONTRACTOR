import { useParams } from "react-router-dom";
import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Title from "../../components/StyledCommon/Global/Title";
import { useEffect } from "react";
import axios from "axios";

const UserProfile = () => {
  const { id } = useParams();
  const userData = async (id) => {
    const response = await axios.get("http://localhost:3000/team/" + id);
    return response.data;
  };

  return (
    <>
      <MainDivAside>
        <Div display="flex" margin="3rem 0 1.5rem 5rem" alignItems="center">
          <IoArrowBackCircleOutline
            size="2.5rem"
            fill="#0a5f59"
            onClick={() => window.history.back()}
          />
          <Title fontSize="2em" fontWeight="600" margin="0 0 0 1rem">
            User Name Here
          </Title>
        </Div>
        <Div display="flex" margin="3rem 0 1.5rem 5rem">
          <h1>User Profile</h1>
        </Div>
      </MainDivAside>
    </>
  );
};

export default UserProfile;
