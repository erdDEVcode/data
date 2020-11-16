import { NetworkMetadata, NetworkMetadataMap, Token, TokenMap } from './types'
const networks = require('./networks.json')
const tokens = require('./tokens.json')

export * from './types'

/**
 * Predefined data.
 */
class Data {
  _tokens: TokenMap = {}
  _networks: NetworkMetadataMap = {}

  constructor() {
    this._tokens = Object.entries(tokens).reduce((m, [key, val]) => {
      const a: Token = {
        id: key,
        ...(val as Token),
      }
      m[a.id] = a
      return m
    }, {} as TokenMap)

    this._networks = Object.entries(networks).reduce((m, [key, val]) => {
      const a: NetworkMetadata = {
        chainId: key,
        ...(val as NetworkMetadata),
      }
      m[a.chainId] = a
      return m
    }, {} as NetworkMetadataMap)
  }

  /**
   * Get predefined token data.
   */
  getTokens(): TokenMap {
    return Object.assign({}, this._tokens)
  }

  /**
   * Get predefined token data for given token.
   * 
   * @param id Token
   */
  getToken(id: string): Token {
    return this.getTokens()[id]
  }

  /**
   * Get predefined network metadata.
   */
  getNetworks(): NetworkMetadataMap {
    return Object.assign({}, this._networks)
  }

  /**
   * Get predefined network metadata for given network.
   * 
   * @param chainId Network chain id.
   */
  getNetwork(chainId: string): NetworkMetadata {
    return this.getNetworks[chainId]
  }
}

/**
 * Singleton instance.
 */
export default new Data()