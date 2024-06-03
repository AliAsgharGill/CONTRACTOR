import { useState } from "react";
import { Form, Select } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
import CustomInput from "../../components/StyledCommon/CustomInput";
import Div from "../../components/StyledCommon/Global/Div";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import { SolidHR } from "../../components/Material/style";

const { Option } = Select;

const CustomSelect = styled(Select)`
  .ant-select-selector {
    padding: 1rem !important;
    background-color: #ffffff !important;
    border-radius: 0.3rem !important;
  }
`;

const TruckingInformation = () => {
  const [fields, setFields] = useState([
    { id: 1, licensePlate: "", truckConfig: "", companyName: "" },
  ]);

  const addMoreFields = () => {
    setFields([
      ...fields,
      {
        id: fields.length + 1,
        licensePlate: "",
        truckConfig: "",
        companyName: "",
      },
    ]);
  };

  const handleFinish = (values) => {
    console.log("Form Values:", values);
  };

  return (
    <>
      <Form onFinish={handleFinish}>
        {fields.map((field, index) => (
          <Div key={field.id} display="flex" justifyContent="space-between">
            <Form.Item name={`LicensePlate${field.id}`}>
              <Div display="flex" flexDirection="column">
                <label
                  htmlFor={`LicensePlate${field.id}`}
                  style={{ fontSize: "1rem" }}
                >
                  License Plate#
                </label>
                <CustomInput
                  id={`LicensePlate${field.id}`}
                  placeholder="Enter License Plate"
                  type="text"
                  bgColor="#FFFFFF"
                  padding="1rem"
                  width="25rem"
                  radius="0.3rem"
                />
              </Div>
            </Form.Item>

            <Form.Item name={`TruckConfig${field.id}`}>
              <Div display="flex" flexDirection="column">
                <label
                  htmlFor={`TruckConfig${field.id}`}
                  style={{ fontSize: "1rem" }}
                >
                  Truck Config
                </label>
                <CustomSelect
                  id={`TruckConfig${field.id}`}
                  placeholder="Select Truck Config"
                  style={{ width: "25rem", height: "3.8rem" }}
                >
                  <Option value="config1">Config 1</Option>
                  <Option value="config2">Config 2</Option>
                  <Option value="config3">Config 3</Option>
                </CustomSelect>
              </Div>
            </Form.Item>

            <Form.Item name={`CompanyName${field.id}`}>
              <Div display="flex" flexDirection="column">
                <label
                  htmlFor={`CompanyName${field.id}`}
                  style={{ fontSize: "1rem" }}
                >
                  Company Name
                </label>
                <CustomInput
                  id={`CompanyName${field.id}`}
                  placeholder="Enter Company Name"
                  type="text"
                  bgColor="#FFFFFF"
                  padding="1rem"
                  width="25rem"
                  radius="0.3rem"
                />
              </Div>
            </Form.Item>
          </Div>
        ))}
        <CustomButton
          variant="outlined"
          onClick={addMoreFields}
          postfixIcon={<PlusCircleOutlined />}
        >
          Add more
        </CustomButton>

        <SolidHR />

        <Div display="flex" justifyContent="" alignItems="center">
          <Form.Item name="QEP">
            <Div display="flex" flexDirection="column">
              <label htmlFor="QEP" style={{ fontSize: "1rem" }}>
                Q.E.P.{" "}
              </label>
              <CustomInput
                id="QEP"
                placeholder="Jose D. Powell"
                type="text"
                padding="1rem"
                width="25rem"
                radius="0.3rem"
                border="0 0 6px 0"
                bgColor="#B8B6B2"
                hoverBgColor="#B8B6B2"
                borderColor="#B8B6B2"
              />
            </Div>
          </Form.Item>
        </Div>
        <Form.Item name="uploadStamp">
          <CustomInput
            id="uploadStamp"
            placeholder="Upload stamp of approval"
            type="file"
            padding="1rem"
            width="25rem"
            radius="0.3rem"
          />
        </Form.Item>
        <Div display="flex" justifyContent="end">
          <Form.Item>
            <CustomButton
              variant="secondary"
              fontWeight="bold"
              fontSize="1.2rem"
              margin="2rem 0 0 2rem"
              padding="1rem 2rem"
              type="submit"
            >
              Save and Send to the Site Filed
            </CustomButton>
          </Form.Item>
        </Div>
      </Form>
    </>
  );
};

export default TruckingInformation;
