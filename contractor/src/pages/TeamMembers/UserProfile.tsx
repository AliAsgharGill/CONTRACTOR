import { useNavigate, useParams } from "react-router-dom";
import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Title from "../../components/StyledCommon/Global/Title";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, message } from "antd";
import CustomInput from "../../components/StyledCommon/CustomInput";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";

interface TeamMember {
  id: string;
  fullName: string;
  email: string;
  contactPhone: string;
  location: string;
  role: string;
  photo: string;
}

const UserProfile = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [data, setData] = useState<TeamMember | null>(null);
  const { id } = useParams();

  const userData = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3000/team/${id}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (id) {
      userData(id);
    }
  }, [id]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const onFinish = async (values: any) => {
    try {
      await axios.patch(`http://localhost:3000/team/${id}`, values);
      message.success("Member saved successfully!");
      form.resetFields();
      navigate("/team-members");
    } catch (error) {
      message.error("Failed to save member. Please try again.");
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
            {data.fullName}
          </Title>
        </Div>
        <Div display="flex" margin="3rem 0 1.5rem 5rem">
          <Form form={form} layout="vertical" onFinish={onFinish}>
            <Div
              margin="0 0 0 6rem"
              width="100%"
              display="grid"
              gridColumns="1fr 1fr 1fr  "
              gridTemplate=" 1fr "
              gap="3rem "
              wrap="wrap"
            >
              <Div>
                <label htmlFor="">Enter Full Name</label>
                <Form.Item
                  name="fullName"
                  rules={[{ required: true, message: "Please input the ID!" }]}
                >
                  <CustomInput
                    defaultValue={data.fullName}
                    // value={data.fullName}
                    type="text"
                    width="100%"
                    bgColor="#fff"
                    padding="1rem 8rem 1rem 1rem"
                    placeholder="Enter Full Name"
                    borderColor="#d9d9d9"
                  />
                </Form.Item>
              </Div>
              <Div>
                <label htmlFor="">Email</label>

                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: "Please input the email!" },
                  ]}
                >
                  <CustomInput
                    defaultValue={data.email}
                    type="text"
                    width="100%"
                    bgColor="#fff"
                    padding="0.8rem 0 0.8rem 1rem"
                    placeholder="Enter Email"
                    borderColor="#d9d9d9"
                  />
                </Form.Item>
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
                    defaultValue={data.contactPhone}
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
                    defaultValue={data.location}
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
                  rules={[
                    { required: true, message: "Please input the role!" },
                  ]}
                >
                  <CustomInput
                    defaultValue={data.role}
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
                  Save
                </CustomButton>
              </Form.Item>
            </Div>
          </Form>
        </Div>
      </MainDivAside>
    </>
  );
};

export default UserProfile;
