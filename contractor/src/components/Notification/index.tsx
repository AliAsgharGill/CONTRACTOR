import { useState } from "react";
import CustomButton from "../StyledCommon/ButtonStyled/ButtonStyled";
import Div from "../StyledCommon/Global/Div";
import Title from "../StyledCommon/Global/Title";
import { listData } from "./data";
import CustomModal from "../StyledCommon/CustomModal";
import { Link } from "react-router-dom";
import Img from "../StyledCommon/Global/Img";

interface dataProps {
  id: number;
  date: string;
  day: string;
  time: string;
  title: string;
  description: string;
}
const Notification = () => {
  const [visible, setVisible] = useState(false);
  const [item, setItem] = useState({} as dataProps);
  const showModal = (data: dataProps) => {
    // console.log("Data:", data);
    setItem(data);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

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
            <Title
              fontSize="1em"
              padding="0.3rem 0"
              fontWeight="900"
              textAlign="center"
            >
              {data.date}
            </Title>
            <hr />
            <Title
              fontSize="0.8em"
              padding="0.3rem 0"
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
            borderRadius="0.2em"
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
                {data.description.slice(0, 180) + "..."}
              </Title>
            </Div>
            <CustomButton
              variant="outlined"
              height="3rem"
              width="10rem"
              margin="0 0 0 1rem"
              onClick={() => showModal(data)}
            >
              Show More
            </CustomButton>
          </Div>
        </Div>
      ))}
      {visible && (
        <CustomModal
          open={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          margin="1.3rem"
          padding="40px"
          height="40rem"
          width="37rem"
          backgroundColor="#f0f0f0"
          color="#000"
          radius="10px"
          okText="Confirm"
          cancelText="Close"
          showCancelButton={false}
          showOkButton={false}
        >
          <Title padding="1rem 0" fontSize="1.5rem">
            <b>{item.date}/</b>
            {item.time}/{item.day}
          </Title>
          <Title padding=" 0 0 1rem 0" fontSize="2rem">
            {item.title}
          </Title>

          <Title fontSize="1.2rem  ">
            {item.description}
          </Title>

          <Title padding="1rem 0 2rem 0" fontSize="1rem">
            Lorem ipsum dolor sit{" "}
            <Link to="/" target="_blank" style={{ color: "green" }}>
              click here
            </Link>{" "}
            sit amet consectetur adipisicing elit.
          </Title>

          <Div
            margin=" 0 0 1rem 0"
            display="flex"
            justifyContent="space-between"
          >
            <Img
              src="https://source.unsplash.com/1600x900/?city"
              alt="img"
              width="48%"
            />
            <Img
              src="https://source.unsplash.com/1600x900/?technology"
              alt="img"
              width="48%"
            />
          </Div>

          <CustomButton
            variant="secondary"
            width="100%"
            fontWeight="bold"
            fontSize="1.2rem"
            margin="1rem 0"
            onClick={handleOk}
          >
            ok
          </CustomButton>
        </CustomModal>
      )}
    </>
  );
};

export default Notification;
