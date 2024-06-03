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
          <Title fontSize="2em" fontWeight="600" margin="0 0 0 1rem">
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
              margin="0.5rem 0 1.1rem 1.5rem"
              width="100"
              fontWeight="900"
            >
              Request details:
            </Title>
            <SolidHR />
            <Div display="flex" padding="1rem 0 1rem  1.5rem">
              <Title fontWeight="500" fontSize="1.6rem">
                {" "}
                Request Submitted on:
              </Title>
              <Title fontSize="1.6rem"> &nbsp; Sep 22, 2022</Title>
            </Div>
            <SolidHR />
            <Div display="flex" padding="1rem 0 1rem  1.5rem">
              <Title fontWeight="500" fontSize="1.6rem">
                {" "}
                Request Approved on:
              </Title>
              <Title fontSize="1.6rem"> &nbsp; Sep 26, 2022</Title>
            </Div>
            <SolidHR />
            <Div display="flex" padding="1rem 0 1rem  1.5rem">
              <Title fontWeight="500" fontSize="1.6rem">
                {" "}
                Type of material:
              </Title>
              <Title fontSize="1.6rem"> &nbsp; CL+</Title>
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
              margin="0.5rem 0 1.1rem 1.5rem"
              width="100"
              fontWeight="900"
            >
              List of all material needed:
            </Title>
            <SolidHR />
            <Div display="flex" padding="1rem 0 1rem  1.5rem">
              <Title fontWeight="500" fontSize="1.6rem">
                {" "}
                Material / material amount:
              </Title>
              <Title fontSize="1.6rem"> &nbsp; CL+ / 36,15 Metric Tones </Title>
            </Div>
            <SolidHR />
            <Div display="flex" padding="1rem 0 1rem  1.5rem">
              <Title fontWeight="500" fontSize="1.6rem">
                {" "}
                Environmental / geotechnical analytical data:
              </Title>
              <Title fontSize="1.6rem" padding="0 0 0 1rem">
                {" "}
                <Img src={"src/assets/images/pdfImage.png"} />{" "}
              </Title>
            </Div>
            <SolidHR />
            <Div display="flex" padding="1rem 0 1rem  1.5rem">
              <Title fontWeight="500" fontSize="1.6rem">
                {" "}
                Contaminated Site Regulations for the material type: s{" "}
              </Title>
              <Title fontSize="1.6rem"> &nbsp; CL+ / 36,15 Metric Tones </Title>
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
