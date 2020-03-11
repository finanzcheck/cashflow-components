import React from 'react';
import { css } from '@emotion/core';

import { h1Style } from './Headline1.style';
// import { H1Styled } from './Headline1.style';

type HeadlineProps = {
  children: any;
};

// const Headline1 = ({ children }: HeadlineProps) => (
//   <h1
//     css={css`
//       ${h1Style};
//     `}
//   >
//     {children}
//   </h1>
// );

const Headline1 = ({ children }: HeadlineProps) => (
  <h1
    css={css`
      ${h1Style}
    `}
  >
    {children}
  </h1>
);

export default Headline1;
