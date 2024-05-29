import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import CustomInput from "../../components/StyledCommon/InputSyled";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Dashboard</h1>
      <CustomButton
        variant="secondary"
        bgColor="#F6D218"
        padding="1em 2em"
        fontSize="1.5em"
        borderColor="black"
        radius="5px"
        onClick={() => navigate("/login")}
      >
        Secondary Button
      </CustomButton>
      <CustomInput
        type="email"
        name="email"
        id="email"
        label="Email"
        placeholder="Email"
        onChange={() => {}}
      />
    </>
  );
};

export default Dashboard;
