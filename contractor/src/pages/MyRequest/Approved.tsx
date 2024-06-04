import { MainDivAside } from "../../components/StyledCommon/Global";
import Div from "../../components/StyledCommon/Global/Div";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Title from "../../components/StyledCommon/Global/Title";
import { SolidHR } from "../../components/Material/style";
import Img from "../../components/StyledCommon/Global/Img";
import TabsData from "./Tabs";

const Approved = () => {
  return (
    <>
      <MainDivAside>
        <Div display="flex" margin="3rem 0 1.5rem 5rem" alignItems="center">
          <IoArrowBackCircleOutline
            size="2.5rem"
            fill="#0a5f59"
            onClick={() => window.history.back()}
          />
          <Title fontSize="2em" fontWeight="600" margin="0 0 0 0">
            Your Request Is Approved
          </Title>
        </Div>
        <Div
          backgroundColor="white"
          margin="3rem 0 1.5rem 5rem"
          width="92%"
          borderRadius="7px"
        >
          <Div
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
          >
            <Title
              fontSize="2rem"
              margin="0.5rem 1rem"
              width="100"
              fontWeight="900"
            >
              Request details:
            </Title>
            <SolidHR />
            <Div display="flex" padding="0rem 0 0  1.5rem">
              <Title fontWeight="500" fontSize="1.4rem">
                {" "}
                Request Submitted on:
              </Title>
              <Title fontSize="1.4rem"> &nbsp; Sep 22, 2022</Title>
            </Div>
            <SolidHR />
            <Div display="flex" padding="0 0 0  1.5rem">
              <Title fontWeight="500" fontSize="1.2rem">
                {" "}
                Request Approved on:
              </Title>
              <Title fontSize="1.2rem"> &nbsp; Sep 26, 2022</Title>
            </Div>
            <SolidHR />
            <Div display="flex" padding="0 0 1rem  1.5rem">
              <Title fontWeight="500" fontSize="1.2rem">
                {" "}
                Type of material:
              </Title>
              <Title fontSize="1.2rem"> &nbsp; CL+</Title>
            </Div>
          </Div>
        </Div>
        <Div
          backgroundColor="white"
          margin="3rem 0 1.5rem 5rem"
          width="92%"
          borderRadius="7px"
        >
          <Div
            display="flex"
            flexDirection="column"
            alignItems="start"
            justifyContent="start"
          >
            <Title
              fontSize="2rem"
              margin="1rem 0 1rem 1rem"
              width="100"
              fontWeight="900"
            >
              List of all material needed:
            </Title>
            <SolidHR />
            <Div display="flex" padding="0 0 0rem 1.5rem">
              <Title fontWeight="500" fontSize="1.2rem">
                {" "}
                Material / material amount:
              </Title>
              <Title fontSize="1.2rem"> &nbsp; CL+ / 36,15 Metric Tones </Title>
            </Div>
            <SolidHR />
            <Div display="flex" padding="0 0 0  1.5rem">
              <Title fontWeight="500" fontSize="1.2rem">
                {" "}
                Environmental / geotechnical analytical data:
              </Title>
              <Title fontSize="1.2rem" padding="0 0 0 0">
                {" "}
                <Img src={"src/assets/images/pdfImage.png"} />{" "}
              </Title>
            </Div>
            <SolidHR />
            <Div display="flex" padding="0 0 1rem  1.5rem">
              <Title fontWeight="500" fontSize="1.2rem">
                {" "}
                Contaminated Site Regulations for the material type: {" "}
              </Title>
              <Title fontSize="1.2rem"> &nbsp; CL+ / 36,15 Metric Tones </Title>
            </Div>
          </Div>
        </Div>
        <Div margin="3rem 0 1.5rem 5rem" width="92%" borderRadius="7px">
          <TabsData />
        </Div>
      </MainDivAside>
    </>
  );
};

export default Approved;
