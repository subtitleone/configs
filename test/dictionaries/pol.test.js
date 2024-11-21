import { loadDictionary, getDescription, getRule } from './utils'

describe('Polish dictionary', () => {
  const dict = loadDictionary('pol')

  it(getDescription(dict, 0), () => {
    const rule = getRule(dict, 0)
    expect('| ciągle'.replace(rule.regex, rule.replace)).toEqual('I ciągle')
    expect(' | ciągle'.replace(rule.regex, rule.replace)).toEqual(' I ciągle')
    expect('-| ciągle'.replace(rule.regex, rule.replace)).toEqual('-I ciągle')
    expect('- | ciągle'.replace(rule.regex, rule.replace)).toEqual('- I ciągle')
  })

  it(getDescription(dict, 1), () => {
    const rule = getRule(dict, 1)
    expect('le?'.replace(rule.regex, rule.replace)).toEqual('Ile?')
    expect('le grand'.replace(rule.regex, rule.replace)).toEqual('Ile grand')
    expect('go le?'.replace(rule.regex, rule.replace)).toEqual('go le?')
  })
})
