import Div from "../../components/StyledCommon/Global/Div";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Title from "../../components/StyledCommon/Global/Title";
import { MainDivAside } from "../../components/StyledCommon/Global";
import { Form, message } from "antd";
import axios from "axios";
import CustomInput from "../../components/StyledCommon/CustomInput";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import Spacer from "../../components/StyledCommon/Global/Spacer";
import { SolidHR } from "../../components/Material/style";

const WorkAccountInfo = () => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      await axios.post("http://localhost:3000/team", values);
      message.success("Member added successfully!");
      form.resetFields();
    } catch (error) {
      message.error("Failed to add member. Please try again.");
    }
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
            Summit Earth Works Account Information
          </Title>
        </Div>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Div
            margin="0 0 0 6rem"
            width="100%"
            display="grid"
            gridColumns="1fr 1fr 1fr  "
            gridTemplate=" 1fr 1fr "
            gap="3rem "
            wrap="wrap"
          >
            <Div>
              <label htmlFor="">Company Name</label>
              <Form.Item
                name="companyName"
                rules={[{ required: true, message: "Please input the ID!" }]}
              >
                <CustomInput
                  type="text"
                  width="100%"
                  bgColor="#fff"
                  padding="1rem 8rem 1rem 1rem"
                  placeholder="Enter Company Name"
                  borderColor="#d9d9d9"
                />
              </Form.Item>
            </Div>
            <Div>
              <label htmlFor="">Email</label>

              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please input the email!" }]}
              >
                <CustomInput
                  type="text"
                  width="100%"
                  bgColor="#fff"
                  padding="0.8rem 0 0.8rem 1rem"
                  placeholder="Enter Email"
                  borderColor="#d9d9d9"
                />
              </Form.Item>
            </Div>

            <Div width="100%">
              <Spacer height="10rem" />
              <SolidHR />
            </Div>

            <Div>
              <label htmlFor="">Contact Phone</label>

              <Form.Item
                name="contactPhone"
                rules={[
                  {
                    required: true,
                    message: "Please input the contact phone!",
                  },
                ]}
              >
                <CustomInput
                  type="text"
                  width="100%"
                  bgColor="#fff"
                  padding="0.8rem 0 0.8rem 1rem"
                  placeholder="Enter Phone"
                  borderColor="#d9d9d9"
                />
              </Form.Item>
            </Div>
            <Div>
              <label htmlFor="">Location</label>

              <Form.Item
                name="location"
                rules={[
                  { required: true, message: "Please input the location!" },
                ]}
              >
                <CustomInput
                  type="text"
                  width="100%"
                  bgColor="#fff"
                  padding="0.8rem 0 0.8rem 1rem"
                  placeholder="Enter Location"
                  borderColor="#d9d9d9"
                />
              </Form.Item>
            </Div>

            <Div>
              <label htmlFor="">Role</label>
              <Form.Item
                name="role"
                rules={[{ required: true, message: "Please input the role!" }]}
              >
                <CustomInput
                  type="text"
                  width="100%"
                  bgColor="#fff"
                  padding="0.8rem 0 0.8rem 1rem"
                  placeholder="Enter Role"
                  borderColor="#d9d9d9"
                />
              </Form.Item>
            </Div>
          </Div>
          <Div margin="2rem 0 0 6rem">
            <Form.Item>
              <CustomButton
                type="submit"
                variant="primary"
                fontWeight="bold"
                fontSize="1.2rem"
                padding="1rem 4rem"
              >
                Add Member
              </CustomButton>
            </Form.Item>
          </Div>
        </Form>
      </MainDivAside>
    </>
  );
};

export default WorkAccountInfo;
