# elrond-utils

Utilities and data for building with Elrond.

Features:

* Cross-platform: Node.js, Browser, Web workers and React Native.
* Small and lightweight.
* Contains default configuration for Mainnet and Testnet tokens.
* Typescript definitions.
* Full [documentation](https://erddevcode.github.io/utils/)

## Installation

```
npm install --save elrond-utils
```

## Usage

All predefined token and network metadata are in [`tokens.json`](https://github.com/erdDEVcode/utils/blob/master/data/tokens.json) and [`networks.json`](https://github.com/erdDEVcode/utils/blob/master/data/networks.json) respectively.

This data gets loaded in and exposed via the `Data` export:

```js
import Data from 'elrond-util'

console.log(JSON.stringify(Data.getToken('xegld'), null, 2))
/*
  {
    "symbol": "XeGLD",
    "name": "Elrond Test eGold",
    "decimals": 18,
    "id": "xegld"
  }
*/
```

If you are building in Typescript then there are various useful type definitions available.

For a full list and further documentation see https://erddevcode.github.io/utils/.

## Developer guide

To build both ESM and CommonJS output:

```shell
yarn build
```

To re-build the CommonJS output on chnage:

```shell
yarn dev
```

To build the docs:

```shell
yarn build-docs
```

To publish a new release (this will create a tag, publish to NPM and publich the latest docs):

```shell
yarn release
```

## License

MIT