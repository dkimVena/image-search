import React, { memo, RefObject } from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import theme from '../theme';
import Paragraph from './Paragraph';

interface Props {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent) => void;
  type?: string;
  placeholder: string;
  ref?: RefObject<HTMLInputElement>;
  fluid?: boolean;
  className?: string;
  isError?: boolean;
  message?: string;
  name: string;
}

function TextInput(props: Props): JSX.Element {
  const {
    type = 'text',
    value,
    onChange,
    onKeyDown,
    placeholder,
    ref,
    fluid,
    className,
    isError,
    message,
    name,
    ...rest
  } = props;
  return (
    <>
      <StyledInput
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type={type}
        placeholder={placeholder}
        ref={ref}
        className={cn(className, fluid && 'fluid')}
        name={name}
        {...rest}
      />
      {isError && message && (
        <StyledErrorMessage themeColor="salmon" size={2}>
          {message}
        </StyledErrorMessage>
      )}
    </>
  );
}

const StyledInput = styled.input`
  font-size: 18px;
  border: none;
  border-bottom: 1px solid ${theme.colors.text};
  padding-bottom: 5px;
  padding: 0px 5px;

  &:focus {
    outline: none;
  }
  &.fluid {
    width: 100%;
  }
`;

const StyledErrorMessage = styled(Paragraph)`
  margin: 5px 0px;
`;

export default memo(TextInput);
