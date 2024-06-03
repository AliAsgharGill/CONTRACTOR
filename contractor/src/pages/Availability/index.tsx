import { MainDivAside } from "../../components/StyledCommon/Global";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Div from "../../components/StyledCommon/Global/Div";
import Title from "../../components/StyledCommon/Global/Title";
import { SolidHR } from "../../components/Material/style";
import WeekdayAndDatePicker from "../../components/StyledCommon/Global/WeekdayAndDatePicker";
import { BiFilter } from "react-icons/bi";
import { Slider } from "antd";
import CustomInput from "../../components/StyledCommon/CustomInput";
import CustomButton from "../../components/StyledCommon/ButtonStyled/ButtonStyled";
import { useNavigate } from "react-router-dom";

const Availability = () => {
  const navigate = useNavigate();

  const marks = {
    0: "Empty",
    50: "Half",
    100: "Full",
  };

  return (
    <>
      <MainDivAside>
        <Div display="flex" width="100%">
          <Div
            backgroundColor="#E0DED9"
            width="32rem"
            height="90vh"
            display="flex"
            flexDirection="column"
          >
            <Div
              margin="2.5rem 0"
              padding="1rem"
              display="flex"
              alignItems="centers"
              onClick={() => window.history.back()}
              width="100%"
            >
              <IoArrowBackCircleOutline size="2.5rem" fill="#0a5f59" />
              <Title fontSize="1.5rem" padding="0 0 0 1rem">
                Jackman file site
              </Title>
            </Div>
            <SolidHR />
            <Div display="flex" flexDirection="column" padding="1.5rem">
              <Title fontWeight={500} fontSize="20px">
                Address:
              </Title>
              <Title fontSize="18px" margin="1rem 0" color="#7c7878">
                12671 New Halls Ferry Rd; Florissant, Mississippi, 63033 US{" "}
              </Title>
              <Title fontWeight={500} fontSize="20px">
                Max allowable trucks per day:
              </Title>
              <Title fontSize="18px" margin="1rem 0" color="#7c7878">
                4
              </Title>
              <Title fontWeight={500} fontSize="20px">
                Max allowable loads per day:
              </Title>
              <Title fontSize="18px" margin="1rem 0" color="#7c7878">
                12
              </Title>
              <Title fontWeight={500} fontSize="20px">
                CSR acceptance
              </Title>
              <Title fontSize="18px" margin="1rem 0" color="#7c7878">
                IL
              </Title>
            </Div>
          </Div>
          <Div
            display="flex"
            alignItems="space-between"
            width="100%"
            flexDirection="column"
          >
            <Div display="flex" justifyContent="space-between" width="100%">
              <Title
                fontSize="2em"
                fontWeight="600"
                margin="3rem 0 1.5rem 5rem"
              >
                Availability
              </Title>
              <Div display="flex" alignItems="center" margin="1rem 2rem 0 0">
                <BiFilter size="2.5rem" fill="#0a5f59" fontSize={"2.5rem"} />
                <WeekdayAndDatePicker />
              </Div>
            </Div>
            <Div display="flex" justifyContent="center" alignItems="center">
              <Div
                display="flex"
                flexDirection="column"
                height="40rem"
                width="55rem"
                backgroundColor="white"
                borderRadius="11px"
              >
                <Div
                  display="flex"
                  height="3rem"
                  alignItems="center"
                  width="100%"
                  padding="4rem 0 2.8rem 3rem"
                >
                  <Title
                    padding="1rem"
                    fontSize="3rem"
                    fontWeight="900"
                    color="#0a5f59"
                  >
                    16
                  </Title>
                  <Title fontSize="2rem" margin="0 0 0 5rem">
                    Trucks Left
                  </Title>
                </Div>
                {/* Hr Line */}
                <SolidHR />
                {/* Slider */}
                <Div padding="3rem">
                  <Slider
                    step={50}
                    defaultValue={50}
                    marks={marks}
                    className="custom-slider"
                  />
                </Div>
                {/* List */}
                <Div backgroundColor="white" padding="2rem" borderRadius="7px">
                  <Div display="flex" padding="1rem 0 1rem  1.5rem">
                    <Title fontWeight="500" fontSize="1.3rem">
                      {" "}
                      Material / material amount:
                    </Title>
                    <Title fontSize="1.3rem" padding="0 0 0 0.8rem">
                      {" "}
                      6
                    </Title>
                  </Div>
                  <SolidHR />

                  <Div display="flex" padding="1rem 0 1rem  1.5rem">
                    <Title fontWeight="500" fontSize="1.3rem">
                      {" "}
                      Number of rounds the trucks are expected to do total:
                    </Title>
                    <Title fontSize="1.3rem" padding="0 0 0 0.8rem">
                      {" "}
                      32
                    </Title>
                  </Div>
                  <SolidHR />

                  <Div display="flex" padding="1rem 0 1rem  1.5rem">
                    <Title fontWeight="500" fontSize="1.3rem">
                      {" "}
                      Approximate time that they will enter site:
                    </Title>
                    <Title fontSize="1.2rem" padding="0 0 0 0.8rem">
                      {" "}
                      8:00 AM
                    </Title>
                  </Div>
                  <SolidHR />

                  <Div display="flex" padding="1rem 0 1rem  1.5rem">
                    <Title fontWeight="500" fontSize="1.3rem">
                      {" "}
                      Configuration of trucks we can accept:
                    </Title>
                    <Title fontSize="1.2rem" padding="0 0 0 0.8rem">
                      {" "}
                      Dump Truck, Small Truck, Truck with Trailer
                    </Title>
                  </Div>
                  <SolidHR />

                  <Div
                    display="flex"
                    flexDirection="column"
                    padding="1rem 0 1rem  1.5rem"
                    width="100%"
                  >
                    <Title fontWeight="500" fontSize="1.3rem">
                      {" "}
                      Enter the number of trucks you would like to book:{" "}
                    </Title>
                    <Div
                      display="flex"
                      justifyContent="sapce-between"
                      margin="0.5rem 0"
                    >
                      <CustomInput
                        bgColor="#F2F0EC"
                        width="35rem"
                        type="number"
                        padding="2rem full"
                        placeholder="46"
                      />{" "}
                      <CustomButton
                        variant="secondary"
                        fontSize="20px"
                        fontWeight="bold"
                        margin="0 0 0 1rem"
                        padding="1rem 5rem"
                        onClick={() => navigate("/authorization")}
                      >
                        Book
                      </CustomButton>
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </MainDivAside>
    </>
  );
};

export default Availability;
