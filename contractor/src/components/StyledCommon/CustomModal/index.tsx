import React, { ReactNode } from "react";
import { Modal as AntdModal, Button } from "antd";
import styled from "styled-components";

interface CustomModalProps {
  open: boolean;
  onOk: () => void;
  onCancel: () => void;
  children: ReactNode;
  margin?: string;
  padding?: string;
  height?: string;
  width?: string;
  backgroundColor?: string;
  color?: string;
  border?: string;
  radius?: string;
  okText?: string;
  cancelText?: string;
  showOkButton?: boolean;
  showCancelButton?: boolean;
}

const StyledModal = styled(AntdModal)<CustomModalProps>`
  .ant-modal-content {
    margin: ${(props) => props.margin || "0"};
    padding: ${(props) => props.padding || "24px"};
    height: ${(props) => props.height || "auto"};
    width: ${(props) => props.width || "520px"};
    background-color: ${(props) => props.backgroundColor || "#fff"};
    color: ${(props) => props.color || "rgba(0, 0, 0, 0.85)"};
    border: ${(props) => props.border || "none"};
    border-radius: ${(props) => props.radius || "2px"};
  }
`;

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onOk,
  onCancel,
  children,
  margin,
  padding,
  height,
  width,
  backgroundColor,
  color,
  border,
  radius,
  okText,
  cancelText,
  showOkButton = true,
  showCancelButton = true,
}) => {
  return (
    <StyledModal
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      footer={[
        showCancelButton && (
          <Button key="back" onClick={onCancel}>
            {cancelText || "Cancel"}
          </Button>
        ),
        showOkButton && (
          <Button key="submit" type="primary" onClick={onOk}>
            {okText || "OK"}
          </Button>
        ),
      ]}
      margin={margin}
      padding={padding}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      border={border}
      radius={radius}
    >
      {children}
    </StyledModal>
  );
};

export default CustomModal;
