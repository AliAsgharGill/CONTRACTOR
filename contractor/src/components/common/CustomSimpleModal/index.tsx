import React from "react";
import { Modal } from "antd";

interface CustomSimpleModalProps {
  visible: boolean;
  title: string;
  description: string;
  onOk: () => void;
  className?: string;
}

const CustomSimpleModal: React.FC<CustomSimpleModalProps> = ({
  visible,
  title,
  description,
  onOk,
  className,
}) => {
  return (
    <Modal
      open={visible}
      title={title}
      onOk={onOk}
      okText="OK"
      className={className}
    >
      <p>{description}</p>
    </Modal>
  );
};

export default CustomSimpleModal;
