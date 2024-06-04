import Title from "../../components/StyledCommon/Global/Title";
import Div from "../../components/StyledCommon/Global/Div";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TeamMember {
  id: string;
  fullName: string;
  email: string;
  contactPhone: string;
  location: string;
  role: string;
  photo: string;
}

const MembersData = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const request = async () => {
    try {
      const response = await axios.get("http://localhost:3000/team");
      setData(response.data);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    request();
  }, []);

  const handleRemove = (id: string) => {
    axios
      .delete(`http://localhost:3000/team/${id}`)
      .then(() => {
        request();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const showUserDetails = (id: string) => {
    navigate(`/team/${id}`);
  };

  return (
    <>
      <Div
        width="92.5%"
        backgroundColor="#E0DED9"
        padding="0.6rem"
        borderRadius="5px"
        borderColor=" #CBC9C6"
        borderStyle="solid"
        borderWidth="1px"
        margin="0 0 0 5rem"
      >
        <Div
          width="72%"
          display="flex"
          justifyContent="space-between"
          margin="0 0 0 1rem"
        >
          <Title>Full Name</Title>
          <Title>Email</Title>
          <Title>Contact Phone</Title>
          <Title>Location</Title>
          <Title>Role</Title>
        </Div>
      </Div>

      {data.map((item: TeamMember) => (
        <Div
          key={item.id}
          display="flex"
          justifyContent="space-between"
          gap="1rem" 
          alignItems="center"
          backgroundColor="white"
          width="92.5%"
          padding="1.2rem 1rem"
          height="5rem"
          margin="1rem 0 0 5rem"
          borderRadius="0.4rem"
          onClick={() => showUserDetails(item.id)}
        >
          <Div>
            <Title fontWeight="bold" textAlign="start">
              {item.fullName}
            </Title>
          </Div>
          <Title color="#0A5F59" textAlign="left">
            {item.email}
          </Title>
          <Title color="#7B7B7B" textAlign="start" fontWeight="bold">
            {item.contactPhone}
          </Title>

          <Title color="#7B7B7B" fontWeight="400" textAlign="start">
            {item.location}
          </Title>
          <Title color="#7B7B7B" fontWeight="400" textAlign="start">
            {item.role}
          </Title>
          <CustomButton
            variant="outlined"
            padding="0.5em 2em"
            radius="4px"
            fontWeight="600"
            onClick={() => handleRemove(item.id)}
          >
            Remove
          </CustomButton>
        </Div>
      ))}
    </>
  );
};

export default MembersData;
