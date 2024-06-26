import styled from "styled-components";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface StyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "default" | "outlined" | "custom";
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  padding?: string;
  fontSize?: string;
  fontWeight?: string;
  radius?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;
  hoverBorderColor?: string;
  height?: string;
  width?: string;
  margin?: string;
  transitionDuration?: string;
  prefixIcon?: ReactNode;
  postfixIcon?: ReactNode;
}

const getButtonStyles = (props: StyledButtonProps) => {
  const defaultStyles = {
    padding: props.padding || "0.5em 1em",
    fontSize: props.fontSize || "1em",
    fontWeight: props.fontWeight || "normal",
    radius: props.radius || "3px",
    height: props.height || "auto",
    width: props.width || "auto",
    margin: props.margin || "0.1em",
    transitionDuration: props.transitionDuration || "0.3s",
  };

  switch (props.variant) {
    case "primary":
      return {
        background: props.bgColor || "#0A5F59",
        color: props.textColor || "white",
        border: props.borderColor || "none",
        hoverBgColor: props.hoverBgColor || "#084C47",
        hoverTextColor: props.hoverTextColor || "white",
        hoverBorderColor: props.hoverBorderColor || "none",
        ...defaultStyles,
      };
    case "outlined":
      return {
        background: props.bgColor || "transparent",
        color: props.textColor || "#0A5F59",
        border: props.borderColor || "1px solid #0A5F59",
        hoverBgColor: props.hoverBgColor || "#084C47",
        hoverTextColor: props.hoverTextColor || "white",
        hoverBorderColor: props.hoverBorderColor || "#0A5F59",
        ...defaultStyles,
      };
    case "secondary":
      return {
        background: props.bgColor || "#F6D218",
        color: props.textColor || "black",
        border: props.borderColor || "none",
        hoverBgColor: props.hoverBgColor || "#ddb114",
        hoverTextColor: props.hoverTextColor || "black",
        hoverBorderColor: props.hoverBorderColor || "none",
        ...defaultStyles,
      };
    case "default":
      return {
        background: props.bgColor || "white",
        color: props.textColor || "#000",
        border: props.borderColor || "1px solid #000",
        hoverBgColor: props.hoverBgColor || "#f0f0f0",
        hoverTextColor: props.hoverTextColor || "#000",
        hoverBorderColor: props.hoverBorderColor || "#000",
        ...defaultStyles,
      };
    case "custom":
      return {
        background: props.bgColor || "white",
        color: props.textColor || "#000",
        border: props.borderColor || `1px solid ${props.borderColor || "#000"}`,
        hoverBgColor: props.hoverBgColor || props.bgColor || "white",
        hoverTextColor: props.hoverTextColor || props.textColor || "#000",
        hoverBorderColor:
          props.hoverBorderColor || `1px solid ${props.borderColor || "#000"}`,
        ...defaultStyles,
      };
    default:
      return {
        background: props.bgColor || "white",
        color: props.textColor || "#000",
        border: props.borderColor || "1px solid #000",
        hoverBgColor: props.hoverBgColor || "#f0f0f0",
        hoverTextColor: props.hoverTextColor || "#000",
        hoverBorderColor: props.hoverBorderColor || "#000",
        ...defaultStyles,
      };
  }
};

const shouldForwardProp = (prop: string) =>
  ![
    "variant",
    "bgColor",
    "textColor",
    "borderColor",
    "padding",
    "fontSize",
    "fontWeight",
    "radius",
    "hoverBgColor",
    "hoverTextColor",
    "hoverBorderColor",
    "height",
    "width",
    "margin",
    "transitionDuration",
    "prefixIcon",
    "postfixIcon",
  ].includes(prop);

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<StyledButtonProps>`
  ${(props) => {
    const styles = getButtonStyles(props);
    return `
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${styles.background};
      color: ${styles.color};
      border: ${styles.border};
      padding: ${styles.padding};
      font-size: ${styles.fontSize};
      font-weight: ${styles.fontWeight};
      border-radius: ${styles.radius};
      height: ${styles.height};
      width: ${styles.width};
      margin: ${styles.margin};
      transition: background ${styles.transitionDuration}, color ${styles.transitionDuration}, border ${styles.transitionDuration};

      &:hover {
        background: ${styles.hoverBgColor};
        color: ${styles.hoverTextColor};
        border: ${styles.hoverBorderColor};
      }

      .icon {
        display: flex;
        align-items: center;
      }

      .prefix-icon {
        margin-right: 0.5em;
      }

      .postfix-icon {
        margin-left: 0.5em;
      }
    `;
  }}
`;

const CustomButton: React.FC<StyledButtonProps> = ({
  prefixIcon,
  postfixIcon,
  children,
  ...props
}) => (
  <StyledButton {...props}>
    {prefixIcon && <span className="icon prefix-icon">{prefixIcon}</span>}
    {children}
    {postfixIcon && <span className="icon postfix-icon">{postfixIcon}</span>}
  </StyledButton>
);

export default CustomButton;