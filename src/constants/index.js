export const FACTORY_ADDRESS = '0x95F9c44fA1585811e1D1a0F59e74174B657B37A5'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  '',
]

// hide from overview list
export const TOKEN_BLACKLIST = [

]

// pair blacklist
export const PAIR_BLACKLIST = [

]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = [

]

export const UNTRACKED_COPY =
  'Derived USD values may be inaccurate without liquid stablecoin or BNB pairings.'

// tokens that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES = [

]
