import React from 'react';

import { H1Styled } from './Headline1.style';

type HeadlineProps = {
  children: any;
};

const Headline1 = ({ children }: HeadlineProps) => (
  <H1Styled>{children}</H1Styled>
);

export default Headline1;
