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
  id: string,
  decimals: number,
  symbol: string,
  symbolFormatting?: string,
  name: string,
  rateApiName?: string,
  rateMultiplier?: number
  img?: string,
}


/**
 * A map of token assets referenced by token id.
 */
export type TokenMap = Record<string, Token>
