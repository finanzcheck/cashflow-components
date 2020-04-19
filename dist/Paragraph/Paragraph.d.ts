import { FunctionComponent, ReactNode } from 'react';
import { ThemeProps } from '../withTheme/theme/Theming';
declare type ParagraphProps = {
    children: ReactNode;
};
declare const Paragraph: FunctionComponent<ParagraphProps & ThemeProps>;
export default Paragraph;
