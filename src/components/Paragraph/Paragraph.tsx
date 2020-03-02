import React from 'react';

import { StyledP } from './Praragraph.style';

type PraragraphProps = {
  children: any;
};

export const Paragraph = ({ children }: PraragraphProps) => (
  <StyledP>{children}</StyledP>
);
