import React, { createElement } from "react";

import { DEFAULT_THEME } from "./theme/themes/defaultTheme";

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || "Component";

export const withTheme = BaseComponent => {
  const WithTheme = props => {
    const { theme, ...restProps } = props;

    return createElement(
      BaseComponent,
      { theme: { ...DEFAULT_THEME, ...theme }, ...restProps },
      props.children
    );
  };

  WithTheme.displayName = `withOffers(${getDisplayName(BaseComponent)})`;
};
