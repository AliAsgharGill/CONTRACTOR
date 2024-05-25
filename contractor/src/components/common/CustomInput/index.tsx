import React, { useState } from 'react';
import { Input } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

type CustomInputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  type?: string;
  name?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  onChange,
  placeholder = '',
  className,
  type = 'text',
  name,
}) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType((prevType) => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <div className={`custom-input-wrapper ${className}`}>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={inputType}
        name={name}
        suffix={
          type === 'password' && (
            inputType === 'password' ? (
              <EyeInvisibleOutlined onClick={togglePasswordVisibility} />
            ) : (
              <EyeTwoTone onClick={togglePasswordVisibility} />
            )
          )
        }
      />
    </div>
  );
};

export default CustomInput;
