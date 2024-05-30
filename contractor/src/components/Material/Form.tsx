import {
  DashedHR,
  SolidHR,
  StyledRadioButton,
  StyledRadioGroup,
  StyledSelected,
} from "./style";
import Div from "../StyledCommon/Global/Div";
import Title from "../StyledCommon/Global/Title";
import CustomInput from "../StyledCommon/InputStyled";
import { useState } from "react";
import CustomButton from "../StyledCommon/ButtonStyled/ButtonStyled";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CustomTextArea from "../StyledCommon/Textarea";

const Form = () => {
  const [elements, setElements] = useState([0]);

  const addElement = () => {
    setElements([...elements, elements.length]);
  };

  return (
    <>
      <Div>
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
            <Div display="flex" margin="1.5rem 0 0 0" key={index}>
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
          <CustomButton
            height="3rem"
            width="12rem"
            padding="1.5rem"
            margin="1rem 0 0 0"
            fontSize="1.4rem"
            postfixIcon={<MdOutlineAddCircleOutline />}
            variant="outlined"
            onClick={addElement}
          >
            Add More
          </CustomButton>

          {/* Dashed HR Line Code */}
          <Div margin=" 3rem 0 0 0">
            <DashedHR />
          </Div>

          {/* Special Request */}
          <Div>
            <Div display="flex" margin="1rem 0">
              <Div>
                <Title>Special Request</Title>
                <CustomInput
                  type="text"
                  padding="0.6rem"
                  margin="0.5rem 0 0 0"
                  bgColor="white"
                  borderColor="transparent"
                  radius="4px"
                  width="22rem"
                  placeholder="Enter Text"
                />
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
            <Div>
              <Title>Notes</Title>
              <CustomTextArea placeholder="Type notes" rows={7} />
            </Div>
          </Div>
        </div>
        {/* Solid Hr Line */}
        <Div margin="3rem 0">
          <SolidHR />
        </Div>
        <Div>
          <Title fontSize="2em" fontWeight="600" margin="3rem 0 1.5rem 0rem">
            Environmental/ geotechnical analytical data
          </Title>
          <CustomInput type="file" hoverBgColor="transparent" />
          <CustomButton
            variant="secondary"
            // height="3rem"
            width="20rem"
            padding=" 0.8rem 1.5rem "
            radius="0.2rem"
            margin="5rem 0 0 0"
            fontSize="1.4rem"
            onClick={addElement}
          >
            Add More
          </CustomButton>
        </Div>
      </Div>
    </>
  );
};

export default Form;
