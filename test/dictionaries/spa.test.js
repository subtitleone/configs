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

  it(getDescription(dict, 3), () => {
    const rule = getRule(dict, 3)
    expect('s0y'.replace(rule.regex, rule.replace)).toEqual('soy')
    expect('...s0y '.replace(rule.regex, rule.replace)).toEqual('...soy ')
    expect('s0ybean'.replace(rule.regex, rule.replace)).toEqual('s0ybean')
    expect('beans0y'.replace(rule.regex, rule.replace)).toEqual('beans0y')
  })

  it(getDescription(dict, 4), () => {
    const rule = getRule(dict, 4)
    expect('...word'.replace(rule.regex, rule.replace)).toEqual('...word')
    expect('..word'.replace(rule.regex, rule.replace)).toEqual('...word')
    expect('.. word'.replace(rule.regex, rule.replace)).toEqual('... word')
    expect('.word'.replace(rule.regex, rule.replace)).toEqual('.word')
    expect('..¿word'.replace(rule.regex, rule.replace)).toEqual('...¿word')
  })

  it(getDescription(dict, 5), () => {
    const rule = getRule(dict, 5)
    expect('...WORD'.replace(rule.regex, m => m.toLowerCase())).toEqual('...word')
    expect('... WORD'.replace(rule.regex, m => m.toLowerCase())).toEqual('... word')
    expect('...WOrd'.replace(rule.regex, m => m.toLowerCase())).toEqual('...word')
    expect('...Con el pelo cano...'.replace(rule.regex, m => m.toLowerCase())).toEqual('...con el pelo cano...')
  })
})
