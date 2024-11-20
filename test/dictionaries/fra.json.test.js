import { loadDictionary, getDescription } from './utils'

describe('French dictionary', () => {
  const dict = loadDictionary('fra')

  it(getDescription(dict, 0), () => {})

  it(getDescription(dict, 3), () => {})
})
