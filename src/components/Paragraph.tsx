import React, { memo } from 'react';
import cn from 'classnames';
import styled from 'styled-components';
import theme from '../theme';

interface Props {
  size: 1 | 2 | 3 | 4;
  children: any;
  weight?: 400 | 500 | 600;
  className?: string;
  upperCase?: boolean;
  align?: 'left' | 'center' | 'right';
  themeColor?: keyof typeof theme.colors;
  onClick?: React.MouseEventHandler;
  margin?: string;
}

function Paragraph(props: Props): JSX.Element {
  const {
    children,
    className,
    size = 2,
    weight,
    upperCase,
    align,
    themeColor,
    onClick,
    margin = '',
    ...rest
  } = props;
  const componentClassName = cn(
    className,
    size && `size_${size}`,
    weight && `weight_${weight}`,
    align && `align_${align}`,
    upperCase && 'uppercase',
  );
  const componentStyle = {
    ...(themeColor ? { color: theme.colors[themeColor] } : {}),
    margin: margin || 'initial',
  };
  return (
    <StyledParagraph
      className={componentClassName}
      style={componentStyle}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledParagraph>
  );
}

const StyledParagraph = styled.p`
  font-size: 14px;
  color: ${theme.colors.text};

  &.size_1 {
    font-size: 16px;
  }
  &.size_2 {
    font-size: 14px;
  }
  &.size_3 {
    font-size: 12px;
  }
  &.size_4 {
    font-size: 10px;
  }
  &.weight_400 {
    font-weight: 400;
  }
  &.weight_500 {
    font-weight: 500;
  }
  &.weight_600 {
    font-weight: 600;
  }
  &.align_left {
    text-align: left;
  }
  &.align_center {
    text-align: center;
  }
  &.align_right {
    text-align: right;
  }
  &.uppercase {
    text-transform: uppercase;
  }
`;

export default memo(Paragraph);
