import { loadDictionary, getDescription, getRule } from './utils'

describe('English dictionary', () => {
  const dict = loadDictionary('eng')

  it(getDescription(dict, 2), () => {
    const rule = getRule(dict, 2)
    expect('/ would'.replace(rule.regex, rule.replace)).toEqual('I would')
    expect('-/ would'.replace(rule.regex, rule.replace)).toEqual('-I would')
    expect('- / would'.replace(rule.regex, rule.replace)).toEqual('- I would')
  })

  it(getDescription(dict, 3), () => {
    const rule = getRule(dict, 3)
    expect("wasn't 1".replace(rule.regex, rule.replace)).toEqual("wasn't I")
    expect("haven't 1".replace(rule.regex, rule.replace)).toEqual("haven't I")
  })

  it(getDescription(dict, 6), () => {
    const rule = getRule(dict, 6)
    expect('-1'.replace(rule.regex, rule.replace)).toEqual('-I')
    expect('-1...'.replace(rule.regex, rule.replace)).toEqual('-I...')
    expect('done. -1'.replace(rule.regex, rule.replace)).toEqual('done. -I')
    expect('- 1...'.replace(rule.regex, rule.replace)).toEqual('- I...')
  })

  it(getDescription(dict, 14), () => {
    const rule = getRule(dict, 14)
    expect('know You'.replace(rule.regex, rule.replace)).toEqual('know you')
    expect('see You there'.replace(rule.regex, rule.replace)).toEqual('see you there')
    expect('No, You must'.replace(rule.regex, rule.replace)).toEqual('No, you must')
    expect('You there'.replace(rule.regex, rule.replace)).toEqual('You there')
    expect('SEE YOU'.replace(rule.regex, rule.replace)).toEqual('SEE YOU')
    expect('by Youmi Kimura'.replace(rule.regex, rule.replace)).toEqual('by Youmi Kimura')
  })
})
