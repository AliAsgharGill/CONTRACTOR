import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";
import { SolidHR } from "../../components/Material/style";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import { useNavigate } from "react-router-dom";
import axios from "axios";

interface ConstructionData {
  id: number;
  siteName: string;
  truck: string;
  weight: string;
  totalMoney: string;
}

interface InvoiceData {
  id: number;
  invoiceNumber: string;
  fillSite: string;
  invoice: "Paid" | "Awaiting Payment";
  paymentDueDate: string;
}

const FillSites = () => {
  // const navigate = useNavigate();

  const [data, setData] = useState<ConstructionData[] | null>([]);

  const request = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/constructionData"
      );
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
        display="flex"
        justifyContent="space-between"
        backgroundColor="white"
        padding="1.2rem 0rem 1rem 1.2rem"
      >
        <Title fontWeight="bold">Fill site name:</Title>
        <Title fontWeight="bold">Truck:</Title>
        <Title fontWeight="bold">Weight:</Title>
        <Title fontWeight="bold">Total money:</Title>
        <Div></Div>
      </Div>

      {data?.map((item: ConstructionData, index: number) => (
        <Div
          key={item.id}
          className={`data-row ${index % 2 === 1 ? "alternate-bg" : ""}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderColor="#dbd5d5"
          borderStyle="solid"
          borderWidth="0 0 1px 0"
          padding="1.2rem 0 0 1rem"
          backgroundColor={index % 2 === 1 ? "white" : "#FBF9F7"}
        >
          <Title fontWeight="bold" fontSize="1rem" flex="1">
            {item.siteName}
          </Title>
          <Title fontSize="1rem" color="#333333" flex="1" textAlign="center">
            {item.truck}
          </Title>
          <Title fontSize="1rem" color="#333333" flex="1" textAlign="center">
            {item.weight}
          </Title>
          <Title fontSize="1rem" color="#333333" flex="1" textAlign="center">
            {item.totalMoney}
          </Title>
          <Div >
            <CustomButton
              variant="outlined"
              borderColor="none"
              hoverBgColor="none"
              hoverBorderColor="none"
              hoverTextColor="none"
              fontWeight="bold"
              fontSize="1rem"
            >
              See Details
            </CustomButton>
          </Div>
        </Div>
      ))}
    </>
  );
};

const Invoices = () => {
  // const navigate = useNavigate();
  const [invoiceData, setInvoiceData] = useState<InvoiceData[] | null>([]);

  const invoicesRequest = async () => {
    try {
      const response = await axios.get("http://localhost:3000/invoiceData");
      setInvoiceData(response.data);
      return response.data;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    invoicesRequest();
  }, []);

  return (
    <>
      <Div
        display="flex"
        justifyContent="space-between"
        backgroundColor="white"
        padding="1.2rem 0rem 1rem 1.2rem"
      >
        <Title fontWeight="bold">Invoice number </Title>
        <Title fontWeight="bold">Fill site name</Title>
        <Title fontWeight="bold">Invoice Status</Title>
        <Title fontWeight="bold">Payment due date</Title>
        <Div></Div>
      </Div>

      {invoiceData?.map((item: InvoiceData, index: number) => (
        <Div
          key={item.id}
          className={`data-row ${index % 2 === 1 ? "alternate-bg" : ""}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderColor="#dbd5d5"
          borderStyle="solid"
          borderWidth="0 0 1px 0"
          padding="1.2rem 0 0 1rem"
          backgroundColor={index % 2 === 1 ? "white" : "#FBF9F7"}
        >
          <Title fontSize="1rem" color="#333333" flex="1" textAlign="left">
            {item.invoiceNumber}
          </Title>
          <Title fontWeight="bold" fontSize="1rem" flex="1">
            {item.fillSite}
          </Title>

          {item.invoice === "Paid" ? (
            <Title fontSize="1rem" color="#0A5F59" flex="1" textAlign="left">
              {" "}
              {item.invoice}{" "}
            </Title>
          ) : (
            <Title fontSize="1rem" color="#FE9A03" flex="1" textAlign="left">
              {item.invoice}
            </Title>
          )}
          <Title fontSize="1rem" color="#333333" flex="1" textAlign="left">
            {item.paymentDueDate}
          </Title>
          <Div>
            <CustomButton
              variant="outlined"
              borderColor="none"
              hoverBgColor="none"
              hoverBorderColor="none"
              hoverTextColor="none"
              fontWeight="bold"
              fontSize="1rem"
            >
              See Invoices
            </CustomButton>
          </Div>
          <Div>
            <CustomButton
              variant="outlined"
              borderColor="none"
              hoverBgColor="none"
              hoverBorderColor="none"
              hoverTextColor="none"
              fontWeight="bold"
              fontSize="1rem"
            >
              See Details
            </CustomButton>
          </Div>
        </Div>
      ))}
    </>
  );
};

const data = [
  {
    title: "Fill Sites",
    content: <FillSites />,
  },
  {
    title: "Invoices",
    content: <Invoices />,
  },
];

const AccountsData: React.FC = () => {
  return (
    <>
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
    </>
  );
};

export default AccountsData;
