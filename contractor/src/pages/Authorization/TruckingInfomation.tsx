import { Form } from "antd";
import CustomInput from "../../components/StyledCommon/CustomInput";
import Div from "../../components/StyledCommon/Global/Div";

const TruckingInformation = () => {
  return (
    <>
      <Form>
        <Div display="flex" justifyContent="space-between">
          <Form.Item
            name="LicensePlate"
            rules={[
              {
                required: true,
                message: "Please Enter Trucking Infomation!",
              },
            ]}
          >
            <Div display="flex" flexDirection="column">
              <label htmlFor="" style={{ fontSize: "1rem" }}>
                license plate#
              </label>
              <CustomInput
                name="LicensePlate"
                placeholder="Enter License Plate"
                type="text"
                bgColor="#FFFFFF"
                padding="1rem"
                width="25rem"
                radius="0.3rem"
              />
            </Div>
          </Form.Item>

          <Form.Item
            name="LicensePlate"
            rules={[
              {
                required: true,
                message: "Please Enter Trucking Infomation!",
              },
            ]}
          >
            <Div display="flex" flexDirection="column">
              <label htmlFor="" style={{ fontSize: "1rem" }}>
                Truck Config
              </label>
              <CustomInput
                name="truckConfig"
                placeholder="Enter License Plate"
                type="text"
                bgColor="#FFFFFF"
                padding="1rem"
                width="25rem"
                radius="0.3rem"
              />
            </Div>
          </Form.Item>

          <Form.Item
            name="LicensePlate"
            rules={[
              {
                required: true,
                message: "Please Enter Trucking Infomation!",
              },
            ]}
          >
            <Div display="flex" flexDirection="column">
              <label htmlFor="" style={{ fontSize: "1rem" }}>
                Company Name
              </label>
              <CustomInput
                name="companyName"
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
      </Form>
    </>
  );
};

export default TruckingInformation;
