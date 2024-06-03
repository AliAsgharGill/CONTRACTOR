import { ChangeEvent, useState } from "react";
import { Select as AntdSelect } from "antd";
import {
  DashedHR,
  SolidHR,
  StyledRadioButton,
  StyledRadioGroup,
  StyledSelected,
} from "./style";
import Div from "../StyledCommon/Global/Div";
import Title from "../StyledCommon/Global/Title";
import CustomInput from "../StyledCommon/CustomInput";
import CustomButton from "../StyledCommon/ButtonStyled/ButtonStyled";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import CustomTextArea from "../StyledCommon/Textarea";
import CustomModal from "../StyledCommon/CustomModal";
import Spacer from "../StyledCommon/Global/Spacer";
import axios from "axios";

const { Option } = AntdSelect;

const Form = () => {
  const [visible, setVisible] = useState(false);
  const [elements, setElements] = useState([
    {
      materialName: "RL",
      materialType: "Structural",
      amountType: "metricTonnes",
      quantity: "",
    },
  ]);

  const [specialRequest, setSpecialRequest] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const addElement = () => {
    setElements([
      ...elements,
      {
        materialName: "RL",
        materialType: "Structural",
        amountType: "metricTonnes",
        quantity: "",
      },
    ]);
  };

  const handleInputChange = (index: number, field: string, value: string) => {
    const newElements = [...elements];
    newElements[index] = { ...newElements[index], [field]: value };
    setElements(newElements);
  };

  const handleSpecialRequestChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSpecialRequest(e.target.value);
  };

  const handleNotesChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.type === "application/pdf") {
        setFile(selectedFile);
      } else {
        alert("Please upload a PDF file.");
      }
    }
  };

  const handleFormSubmit = async () => {
    await axios.post("http://localhost:3000/requests", {
      elements,
      specialRequest,
      notes,
      file: file?.name,
    });
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
      <Div>
        <div>
          {elements.map((element, index) => (
            <Div display="flex" margin="1.5rem 0 0 0" key={index}>
              <Div>
                <Title>Material Name</Title>
                <StyledSelected
                  value={element.materialName}
                  onChange={(value) =>
                    handleInputChange(index, "materialName", value)
                  }
                >
                  <Option value="AG">AG</Option>
                  <Option value="RL">RL</Option>
                  <Option value="CL">CL</Option>
                  <Option value="IL">IL</Option>
                  <Option value="IL+">IL+</Option>
                </StyledSelected>
              </Div>
              <Div margin="0 3rem">
                <Title>Material Type</Title>
                <StyledRadioGroup
                  value={element.materialType}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "materialType",
                      (e.target as HTMLInputElement).value
                    )
                  }
                >
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
                <Title>Material Amount</Title>
                <StyledRadioGroup
                  value={element.amountType}
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "amountType",
                      (e.target as HTMLInputElement).value
                    )
                  }
                >
                  <Div display="flex" margin="1rem 0rem">
                    <StyledRadioButton value="metricTonnes">
                      Metric Tonnes
                    </StyledRadioButton>
                    <StyledRadioButton value="cubicMeters">
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
                  value={element.quantity}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleInputChange(index, "quantity", e.target.value)
                  }
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
                  value={specialRequest}
                  onChange={handleSpecialRequestChange}
                />
              </Div>
              <Div margin="0 3rem">
                <Title>Material Type</Title>
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
                <Title>Material Amount</Title>
                <StyledRadioGroup>
                  <Div display="flex" margin="1rem 0rem">
                    <StyledRadioButton value="metricTonnes">
                      Metric Tonnes
                    </StyledRadioButton>
                    <StyledRadioButton value="cubicMeters">
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
              <CustomTextArea
                placeholder="Type notes"
                rows={7}
                value={notes}
                onChange={handleNotesChange}
              />
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
          <CustomInput
            type="file"
            hoverBgColor="transparent"
            accept="application/pdf"
            onChange={handleFileChange}
          />

          <CustomButton
            variant="secondary"
            width="20rem"
            padding=" 0.8rem 1.5rem "
            radius="0.2rem"
            margin="4rem  0"
            fontSize="1.4rem"
            fontWeight="500"
            onClick={handleFormSubmit}
          >
            Submit A Request
          </CustomButton>
        </Div>
      </Div>
      {visible && (
        <CustomModal
          open={visible}
          onOk={handleOk}
          onCancel={handleCancel}
          margin="1.3rem"
          padding="40px"
          height="45rem"
          width="33rem"
          backgroundColor="#f0f0f0"
          color="#000"
          radius="10px"
          okText="Confirm"
          cancelText="Close"
          showCancelButton={false}
          showOkButton={false}
        >
          <Title
            padding="1rem 0"
            fontSize="1.5rem"
            fontWeight="600"
            textAlign="center"
          >
            Congrats, your request is <br /> successfully sent.
          </Title>

          <Div margin=" 0 0 1rem 0">
            <SolidHR color="#606060" />
          </Div>
          <Title padding="1rem 0" fontSize="1.2rem" fontWeight="600">
            Additional Instruction:
          </Title>
          <Title>
            <b>
              Soils are identified as meeting all analytical criteria under CSR
              = Contaminated Site Regulations Schedule 3.1
            </b>
            <Spacer height="2rem" />
            Soil is to be retested at Jackman.
            <Spacer height="2rem" />
            Soil sampled by H3M Consulting and analyzed by Soil authorized
            deposition at our Jackman Lnad dile location. The site has no
            assigned address as of now, but the driveway access is attached to
            <b>1030 272 St. V4W 2M7 Aldergrove, B.C.</b>
            <Spacer height="2rem" />
            Township of Langley Approved Soil Deposite site. All soil must be
            pre-approved.
            <Spacer height="2rem" />
            <b>All soil must be pre approved</b>
          </Title>
          <Div display="flex" alignItems="center" justifyContent="center">
            <CustomButton
              variant="secondary"
              width="30%"
              fontWeight="500"
              fontSize="1.2rem"
              margin="2rem 0"
              onClick={handleOk}
            >
              ok
            </CustomButton>
          </Div>
        </CustomModal>
      )}
    </>
  );
};

export default Form;
