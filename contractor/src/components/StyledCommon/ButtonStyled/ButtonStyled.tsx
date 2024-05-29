import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "default" | "custom";
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
}

const getButtonStyles = (props: CustomButtonProps) => {
  switch (props.variant) {
    case "primary":
      return {
        background: props.bgColor || "#0A5F59",
        color: props.textColor || "white",
        border: props.borderColor || "none",
        padding: props.padding || "0.5em 1em",
        fontSize: props.fontSize || "1em",
        fontWeight: props.fontWeight || "500",
        radius: props.radius || "3px",
        hoverBgColor: props.hoverBgColor || "#084C47",
        hoverTextColor: props.hoverTextColor || "white",
        hoverBorderColor: props.hoverBorderColor || "none",
      };
    case "secondary":
      return {
        background: props.bgColor || "#F6D218",
        color: props.textColor || "black",
        border: props.borderColor || "none",
        padding: props.padding || "0.5em 1em",
        fontSize: props.fontSize || "1em",
        fontWeight: props.fontWeight || "700",
        radius: props.radius || "3px",
        hoverBgColor: props.hoverBgColor || "#DDB114",
        hoverTextColor: props.hoverTextColor || "black",
        hoverBorderColor: props.hoverBorderColor || "none",
      };
    case "default":
      return {
        background: props.bgColor || "white",
        color: props.textColor || "#000",
        border: props.borderColor || "1px solid #000",
        padding: props.padding || "0.5em 1em",
        fontSize: props.fontSize || "1em",
        fontWeight: props.fontWeight || "normal",
        radius: props.radius || "3px",
        hoverBgColor: props.hoverBgColor || "#f0f0f0",
        hoverTextColor: props.hoverTextColor || "#000",
        hoverBorderColor: props.hoverBorderColor ? "#000" : "none",
      };
    case "custom":
      return {
        background: props.bgColor || "white",
        color: props.textColor || "#000",
        border: props.borderColor || `1px solid ${props.borderColor || "#000"}`,
        padding: props.padding || "0.5em 1em",
        fontSize: props.fontSize || "1em",
        fontWeight: props.fontWeight || "normal",
        radius: props.radius || "3px",
        hoverBgColor: props.hoverBgColor || props.bgColor || "white",
        hoverTextColor: props.hoverTextColor || props.textColor || "#000",
        hoverBorderColor:
          props.hoverBorderColor || `1px solid ${props.borderColor || "#000"}`,
      };
    default:
      return {
        background: props.bgColor || "white",
        color: props.textColor || "#000",
        border: props.borderColor || "1px solid #000",
        padding: props.padding || "0.5em 1em",
        fontSize: props.fontSize || "1em",
        fontWeight: props.fontWeight || "normal",
        radius: props.radius || "3px",
        hoverBgColor: props.hoverBgColor || "#f0f0f0",
        hoverTextColor: props.hoverTextColor || "#000",
        hoverBorderColor: props.hoverBorderColor || "#000",
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
  ].includes(prop);

const CustomButton = styled.button.withConfig({
  shouldForwardProp: (prop) => shouldForwardProp(prop),
})<CustomButtonProps>`
  ${(props) => {
    const styles = getButtonStyles(props);
    return `
      background: ${styles.background};
      color: ${styles.color};
      border: ${styles.border};
      padding: ${styles.padding};
      font-size: ${styles.fontSize};
      font-weight: ${styles.fontWeight};
      border-radius: ${styles.radius};
      margin: 0.1em;
      transition: background 0.3s, color 0.3s, border 0.3s;

      &:hover {
        background: ${styles.hoverBgColor};
        color: ${styles.hoverTextColor};
        border: ${styles.hoverBorderColor};
      }
    `;
  }}
`;

export default CustomButton;
