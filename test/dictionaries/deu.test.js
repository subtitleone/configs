import { loadDictionary, getDescription, getRule } from './utils'

describe('German dictionary', () => {
  const dict = loadDictionary('deu')

  it(getDescription(dict, 0), () => {
    const rule = getRule(dict, 0)
    expect('wenig So zu erzählen'.replace(rule.regex, rule.replace)).toEqual('wenig so zu erzählen')
    expect('So zu erzählen'.replace(rule.regex, rule.replace)).toEqual('So zu erzählen')
  })
})
