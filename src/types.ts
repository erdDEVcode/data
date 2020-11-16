/**
 * Metadata for a network.
 */
export interface NetworkMetadata {
  /**
   * The network chain id.
   */
  chainId: string,
  /**
   * The base token used to pay for transactions.
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
   * The token.
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
   * The token.
   */
  token: string,
  /**
   * The currency.
   */
  currency: string,
  /**
   * The amount in the currency per 1 unit of the token.
   * 
   * Denominated in the smallest unit of the currency. For example, 
   * for USD this will the USD value multipled by 100.
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
