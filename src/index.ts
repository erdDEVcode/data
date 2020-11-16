import { NetworkMetadata, NetworkMetadataMap, Token, TokenMap } from './types'

/**
 * @internal
 */
const networks = require('../data/networks.json')

/**
 * @internal
 */
const tokens = require('../data/tokens.json')

export * from './types'

/**
 * Predefined data.
 */
export class Data {
  protected _tokens: TokenMap = {}
  protected _networks: NetworkMetadataMap = {}

  constructor() {
    this._tokens = Object.entries(tokens).reduce((m, [key, val]) => {
      const a: Token = {
        ...(val as Token),
        id: key,
      }
      m[a.id] = a
      return m
    }, {} as TokenMap)

    this._networks = Object.entries(networks).reduce((m, [key, val]) => {
      const a: NetworkMetadata = {
        ...(val as NetworkMetadata),
        chainId: key,
      }
      m[a.chainId] = a
      return m
    }, {} as NetworkMetadataMap)
  }

  /**
   * Get predefined token data.
   */
  public getTokens(): TokenMap {
    return Object.assign({}, this._tokens)
  }

  /**
   * Get predefined token data for given token.
   * 
   * @param id Token
   */
  public getToken(id: string): Token {
    return this.getTokens()[id]
  }

  /**
   * Get predefined network metadata.
   */
  public getNetworks(): NetworkMetadataMap {
    return Object.assign({}, this._networks)
  }

  /**
   * Get predefined network metadata for given network.
   * 
   * @param chainId Network chain id.
   */
  public getNetwork(chainId: string): NetworkMetadata {
    return this.getNetworks()[chainId]
  }
}

/**
 * Singleton instance.
 */
export const data = new Data()