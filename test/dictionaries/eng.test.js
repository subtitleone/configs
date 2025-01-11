import { loadDictionary, getDescription, getRule } from './utils'

describe('English dictionary', () => {
  const dict = loadDictionary('eng')

  it(getDescription(dict, 2), () => {
    const rule = getRule(dict, 2)
    expect('/ would'.replace(rule.regex, rule.replace)).toEqual('I would')
    expect("/'ve ever had".replace(rule.regex, rule.replace)).toEqual("I've ever had")
    expect('-/ would'.replace(rule.regex, rule.replace)).toEqual('-I would')
    expect('- / would'.replace(rule.regex, rule.replace)).toEqual('- I would')
    expect('(NARRATING) /n ancient'.replace(rule.regex, rule.replace)).toEqual('(NARRATING) In ancient')
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
    expect('first\n-1 did.'.replace(rule.regex, rule.replace)).toEqual('first\n-I did.')
    expect('done. -1'.replace(rule.regex, rule.replace)).toEqual('done. -I')
    expect('- 1...'.replace(rule.regex, rule.replace)).toEqual('- I...')
    expect('- 1 think'.replace(rule.regex, rule.replace)).toEqual('- I think')
  })

  it(getDescription(dict, 7), () => {
    const rule = getRule(dict, 7)
    expect('-l '.replace(rule.regex, rule.replace)).toEqual('-I ')
    expect("-l did. lt isn't human.".replace(rule.regex, rule.replace)).toEqual("-I did. It isn't human.")
    expect(" look, it isn't human.".replace(rule.regex, rule.replace)).toEqual(" look, it isn't human.")
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

  it(getDescription(dict, 15), () => {
    const rule = getRule(dict, 15)
    expect('[, too'.replace(rule.regex, rule.replace)).toEqual('I, too')
    expect('[ too.'.replace(rule.regex, rule.replace)).toEqual('I too.')
    expect('- [ too.'.replace(rule.regex, rule.replace)).toEqual('- I too.')
    expect('[ too ]'.replace(rule.regex, rule.replace)).toEqual('[ too ]')
    expect('May [...?'.replace(rule.regex, rule.replace)).toEqual('May I...?')
  })

  it(getDescription(dict, 16), () => {
    const rule = getRule(dict, 16)
    expect("Bob''s car".replace(rule.regex, rule.replace)).toEqual("Bob's car")
    expect("Bob' 'Bib".replace(rule.regex, rule.replace)).toEqual("Bob' 'Bib")
  })
})
