# cashflow-components

Shared frontend react components

## setup docs

https://docs.bit.dev/docs/tutorials/bit-react-tutorial

## BIT

### add component

```
yarn bit add src/components/[component-folder]
```

### component statuy

```
yarn bit status
```

## build component

```
yarn bit build
```

More about the typescript compiler here https://bit.dev/bit/envs/compilers/typescript

## tag and export

Set a version to all tracked components, and export to this collection.

```
yarn bit tag --all 1.0.0
yarn bit export marcelstieber.cashflow-components
```

NOTE: at the moment the repo is bound to the wrong account

## handle global types

https://docs.bit.dev/docs/ts-guidelines#global-types

## testing

https://bit.dev/bit/envs/testers/jest

### best practives

https://docs.bit.dev/docs/best-practices.html

### analytics

https://docs.bit.dev/docs/conf-analytics

**opt out from analytics later**

```
yarn bit config set analytics_reporting false
yarn bit config set error_reporting false
```

## emotion CSS-in-JS

https://emotion.sh/docs/introduction

### usage of css

```
/** @jsx jsx */

import { css, jsx } from '@emotion/core';
import { h1Style } from '@bit/marcelstieber.cashflow-components.headline1';

export default (
	<h1 css={css(h1Style)}>{children}</h1>
)
```

It seems `@emotion/styled` (?) is smaller than `@emotion/core` (18K)

### links

typescript guide: https://docs.bit.dev/docs/ts-guidelines#global-types
quick start: https://docs.bit.dev/docs/quick-start
