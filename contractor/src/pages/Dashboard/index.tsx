import Notification from "../../components/Notification";
import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";
import { MiniDiv } from "./style";

const Dashboard = () => {
  return (
    <>
      <MainDivAside>
        <Div>
          <Title fontSize="2em" fontWeight="600" margin="5rem 0 1.5rem 5rem">
            Notification board
          </Title>
          <Notification />
        </Div>
      </MainDivAside>
    </>
  );
};

export default Dashboard;
