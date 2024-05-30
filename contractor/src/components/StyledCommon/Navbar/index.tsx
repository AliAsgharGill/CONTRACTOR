import CustomButton from "../ButtonStyled/ButtonStyled";
import { ImageDiv, NameDiv, NavbarDiv, SmallTitle, Title } from "./style";
import Img from "../Global/Img";

interface NavbarProps {
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onLogout }) => {
  return (
    <>
      <NavbarDiv>
        <ImageDiv>
          <Img
            src="src/assets/images/userImage.png"
            alt="userImage"
            width="3.5em"
            objectFit="cover"
          />
          <NameDiv>
            <Title>Jose D. Powell</Title>
            <SmallTitle>Contractor</SmallTitle>
          </NameDiv>
        </ImageDiv>
        <CustomButton
          variant="outlined"
          padding="0.5em 2em"
          radius="4px"
          onClick={onLogout}
        >
          Log Out
        </CustomButton>
      </NavbarDiv>
    </>
  );
};

export default Navbar;
