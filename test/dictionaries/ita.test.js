import { loadDictionary, getDescription, getRule } from './utils'

describe('Italian dictionary', () => {
  const dict = loadDictionary('ita')

  it(getDescription(dict, 0), () => {
    const rule = getRule(dict, 0)
    expect('| tuoi '.replace(rule.regex, rule.replace)).toEqual('I tuoi ')
    expect('|l divo '.replace(rule.regex, rule.replace)).toEqual('Il divo ')
  })

  it(getDescription(dict, 1), () => {
    const rule = getRule(dict, 1)
    expect('Forzal!'.replace(rule.regex, rule.replace)).toEqual('Forza!')
  })

  it(getDescription(dict, 2), () => {
    const rule = getRule(dict, 2)
    expect('-SÌì.'.replace(rule.regex, rule.replace)).toEqual('-Sì.')
    expect('-SÌì'.replace(rule.regex, rule.replace)).toEqual('-Sì')
    expect(' SÌì '.replace(rule.regex, rule.replace)).toEqual(' Sì ')
    expect('SÌì '.replace(rule.regex, rule.replace)).toEqual('Sì ')
    expect('SÌì'.replace(rule.regex, rule.replace)).toEqual('Sì')
    expect('SÌì.'.replace(rule.regex, rule.replace)).toEqual('Sì.')
    expect('SÌ, è vero.'.replace(rule.regex, rule.replace)).toEqual('Sì, è vero.')
    expect('-SÌ.'.replace(rule.regex, rule.replace)).toEqual('-Sì.')
    expect('SÌ.'.replace(rule.regex, rule.replace)).toEqual('Sì.')
  })
})
