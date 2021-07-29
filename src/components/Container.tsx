import React, { memo } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

interface Props {
  children: any;
  type?: 'small' | 'default';
  className?: string;
}

function Container(props: Props): JSX.Element {
  const { children, type = 'default', className, ...rest } = props;
  return (
    <StyledContainer className={cn(className, type)} {...rest}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0 auto;

  &.small {
    max-width: 450px;
  }
  &.default {
    max-width: 70%;
  }
`;

export default memo(Container);
