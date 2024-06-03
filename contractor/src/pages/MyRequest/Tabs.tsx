import React, { useState } from "react";
import type { ConfigProviderProps, RadioChangeEvent } from "antd";
import { Tabs } from "antd";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";
import { SolidHR } from "../../components/Material/style";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import { useNavigate } from "react-router-dom";

type SizeType = ConfigProviderProps["componentSize"];

const MaterialContent = () => {
  const navigate = useNavigate();

  return (
    <Div
      backgroundColor="white"
      margin="3rem 0 1.5rem 0rem"
      width="100%"
      borderRadius="7px"
    >
      <Div
        display="flex"
        flexDirection="column"
        alignItems="start"
        justifyContent="start"
      >
        <Div width="100%" display="flex" justifyContent="space-between">
          <Title
            fontSize="2rem"
            margin="0.5rem 0 1.1rem 1.5rem"
            width="100"
            fontWeight="900"
          >
            Jackman fill site
          </Title>
          <CustomButton
            variant="primary"
            margin="1rem 1rem "
            padding="0 3rem"
            fontWeight="bold"
            onClick={() => navigate("/availability")}
          >
            See Availability
          </CustomButton>
        </Div>
        <SolidHR />
        <Div display="flex" padding="1rem 0 1rem  1.5rem">
          <Title fontWeight="500" fontSize="1.6rem">
            Operation hours:
          </Title>
          <Title fontSize="1.6rem"> &nbsp;08AM - 04:00PM</Title>
        </Div>
        <SolidHR />
        <Div display="flex" padding="1rem 0 1rem  1.5rem">
          <Title fontWeight="500" fontSize="1.6rem">
            Address:
          </Title>
          <Title fontSize="1.6rem" padding="0 0 0 1rem">
            12671 New Halls Ferry Rd; Florissant, Mississippi, 63033 US
          </Title>
        </Div>
        <SolidHR />
        <Div display="flex" padding="1rem 0 1rem  1.5rem">
          <Title fontWeight="500" fontSize="1.6rem">
            Max allowable trucks per day:
          </Title>
          <Title fontSize="1.6rem"> &nbsp; 4</Title>
        </Div>
        <SolidHR />
        <Div display="flex" padding="1rem 0 1rem  1.5rem">
          <Title fontWeight="500" fontSize="1.6rem">
            Max allowable loads per day:
          </Title>
          <Title fontSize="1.6rem"> &nbsp; 12</Title>
        </Div>
        <SolidHR />
        <Div display="flex" padding="1rem 0 1rem  1.5rem">
          <Title fontWeight="500" fontSize="1.6rem">
            CSR acceptance:
          </Title>
          <Title fontSize="1.6rem"> &nbsp; IL</Title>
        </Div>
      </Div>
    </Div>
  );
};

const data = [
  {
    title: "RL",
    content: <MaterialContent />,
  },
  {
    title: "IL",
    content: <MaterialContent />,
  },
  {
    title: "CL",
    content: <MaterialContent />,
  },
];

const TabsData: React.FC = () => {
  return (
    <Div>
      <Tabs
        defaultActiveKey="1"
        type="card"
        items={data.map((item, index) => ({
          label: item.title,
          key: String(index + 1),
          children: item.content,
        }))}
      />
    </Div>
  );
};

export default TabsData;
