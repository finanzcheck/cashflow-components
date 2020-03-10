import React from 'react';

import { StyledP } from './Praragraph.style';

type ParagraphProps = {
  children: any;
};

const Paragraph = ({ children }: ParagraphProps) => (
  <StyledP>{children}</StyledP>
);

export default Paragraph;
