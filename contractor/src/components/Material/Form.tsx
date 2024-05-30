import { StyledRadioButton, StyledRadioGroup, StyledSelected } from "./style";
import Div from "../StyledCommon/Global/Div";
import Title from "../StyledCommon/Global/Title";
import CustomInput from "../StyledCommon/InputStyled";
import { useState } from "react";
import CustomButton from "../StyledCommon/ButtonStyled/ButtonStyled";

const Form = () => {
  const [elements, setElements] = useState([0]);

  const addElement = () => {
    setElements([...elements, elements.length]);
  };

  return (
    <>
      <div>
        {elements.map((element, index) => (
          // <Div key={index} display="flex">
          //   <Div>
          //     <Title>Material Name</Title>
          //     <StyledSelected defaultValue={"RL"}>
          //       <option value="AG">AG</option>
          //       <option value="RL">RL</option>
          //       <option value="CL">CL</option>
          //       <option value="IL">IL</option>
          //       <option value="IL+">IL+</option>
          //     </StyledSelected>
          //   </Div>
          //   <Div margin="0 3rem">
          //     <Title>Material type</Title>
          //     <StyledRadioGroup>
          //       <Div display="flex" margin="1rem 0rem">
          //         <StyledRadioButton
          //           name={`materialType${index}`}
          //           value="Structural"
          //         />
          //         Structural
          //         <StyledRadioButton
          //           name={`materialType${index}`}
          //           value="Non-Structural"
          //         />
          //         Non-Structural
          //       </Div>
          //     </StyledRadioGroup>
          //   </Div>
          //   <Div margin="0 3rem">
          //     <Title>Material Amount</Title>
          //     <StyledRadioGroup>
          //       <Div display="flex" margin="1rem 0rem">
          //         <StyledRadioButton
          //           name={`materialAmount${index}`}
          //           value="metricTonnes"
          //         />
          //         Metric Tonnes
          //         <StyledRadioButton
          //           name={`materialAmount${index}`}
          //           value="m3"
          //         />
          //         m<sup>3</sup>
          //       </Div>
          //     </StyledRadioGroup>
          //   </Div>
          //   <Div margin="0 3rem">
          //     <CustomInput
          //       type="number"
          //       padding="0.6rem"
          //       margin="2rem 0 0 0"
          //       bgColor="white"
          //       borderColor="white"
          //       radius="4px"
          //       placeholder="00,00"
          //     />
          //   </Div>
          // </Div>
          <Div display="flex" margin="1rem 0">
            <Div>
              <Title>Material Name</Title>
              <StyledSelected defaultValue={"RL"}>
                <StyledSelected.Option value="AG">AG</StyledSelected.Option>
                <StyledSelected.Option value="RL">RL</StyledSelected.Option>
                <StyledSelected.Option value="CL">CL</StyledSelected.Option>
                <StyledSelected.Option value="IL">IL</StyledSelected.Option>
                <StyledSelected.Option value="IL+">IL+</StyledSelected.Option>
              </StyledSelected>
            </Div>
            <Div margin="0 3rem">
              <Title>Material type</Title>
              <StyledRadioGroup>
                <Div display="flex" margin="1rem 0rem">
                  <StyledRadioButton value="Structural">
                    Structural
                  </StyledRadioButton>
                  <StyledRadioButton value="Non-Structural">
                    Non-Structural
                  </StyledRadioButton>
                </Div>
              </StyledRadioGroup>
            </Div>
            <Div margin="0 3rem">
              <Title>Material type</Title>
              <StyledRadioGroup>
                <Div display="flex" margin="1rem 0rem">
                  <StyledRadioButton value="matricTonnes">
                    Metric Tonnes
                  </StyledRadioButton>
                  <StyledRadioButton value="Non-Structural">
                    m<sup>3</sup>
                  </StyledRadioButton>
                </Div>
              </StyledRadioGroup>
            </Div>
            <Div margin="0 3rem">
              <CustomInput
                type="number"
                padding="0.6rem"
                margin="2rem 0 0 0"
                bgColor="white"
                borderColor="white"
                radius="4px"
                placeholder="00,00"
              />
            </Div>
          </Div>
        ))}
        <CustomButton  variant="outlined" onClick={addElement}>Add More</CustomButton>
      </div>
    </>
  );
};

export default Form;
