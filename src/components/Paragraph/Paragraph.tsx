import React, { FunctionComponent, ReactNode } from 'react';

import { StyledP } from './Paragraph.style';
import { ThemeProps } from '../withTheme/theme/Theming';

type ParagraphProps = {
  children: ReactNode;
};

// typescript gives presudo security about types as here could be passed anything not only those two!!!
const Paragraph: FunctionComponent<ParagraphProps & ThemeProps> = ({
  children,
  ...restProps
}) => <StyledP {...restProps}>{children}</StyledP>;

export default Paragraph;
