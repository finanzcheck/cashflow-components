# cashflow-components

Shared frontend react components

## BIT

### Setup Docs

https://docs.bit.dev/docs/tutorials/bit-react-tutorial

### Add Component

```
yarn bit add src/components/[component-folder]
```

### Component Status

```
yarn bit status
```

### Build Component

```
yarn bit build
```

More about the typescript compiler here https://bit.dev/bit/envs/compilers/typescript

### Tag and Export

Set a version to all tracked components, and export to this collection.

```
yarn bit tag --all 1.0.0
yarn bit export marcelstieber.cashflow-components
```

NOTE: at the moment the repo is bound to the wrong account

### Handle Global Types

https://docs.bit.dev/docs/ts-guidelines#global-types

### Testing

https://bit.dev/bit/envs/testers/jest

### Best Practives

https://docs.bit.dev/docs/best-practices.html

### Analytics

https://docs.bit.dev/docs/conf-analytics

**opt out from analytics later**

```
yarn bit config set analytics_reporting false
yarn bit config set error_reporting false
```

## Emotion CSS-in-JS

https://emotion.sh/docs/introduction

### Usage of CSS

```
/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { h1Style } from '@bit/marcelstieber.cashflow-components.headline1';

export default (
	<h1 css={css(h1Style)}>{children}</h1>
)
```

It seems `@emotion/styled` (?) is smaller than `@emotion/core` (18K)

### Links

typescript guide: https://docs.bit.dev/docs/ts-guidelines#global-types
quick start: https://docs.bit.dev/docs/quick-start

## Design Tokens

Design tokens are indivisible pieces of an interface like colors, font-sizes, spaces, animations, shadows, z-indexes, breakpoints and so on… These central and tiny pieces of UI information will be used across several platform during the conception of a digital product. They’re called: design tokens.

Design tokens could also be used for branding/theming for customers, and configurable settings-based theming like “dark/night mode” or “comfortable/compact” spacing changes.

### Theo

[Theo](https://github.com/salesforce-ux/theo) is a degsign tolekn generator by Salesforce. It takes JSON or YAML and outputs CSS, SASS, XML, JSON (whatever the platform needs).

Link: https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71
