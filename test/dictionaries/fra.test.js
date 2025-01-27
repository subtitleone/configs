import { loadDictionary, getDescription, getRule } from './utils'

describe('French dictionary', () => {
  const dict = loadDictionary('fra')

  it(getDescription(dict, 0), () => {})
  it(getDescription(dict, 1), () => {})
  it(getDescription(dict, 2), () => {})

  it(getDescription(dict, 3), () => {
    const rule = getRule(dict, 3)
    expect('|ci '.replace(rule.regex, rule.replace)).toEqual('Ici ')
    expect('|ci.'.replace(rule.regex, rule.replace)).toEqual('Ici.')
    expect('/ci '.replace(rule.regex, rule.replace)).toEqual('Ici ')
    expect('!ci.'.replace(rule.regex, rule.replace)).toEqual('Ici.')
    expect(' lci.'.replace(rule.regex, rule.replace)).toEqual(' Ici.')
  })

  it(getDescription(dict, 4), () => {
    const rule = getRule(dict, 4)
    expect('- [l vole !'.replace(rule.regex, rule.replace)).toEqual('- Il vole !')
    expect('[l vole !'.replace(rule.regex, rule.replace)).toEqual('Il vole !')
    expect('[| va venir.'.replace(rule.regex, rule.replace)).toEqual('Il va venir.')
    expect('I[ nous reste'.replace(rule.regex, rule.replace)).toEqual('Il nous reste')
    expect('- [look]'.replace(rule.regex, rule.replace)).toEqual('- [look]')
    expect('[l ook]'.replace(rule.regex, rule.replace)).toEqual('[l ook]')
  })

  it(getDescription(dict, 5), () => {
    const rule = getRule(dict, 5)
    expect('Qui !'.replace(rule.regex, rule.replace)).toEqual('Oui !')
    expect('Ja. Qui!'.replace(rule.regex, rule.replace)).toEqual('Ja. Oui!')
    expect('Qui abc'.replace(rule.regex, rule.replace)).toEqual('Qui abc')
    expect('Qui, abc'.replace(rule.regex, rule.replace)).toEqual('Oui, abc')
  })

  it(getDescription(dict, 6), () => {
    const rule = getRule(dict, 6)
    expect('I volait'.replace(rule.regex, rule.replace)).toEqual('Il volait')
  })

  it(getDescription(dict, 7), () => {
    const rule = getRule(dict, 7)
    expect('A/Ô ! Tu '.replace(rule.regex, rule.replace)).toEqual('Allô ! Tu ')
  })

  it(getDescription(dict, 8), () => {
    const rule = getRule(dict, 8)
    expect('Niya |'.replace(rule.regex, rule.replace)).toEqual('Niya !')
    expect('Niya | Niyo'.replace(rule.regex, rule.replace)).toEqual('Niya | Niyo')
    expect('Niyô|'.replace(rule.regex, rule.replace)).toEqual('Niyô!')
  })

  it(getDescription(dict, 9), () => {
    const rule = getRule(dict, 9)
    expect('I[ui a été'.replace(rule.regex, rule.replace)).toEqual('Il lui a été')
  })

  it(getDescription(dict, dict.length - 1), () => {
    const rule = getRule(dict, dict.length - 1)
    expect('A.|.A'.replace(rule.regex, rule.replace)).toEqual('A.I.A')
  })
})
