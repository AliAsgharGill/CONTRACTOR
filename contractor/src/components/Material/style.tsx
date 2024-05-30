import { Select as AntdSelect, Radio as AntdRadio } from "antd";
import styled from "styled-components";

export const StyledSelected = styled(AntdSelect)`
  width: 22rem;
  border-radius: 4px;
  height: 3rem;
`;

export const StyledRadioGroup = styled(AntdRadio.Group)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: #606060;
`;

export const StyledRadioButton = styled(AntdRadio)`
  .ant-radio-inner {
    border-color: #606060;
    width: 1.2rem;
    height: 1.2rem;
}   
.ant-radio-checked .ant-radio-inner {
    background-color: #0a5f59;
  }
  .ant-radio-wrapper:hover .ant-radio .ant-radio-inner {
    border-color: #0a5f59;
  }
`;
