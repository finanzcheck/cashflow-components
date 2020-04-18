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

## Theo

[Theo](https://github.com/salesforce-ux/theo) is a degsign tolekn generator by Salesforce. It takes JSON or YAML and outputs CSS, SASS, XML, JSON (whatever the platform needs).

Link: https://uxdesign.cc/design-tokens-for-dummies-8acebf010d71

## JSON Format

```
{
  props: {
    PROP_NAME: {
      value: "PROP_VALUE",
      type: "PROP_TYPE",
      category: "PROP_CATEGORY"
    }
  }
}
```

```
{
	props: {
		"color_button": {
			"value": "#F09103",
			"type": "color",
			"category": "background"
		}
	}
}
```

Supported categories: https://github.com/salesforce-ux/theo#supported-categories

### CLI

https://github.com/salesforce-ux/theo/blob/master/CLI.md

| Name                 | Description                                                                   | Default  |
| -------------------- | ----------------------------------------------------------------------------- | -------- |
| --transform          | valid theo transform                                                          | raw      |
| --format             | Comma separated list of valid theo formats                                    | raw.json |
| --dest               | The path where the result should be written                                   | stdout   |
| --setup              | The path to an optional JS module that can set up Theo before transformation. |          |
| --resolveMetaAliases | Resolve aliases in metadata                                                   | false    |

```
yarn theo yml/buttons.yml --transform web --format custom-properties.css,module.js --dest stdout

yarn theo json/example.json --transform web --format custom-properties.css,module.js --dest stdout
```

## FIGMA

API base url: `https://api.figma.com/`

[API docs](https://www.figma.com/developers/api)

### GET file

GET/v1/files/:key

Response: resonse is cached at `__temp__/figma.json`

[docs](https://www.figma.com/developers/api#get-files-endpoint)

### GET File Components

GET/v1/files/:file_key/components

Response:

```
{
  "error": false,
  "status": 200,
  "meta": {
    "components": []
  }
}
```

[docs](https://www.figma.com/developers/api#get-file-components-endpoint)

### GET Images

GET /v1/images/:key

Response:

```
{
  "err": null,
  "images": {
    "29:22": "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ef69/3060/b6765d49277bc7f3ff1aab93c3ec1e94"
  }
}
```

[docs](https://www.figma.com/developers/api#get-images-endpoint)

# TODO

_clarify the naming convention from UX is matching what happesn with the theming on Catalyst and Affe_

get rid of axios @ fetchToken and use node-fetch

https://www.figma.com/plugin-docs/api/ComponentNode/

export async (do we need this?)

- https://www.figma.com/plugin-docs/api/properties/nodes-exportasync/
- https://spectrum.chat/figma/extensions-and-api/writing-to-image-fills-uint8array-help~597c37b7-a682-480a-8e2d-8d9af90f05f7

some helpful methods https://github.com/figma/figma-api-demo/blob/master/figma-to-react/lib/figma.js

Figma to React example
https://github.com/figma/figma-api-demo/blob/master/figma-to-react/main.js#L106

a lot helper for schema
https://github.com/figma/figma-api-demo/blob/master/figma-to-react/lib/figma.js

TODO: normalize ->

```
document -> children(CANVAS) -> children(FRAME.name -> colors, text, etc.) -> children -> [{}]
  id
  name
  characters -> (actual text)
  styles -> { fill: styleId }
  fills -> color -> rgb: 255 * value each

  e.g. name= SPACING -> children[x].name = 'huge' -> absoluteBoundingBox.widht|height
  FRAME-NAME === type of normilization -> child-NAME === styleName value === fill|absoluteBoundingBox|style|...
}]
```

`styles -> [{ styleId -> type, name, no values }]` ?? usable ??

Goal:

```
"font_small": {           -> FRAMAE.name + '_' + CHILD.name
  "value": "12",          -> needs selector
  "type": "size",         -> needs mapping
  "category": "sizing",   -> needs mapping
  "meta": {               -> ?? needed ?? how to use in Figma?
    "unit": "px"
  }
}
```

style from document example:
"lineHeightPx": 18.75,
"lineHeightPercent": 100,
-> needs translation to proper CSS -> meta could be used

Questions:

- can components only be loaded as images?
- how to use meta data for components to give information to load as image or not
- how to use styles sub-object?
- what categories does Theo have? -> https://github.com/salesforce-ux/theo#supported-categories

https://www.figma.com/developers/api#library-items
https://blog.prototypr.io/design-tokens-with-figma-aef25c42430f
https://www.figma.com/file/tpwhHRfoXMkzuFIYE9becy/CashFlow-Code?node-id=0%3A1

https://github.com/mikaelvesavuori/figmagic/tree/master/bin/functions
https://www.figma.com/file/K39TRbltDVcWFlpzw9r7Zh/Figmagic-%E2%80%94-Design-System-for-Tokens?node-id=2605%3A12

from article https://www.figma.com/file/JfZz46bVQzUA2TTtoSnhnG/Ishan(deisgn-token)?node-id=5%3A19

compare fetchToken - result.version: "288287639" in response to the version stored to prevent unnecessary steps
on result is the information about the last changed date -> compare with a cached one
console.log(result.document.children[0].children); // the frames
console.log(result.document.children[0].children[1]); // type
const x = fs.outputJson(path.resolve(PATH, `figma.json`), result);
