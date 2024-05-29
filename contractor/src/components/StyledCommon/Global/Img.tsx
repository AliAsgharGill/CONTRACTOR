import React from "react";
import styled from "styled-components";

interface ImgProps {
  src: string;
  alt?: string;
  height?: string;
  width?: string;
  radius?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
}

const StyledImg = styled.img<ImgProps>`
  height: ${({ height }) => height || "auto"};
  width: ${({ width }) => width || "100%"};
  border-radius: ${({ radius }) => radius || "0"};
  object-fit: ${({ objectFit }) => objectFit || "cover"};
  display: block;
`;

const Img: React.FC<ImgProps> = ({
  src,
  alt,
  height,
  width,
  radius,
  objectFit,
  ...props
}) => {
  return (
    <StyledImg
      src={src}
      alt={alt || "image"}
      height={height}
      width={width}
      radius={radius}
      objectFit={objectFit}
      {...props}
    />
  );
};

export default Img;
