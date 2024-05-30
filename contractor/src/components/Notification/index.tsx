import CustomButton from "../StyledCommon/ButtonStyled/ButtonStyled";
import Div from "../StyledCommon/Global/Div";
import Title from "../StyledCommon/Global/Title";
import { listData } from "./data";

const Notification = () => {
  return (
    <>
      {listData.map((data) => (
        <Div display="flex" width="100%" margin="2rem 0" key={data.id}>
          <Div
            backgroundColor="white"
            alignItems="center"
            justifyContent="center"
            padding="1rem 1rem"
            borderWidth=" 2px 0 0 0"
            borderColor="green"
            borderStyle="solid"
            borderRadius="8px"
            margin="0 1rem 0 5rem"
            width="8%"
            height="10%"
          >
            <Title fontSize="1em" fontWeight="900" textAlign="center">
              {data.date}
            </Title>
            <hr />
            <Title
              fontSize="0.8em"
              padding="0.5rem 0"
              fontWeight="400"
              textAlign="center"
            >
              {data.time}
            </Title>
          </Div>
          <Div
            width="100%"
            margin="0rem 0rem"
            display="flex"
            justifyContent="space-between"
            backgroundColor="white"
            alignItems="center"
            padding=" 0 1rem  0 1rem"
          >
            <Div display="flex" flexDirection="column">
              <Title
                fontSize="1em"
                padding="1rem 0 0 0.5rem    "
                fontWeight="800 "
              >
                {data.title}
              </Title>
              <Title
                fontSize="0.8em"
                padding="1rem 0 0.5rem 0.5rem "
                width="100%"
                fontWeight="400"
              >
                {data.description}
              </Title>
            </Div>
            <CustomButton
              variant="default"
              height="3rem"
              width="10rem"
              margin="0 0 0 1rem"
            >
              Show More
            </CustomButton>
          </Div>
        </Div>
      ))}
    </>
  );
};

export default Notification;
  