import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MainDivAside } from "../../components/StyledCommon/Global";
import Title from "../../components/StyledCommon/Global/Title";
import Div from "../../components/StyledCommon/Global/Div";
import AddMemberForm from "./AddMemberForm";

const AddTeamMember = () => {
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
            Add team member
          </Title>
        </Div>
        <Div>
          <AddMemberForm />
        </Div>
      </MainDivAside>
    </>
  );
};

export default AddTeamMember;
