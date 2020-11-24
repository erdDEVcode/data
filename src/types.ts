/**
 * Metadata for a network.
 */
export interface NetworkMetadata {
  /**
   * The network chain id.
   */
  chainId: string,
  /**
   * Id of the token used to pay for transactions.
   */
  primaryToken?: string,
  /**
   * Address of system auction contract.
   */
  auctionContract?: string,
  /**
   * Address of system staking contract.
   */
  stakingContract?: string,
  /**
   * Address of system delegation contract.
   */
  delegationContract?: string,
}

/**
 * A map of network metadata information referenced by network chain id.
 */
export type NetworkMetadataMap = Record<string, NetworkMetadata>


/**
 * Balance of an address.
 */
export interface Balance {
  /**
   * The token id.
   */
  token: string,
  /**
   * The amount.
   * 
   * Denominated in the smallest unit of the token. For example, 
   * for eGLD this will be the eGLD value multiplied by 10^18.
   */
  amount: string,
}

/**
 * An exchange rate for a token.
 */
export interface Rate {
  /**
   * The base token id.
   */
  token: string,
  /**
   * The currency token id.
   */
  currency: string,
  /**
   * The rate.
   * 
   * This specifies the units of the the currency token per 1 unit of the base token.
   * 
   * Denominated in standard (i.e. non-smallest) units for both base and currency tokens. For example, 
   * for eGLD-USD this will be the USD per eGLD.
   */
  value: string,
}

/**
 * An object holding the `resolve` and `reject` functions of a `Promise` instance.
 */
export interface PromiseResolver {
  /**
   * Resolve the promise.
   */
  resolve: Function,
  /**
   * Reject the promise.
   */
  reject: Function,
}

/**
 * A token asset.
 * 
 * This reflects the data structures inside the `tokens.json` data file.
 */
export interface Token {
  /**
   * Token id.
   */
  id: string,
  /**
   * No. of digits to the right of the decimal point in the standard unit of this token.
   * 
   * For example, for eGLD the value should be 18. This also means the smallest unit of 
   * denomination is 1 / 10^18.
   */
  decimals: number,
  /**
   * The display-friendly symbol.
   */
  symbol: string,
  /**
   * Display-friendly name.
   */
  name: string,
  /**
   * How the symbol should be formatted.
   * 
   * This is specified as a string template utilising {value} and {symbol}
   * 
   * Default is `{value} {symbol}`.
   */
  symbolFormatting?: string,
  /**
   * The id to use for this token when fetching its exchange rate from Coingecko.
   */
  rateApiName?: string,
  /**
   * Either path to or a Base64-encoded string for an image representing the token.
   */
  img?: string,
}


/**
 * A map of token assets referenced by token id.
 */
export type TokenMap = Record<string, Token>
