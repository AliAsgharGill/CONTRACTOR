import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";
import { SolidHR } from "../../components/Material/style";
import Spacer from "../../components/StyledCommon/Global/Spacer";
import TruckingInformation from "./TruckingInfomation";

const Authorization = () => {
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
            Soil Authorization Form Details{" "}
          </Title>
        </Div>
        <Div
          backgroundColor="#E7E4DE"
          borderRadius="10px"
          width="90%"
          padding="3rem"
          margin="2rem 0 0 5rem"
        >
          <Title fontWeight={600} margin="1rem 0" fontSize="1.5rem">
            Summit Earth Works
          </Title>
          <Div
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <Div display="flex" flexDirection="column">
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}> Address: </span> 12671 New
                Halls Ferry Rd; <br /> Florissant, Mississippi, 63033 US{" "}
              </Title>
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}>Email: </span>office@gmail.com
              </Title>
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}> Phone:</span>(0067) 5677 884
              </Title>
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}> Posrition:</span> Worker
              </Title>
            </Div>

            <Div display="flex" flexDirection="column">
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}>
                  {" "}
                  Originating location:
                </span>{" "}
                3474 Columbia Boulevard, <br /> Owings Mills MD, Maryland, 21117{" "}
              </Title>
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}>AES PO#: </span>76889001
              </Title>
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}> CSR:</span>RL
              </Title>
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}>
                  {" "}
                  Laboratory file #:{" "}
                </span>{" "}
                77854
              </Title>
            </Div>
            <Div display="flex" flexDirection="column">
              <Title lineHeight="1.8">
                {" "}
                <span style={{ fontWeight: 600 }}> Receiving site: </span>{" "}
                Jackman Corporation Inc.
              </Title>
            </Div>
          </Div>
          <Spacer height="4rem" />
          <SolidHR />
          {/* Trucing Information */}
          <Title fontWeight={600} margin="1rem 0" fontSize="1.5rem">
            Trucking information:
          </Title>
          <TruckingInformation />
        </Div>
      </MainDivAside>
    </>
  );
};

export default Authorization;
