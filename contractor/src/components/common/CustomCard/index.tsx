import React from 'react';
import { Card as AntCard, CardProps as AntCardProps } from 'antd';
import classNames from 'classnames';

interface CustomProps {
  variant?: 'basic' | 'outlined' | 'elevated';
  size?: 'small' | 'medium' | 'large';
}

type CustomCardProps = CustomProps & AntCardProps;

const variantClasses = {
  basic: 'border border-gray-200',
  outlined: 'border border-gray-400',
  elevated: 'shadow-lg',
};

const sizeClasses = {
  small: 'p-2',
  medium: 'p-4',
  large: 'p-6',
};

const Card: React.FC<CustomCardProps> = ({ variant = 'basic', size = 'medium', className, ...props }) => {
  const variantClass = variantClasses[variant!];
  const sizeClass = sizeClasses[size!];

  const classes = classNames(variantClass, sizeClass, className);

  return <AntCard className={classes} {...props} />;
};

export default Card;
