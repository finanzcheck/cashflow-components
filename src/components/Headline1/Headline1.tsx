import React, { FunctionComponent, ReactNode } from 'react';

import { H1Styled } from './Headline1.style';
import { ThemeProps } from '../withTheme/theme/Theming';

type HeadlineProps = {
  children: ReactNode;
};

const Headline1: FunctionComponent<HeadlineProps & ThemeProps> = ({
  children,
  ...restProps
}) => <H1Styled {...restProps}>{children}</H1Styled>;

export default Headline1;
