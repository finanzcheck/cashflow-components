import React from 'react';

import { StyledP } from './Praragraph.style';

type ParagraphProps = {
  children: any;
};

export const Paragraph = ({ children }: ParagraphProps) => (
  <StyledP>{children}</StyledP>
);
