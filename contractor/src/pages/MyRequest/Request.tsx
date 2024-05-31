import Title from "../../components/StyledCommon/Global/Title";
import Div from "../../components/StyledCommon/Global/Div";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import axios from "axios";
import { useEffect, useState } from "react";

interface dataProps {
  id: number;
  date: string;
  site: string;
  status: "Approved" | "Pending" | "Completed";
  location: string;
  material: string;
  details: {
    requestSubmittedOn: string;
    requestApprovedOn: string;
    materialAmount: string;
    operationHours: string;
    address: string;
    maxAllowableTrucksPerDay: number;
    maxAllowableLoadsPerDay: number;
    csrAcceptance: string;
  };
}

const Request = () => {
  const [data, setData] = useState([]);

  const request = async () => {
    try {
      const response = await axios.get("http://localhost:3000/projectData");
      setData(response.data);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    request();
  }, []);

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
          <Title>Date</Title>
          <Title>Site</Title>
          <Title>Status</Title>
          <Title>Location</Title>
          <Title>Material</Title>
        </Div>
      </Div>

      {data.map((item: dataProps) => (
        <Div
          key={item.id}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="white"
          width="92.5%"
          padding="1.2rem 1rem"
          height="5rem"
          margin="1rem 0 0 5rem"
          borderRadius="0.4rem"
        >
          <Title fontWeight="bold" textAlign="start">
            {item.date}
          </Title>
          <Title color="#0A5F59" textAlign="start">
            {item.site}
          </Title>
          {item.status === "Approved" ? (
            <Title color="#0A5F59" textAlign="start" fontWeight="bold">
              {item.status}
            </Title>
          ) : item.status === "Completed" ? (
            <Title color="#7B7B7B" textAlign="start" fontWeight="300">
              {item.status}
            </Title>
          ) : (
            <Title color="#7B7B7B" textAlign="start" fontWeight="bold">
              {item.status}
            </Title>
          )}
          <Title color="#7B7B7B" fontWeight="400" textAlign="start">
            {item.location}
          </Title>
          <Title color="#7B7B7B" fontWeight="400" textAlign="start">
            {item.material}
          </Title>
          <CustomButton
            variant="outlined"
            padding="0.5em 2em"
            radius="4px"
            fontWeight="600"
          >
            View
          </CustomButton>
        </Div>
      ))}
    </>
  );
};

export default Request;
