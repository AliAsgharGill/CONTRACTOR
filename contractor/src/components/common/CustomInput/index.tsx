import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
import classNames from 'classnames';

interface CustomProps {
  variant?: 'default' | 'filled' | 'outlined';
  size?: 'small' | 'medium' | 'large';
}

type CustomInputProps = CustomProps & AntInputProps;

const variantClasses = {
  default: 'border border-gray-200',
  filled: 'bg-gray-100 border border-gray-200',
  outlined: 'border border-gray-400',
};

const sizeClasses = {
  small: 'p-1 text-sm',
  medium: 'p-2 text-base',
  large: 'p-3 text-lg',
};

const Input: React.FC<CustomInputProps> = ({ variant = 'default', size = 'medium', className, ...props }) => {
  const variantClass = variantClasses[variant!];
  const sizeClass = sizeClasses[size!];

  const classes = classNames(variantClass, sizeClass, className);

  return <AntInput className={classes} {...props} />;
};

export default Input;
