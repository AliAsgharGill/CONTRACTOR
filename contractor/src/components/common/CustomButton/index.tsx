import React from 'react';
import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import classNames from 'classnames';


type Variant = 'primary' | 'secondary' | 'success' | 'danger';
type Size = 'small' | 'medium' | 'large';


interface CustomButtonProps extends AntButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

const Sizes: Record<Size, string> = {
  small: 'px-2 py-2 text-sm',
  medium: 'px-4 py-4 text-base',
  large: 'px-6 py-6 text-lg',
};

const Variants: Record<Variant, string> = {
  primary: 'bg-[#F6D218] hover:bg-blue-700 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
  success: 'bg-green-500 hover:bg-green-700 text-white',
  danger: 'bg-red-500 hover:bg-red-700 text-white',
};

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  className,
  children,
  ...props
}) => {
  const classes = classNames(
    Sizes[size],
    Variants[variant],
    className
  );

  return (
    <AntButton className={classes} {...props}>
      {children}
    </AntButton>
  );
};

export default CustomButton;
