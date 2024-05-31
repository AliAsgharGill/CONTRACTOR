import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";
import Request from "./Request";

const MyRequest = () => {
  return (
    <>
      <MainDivAside>
        <Div
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
          padding="0 2rem 0 0"
        >
          <Title fontSize="2em" fontWeight="600" margin="3rem 0 1.5rem 5rem">
            My Requests
          </Title>

          <CustomButton
            variant="primary"
            fontWeight="bold"
            fontSize="1.2rem"
            margin="2rem 0 0 0"
            padding="1rem 2rem"
          >
            Make a request
          </CustomButton>
        </Div>
        <Div width="100%" >
          <Request />
        </Div>
      </MainDivAside>
    </>
  );
};

export default MyRequest;
