import Title from "../../components/StyledCommon/Global/Title";
import Div from "../../components/StyledCommon/Global/Div";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";

const Request = () => {
  return (
    <>
      <Div
        width="92.5%"
        backgroundColor="#E0DED9"
        padding="0.6rem"
        borderRadius="5px"
        borderColor=" #CBC9C6"
        borderStyle="solid"
        borderWidth="1px"
        margin="0 0 0 5rem"
      >
        <Div
          width="70%"
          display="flex"
          justifyContent="space-between"
          margin="0 0 0 1rem"
        >
          <Title>Date</Title>
          <Title>Site</Title>
          <Title>Status</Title>
          <Title>Location</Title>
          <Title>Material</Title>
        </Div>
      </Div>
      <Div
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="white"
        width="92.5%"
        padding="1rem 1rem"
        height="5rem"
        margin="1rem 0 0 5rem"
        borderRadius="0.4rem"
      >
        <Title fontWeight="bold">12/26/22</Title>
        <Title color="#0A5F59">Jackman fill site</Title>
        <Title color="#0A5F59" fontWeight="bold">
          Approved
        </Title>
        <Title color="#7B7B7B" fontWeight="400">
          Los Angeles, CA
        </Title>
        <Title color="#7B7B7B" fontWeight="400">
          CL+ / 36,15 Metric Tones
        </Title>
        <CustomButton
          variant="outlined"
          padding="0.5em 2em"
          radius="4px"
          fontWeight="600"
        >
          View
        </CustomButton>
      </Div>
    </>
  );
};

export default Request;
