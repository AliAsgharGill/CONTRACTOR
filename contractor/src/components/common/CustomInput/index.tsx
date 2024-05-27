import React from "react";
import { Input, Form } from "antd";
import classNames from "classnames";

interface CustomInputProps {
  type?: string;
  name?: string;
  id?: string;
  label?: string;
  helperText?: string;
  placeholder?: string;
  errorMessage?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({
  type = "text",
  name,
  id,
  label,
  helperText,
  placeholder,
  errorMessage,
  className,
  value,
  onChange,
}) => {
  return (
    <Form.Item
      label={label}
      help={helperText}
      validateStatus={errorMessage ? "error" : ""}
      extra={errorMessage}
      className={className}
    >
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNames("custom-input", className)}
      />
      <p className="text-green-500 mt-10" >{errorMessage}</p>
    </Form.Item>
  );
};

export default CustomInput;

// import React, { CSSProperties } from "react";
// import {
//   Input,
//   InputNumber,
//   Checkbox,
//   Radio,
//   Select,
//   DatePicker,
//   TimePicker,
//   Tooltip,
//   Upload,
//   Slider,
// } from "antd";
// import { UploadOutlined } from "@ant-design/icons";
// import { InputProps, TextAreaProps } from "antd/lib/input";
// import { CheckboxProps } from "antd/lib/checkbox";
// import { RadioGroupProps } from "antd/lib/radio";
// import { SelectProps } from "antd/lib/select";
// import { DatePickerProps } from "antd/lib/date-picker";
// import { TimePickerProps } from "antd/lib/time-picker";
// import { UploadProps } from "antd/lib/upload";
// import { SliderSingleProps } from "antd/lib/slider";
// import { countries } from "../../../pages/CreateAccount/formFields";

// const { TextArea } = Input;
// const { Option } = Select;

// interface OptionType {
//   value: string | number;
//   label: string;
// }

// interface CustomInputProps {
//   type: string;
//   label?: string;
//   name: string;
//   value?: string | number | null;
//   onChange: (e: React.ChangeEvent<HTMLInputElement> | any) => void;
//   options?: OptionType[];
//   placeholder?: string;
//   checked?: boolean;
//   className?: string;
//   onHover?: () => void;
//   style?: CSSProperties;
//   tooltip?: string;
// }

// const CustomInput: React.FC<CustomInputProps> = ({
//   type = "text",
//   label,
//   name,
//   value,
//   onChange,
//   options = [],
//   placeholder = "",
//   checked,
//   className = "",
//   onHover,
//   style,
//   tooltip,
//   ...rest
// }) => {
//   const handleChange = (value: any) => {
//     onChange({ target: { name, value } });
//   };

//   const renderInput = () => {
//     switch (type) {
//       case "select":
//         return (
//           <Select
//             id={name}
//             name={name}
//             value={value}
//             onChange={handleChange}
//             placeholder={placeholder}
//             className={className}
//             style={style}
//             {...(rest as SelectProps)}
//           >
//             {countries.map((option) => (
//               <Option key={option.value} value={option.value}>
//                 {option.label}
//               </Option>
//             ))}
//           </Select>
//         );
//       case "textarea":
//         return (
//           <TextArea
//             id={name}
//             name={name}
//             value={value}
//             onChange={onChange}
//             placeholder={placeholder}
//             className={className}
//             style={style}
//             {...(rest as TextAreaProps)}
//           />
//         );
//       case "number":
//         return (
//           <InputNumber
//             id={name}
//             name={name}
//             value={value}
//             onChange={handleChange}
//             placeholder={placeholder}
//             className={className}
//             style={style}
//             {...(rest as InputProps)}
//           />
//         );
//       case "checkbox":
//         return (
//           <Checkbox
//             id={name}
//             name={name}
//             checked={checked}
//             onChange={(e) => handleChange(e.target.checked)}
//             className={className}
//             style={style}
//             {...(rest as CheckboxProps)}
//           >
//             {label}
//           </Checkbox>
//         );
//       case "radio":
//         return (
//           <Radio.Group
//             id={name}
//             name={name}
//             value={value}
//             onChange={(e) => handleChange(e.target.value)}
//             className={className}
//             style={style}
//             {...(rest as RadioGroupProps)}
//           >
//             {options.map((option) => (
//               <Radio key={option.value} value={option.value}>
//                 {option.label}
//               </Radio>
//             ))}
//           </Radio.Group>
//         );
//       case "date":
//         return (
//           <DatePicker
//             id={name}
//             name={name}
//             value={value as any}
//             onChange={(date) => handleChange(date)}
//             placeholder={placeholder}
//             className={className}
//             style={style}
//             {...(rest as DatePickerProps)}
//           />
//         );
//       case "time":
//         return (
//           <TimePicker
//             id={name}
//             name={name}
//             value={value as any}
//             onChange={(time) => handleChange(time)}
//             placeholder={placeholder}
//             className={className}
//             style={style}
//             {...(rest as TimePickerProps)}
//           />
//         );
//       case "file":
//         return (
//           <Upload
//             name={name}
//             onChange={handleChange}
//             className={className}
//             style={style}
//             {...(rest as UploadProps)}
//           >
//             <Button icon={<UploadOutlined />}>Upload File</Button>
//           </Upload>
//         );
//       case "color":
//         return (
//           <Input
//             type="color"
//             id={name}
//             name={name}
//             value={value}
//             onChange={onChange}
//             className={className}
//             style={style}
//             {...(rest as InputProps)}
//           />
//         );
//       case "range":
//         return (
//           <Slider
//             id={name}
//             value={value as number}
//             onChange={handleChange}
//             className={className}
//             style={style}
//             {...(rest as SliderSingleProps)}
//           />
//         );
//       default:
//         return (
//           <Input
//             type={type}
//             id={name}
//             name={name}
//             value={value}
//             onChange={onChange}
//             placeholder={placeholder}
//             className={className}
//             style={style}
//             {...(rest as InputProps)}
//           />
//         );
//     }
//   };

//   return (
//     <div className="custom-input" onMouseEnter={onHover}>
//       {type !== "checkbox" && label && (
//         <label htmlFor={name}>
//           {tooltip ? (
//             <Tooltip title={tooltip}>
//               <span>{label}</span>
//             </Tooltip>
//           ) : (
//             label
//           )}
//         </label>
//       )}
//       {renderInput()}
//     </div>
//   );
// };

// export default CustomInput;
