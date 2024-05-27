import { useNavigate } from "react-router-dom";
import { listData } from "../../assets/data/HomeData";
import CustomButton from "../../components/common/CustomButton";

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-[#f2f1ec] w-full flex flex-col lg:flex-row justify-between">
        <div className="lg:mt-[61px] lg:ml-[201px] sm:mt-5 flex flex-col items-center lg:items-start">
          <img
            src="src/assets/images/image.png"
            className=" p-2 w-100 md:w-70 lg:w-80"
            alt="logo"
          />
          <div className="w-full lg:w-[535px] mt-8 lg:mt-14 text-center lg:text-left">
            <h1 className="text-xl lg:text-[42px] font-medium leading-[1.2] tracking-[-0.01em]">
              Welcome to GroundControl <br />
              Soil & Aggregate Platform
            </h1>
          </div>
          {/* LIST */}
          <div className="flex-col items-center justify-center p-4 sm:p-14 md:py-10 lg:p-0 lg:py-10 w-full lg:w-auto">
            {listData.map((item) => (
              <div
                key={item.id}
                className=" sm:flex w-full md:justify-around  md:space-y-5 lg:w-[535px] md:gap-4 lg:gap-0 space-x-4 items-center"
              >
                <div className="flex-shrink-0 flex flex-col justify-center text-center m-3 sm:m-5">
                  <div className="w-2 px-6 h-10 rounded-full flex justify-center items-center bg-[#1B8179]">
                    <h1 className="text-white font-bold text-xl lg:text-2xl">
                      {item.id}
                    </h1>
                  </div>
                </div>
                <div>
                  <h1 className="text-lg lg:text-[20px] font-medium leading-7 lg:leading-[34px]">
                    {item.heading}
                  </h1>
                  <p className="text-sm w-full text-justify lg:text-[16px] font-light leading-6 lg:leading-[24px]">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <CustomButton
            className="mb-10 lg:w-60 mt-8 md:w-1/3 p-6 flex justify-center items-center bg-[#F6D218] font-bold text-black hover:bg-[#d8c045]"
            onClick={() => navigate("/create-account")}
            size="large"
          >
            Create Account
          </CustomButton>
        </div>
        <div className="h-4 sm:h-full sm:w-full lg:w-auto flex flex-col items-center lg:items-end mt-8 lg:mt-0">
          <CustomButton
            onClick={() => navigate("/login")}
            size="large"

            className="flex justify-center items-center h-12 w-32 md:fixed md:bottom-4 lg:bottom-auto lg:top-5 right-4 lg:right-12 z-20 bg-transparent border border-green-700 text-green-700 "
          >
            Login
          </CustomButton>
          <img
            src="src/assets/images/homeImage.png"
            alt="homeImage"
            className="w-full lg:h-screen mt-8 lg:mt-0 object-cover lg:object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
