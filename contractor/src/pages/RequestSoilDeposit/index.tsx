import Material from "../../components/Material/Material";
import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";

const RequestSoilDeposit = () => {
  return (
    <>
      <MainDivAside>
        <Div>
          <Title fontSize="2em" fontWeight="600" margin="3rem 0 1.5rem 5rem">
            Material needed
          </Title>
        </Div>
        <Div margin="0 0 0 5rem">
          <Material />
        </Div>
      </MainDivAside>
    </>
  );
};

export default RequestSoilDeposit;
