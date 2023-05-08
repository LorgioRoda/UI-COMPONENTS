import { cx, css } from '@emotion/css'
import * as React from 'react';

interface ButtonProps {
  bgColor?: string,
  color?: string,
  borderRadius?: string,
  width?: string,
  height?: string,
  colorHover?: string,
  bgColorHover?: string,
  className?: string
}

const buttonStyles = (bgColor, color, width, height, bgColorHover, colorHover, borderRadius) => css`
  background-color: ${bgColor};
  color: ${color};
  border-radius: ${borderRadius || "8px" };
  width: ${width || "150px"};
  height: ${height || "40px"};
  text-align: center;
  &:hover{
    background-color: ${bgColorHover};
    color: ${colorHover};
  }
`

const Button = ({...props}: ButtonProps) => {
  const {
    className,
    bgColor,
    color,
    width,
    height,
    bgColorHover,
    colorHover,
    borderRadius } = props;
  return (
    <button
      type="button"
      className={cx(buttonStyles(bgColor, color, width, height, bgColorHover, colorHover, borderRadius), className)}
      />
  )
}

export default Button;