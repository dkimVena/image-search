import React, { memo, useEffect } from 'react';
import Container from './Container';

interface Props {
  children: any;
}

function Layout(props: Props): JSX.Element {
  const { children } = props;

  return <Container>{children}</Container>;
}

export default memo(Layout);
