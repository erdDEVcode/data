[![NPM module](https://badge.fury.io/js/elrond-data.svg)](https://badge.fury.io/js/elrond-data)
[![Join the community](https://img.shields.io/badge/Chat%20on-Telegram-brightgreen.svg?color=0088cc)](https://t.me/erdDEV)
[![Follow on Twitter](https://img.shields.io/twitter/url/http/shields.io.svg?style=social&label=Follow&maxAge=2592000)](https://twitter.com/erd_dev)

# elrond-data

Data for building with Elrond.

Features:

* Contains default configuration for Mainnet and Testnet tokens.
* Small and lightweight
* Cross-platform: Node.js, Browser, Web workers and React Native.
* Typescript definitions.
* Full [documentation](https://erddevcode.github.io/utils/)

## Installation

```
npm install --save elrond-data
```

## Usage

All predefined token and network metadata are in [`tokens.json`](https://github.com/erdDEVcode/utils/blob/master/data/tokens.json) and [`networks.json`](https://github.com/erdDEVcode/utils/blob/master/data/networks.json) respectively.

This data gets loaded in and exposed via the `Data` export:

```js
import { data } 'elrond-data'

const tokenData = data.getToken('xegld')

console.log(JSON.stringify(tokenData, null, 2))
/*
  {
    "symbol": "XeGLD",
    "name": "Elrond Test eGold",
    "decimals": 18,
    "id": "xegld"
  }
*/
```

If you are building in Typescript then there are various useful type definitions available, for example:

```typescript
import { Balance } from 'elrond-data'

const bal: Balance = { 
  token: 'egld',
  amount: '1000',
}
```

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