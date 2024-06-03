import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";
import MembersData from "./MembersData";

const TeamMembers = () => {
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
            My Team
          </Title>

          <CustomButton
            variant="primary"
            fontWeight="bold"
            fontSize="1.4rem"
            margin="2rem 0 0 0"
            padding="1rem 4rem"
          >
            Add Member{" "}
          </CustomButton>
        </Div>
        <Div width="100%">
          <MembersData />
        </Div>
      </MainDivAside>
    </>
  );
};

export default TeamMembers;
