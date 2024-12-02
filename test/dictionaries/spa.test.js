import { loadDictionary, getDescription, getRule } from './utils'

describe('Spanish dictionary', () => {
  const dict = loadDictionary('spa')

  it(getDescription(dict, 0), () => {
    const rule = getRule(dict, 0)
    expect('-SÍ. A'.replace(rule.regex, rule.replace)).toEqual('-Sí. A')
    expect('SÍ'.replace(rule.regex, rule.replace)).toEqual('Sí')
    expect('SÍ '.replace(rule.regex, rule.replace)).toEqual('Sí ')
    expect('SÍA'.replace(rule.regex, rule.replace)).toEqual('SÍA')
    expect('-¿SÍ? '.replace(rule.regex, rule.replace)).toEqual('-¿Sí? ')
  })

  it(getDescription(dict, 1), () => {
    const rule = getRule(dict, 1)
    expect('¿ Turner?'.replace(rule.regex, rule.replace)).toEqual('¿Turner?')
    expect('¿Turner  ?'.replace(rule.regex, rule.replace)).toEqual('¿  Turner  ?')
    expect('¿ abc? ¿abc ?'.replace(rule.regex, rule.replace)).toEqual('¿abc? ¿ abc ?')
    expect('¿ abc? ¿abc ? ¿abc   ?'.replace(rule.regex, rule.replace)).toEqual('¿abc? ¿ abc ? ¿   abc   ?')
  })

  it(getDescription(dict, 2), () => {
    const rule = getRule(dict, 2)
    expect('¡ Turner!'.replace(rule.regex, rule.replace)).toEqual('¡Turner!')
    expect('¡Turner  !'.replace(rule.regex, rule.replace)).toEqual('¡  Turner  !')
    expect('¡ abc! ¡abc !'.replace(rule.regex, rule.replace)).toEqual('¡abc! ¡ abc !')
    expect('¡ abc! ¡abc ! ¡abc   !'.replace(rule.regex, rule.replace)).toEqual('¡abc! ¡ abc ! ¡   abc   !')
  })
})
