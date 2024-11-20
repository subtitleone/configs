import { loadDictionary, getDescription, getRule } from './utils'

describe('Chinese dictionary', () => {
  const dict = loadDictionary('chi')

  it(getDescription(dict, 1), () => {
    const rule = getRule(dict, 1)
    expect("好痛 '-:".replace(rule.regex, rule.replace)).toEqual('好痛...')
    expect("'-: 好痛".replace(rule.regex, rule.replace)).toEqual('...好痛')
    expect("加代 '\"' 對不起".replace(rule.regex, rule.replace)).toEqual('加代...對不起')
    expect('是嗎 ."" 謝謝'.replace(rule.regex, rule.replace)).toEqual('是嗎...謝謝')
  })

  it(getDescription(dict, 3), () => {
    const rule = getRule(dict, 3)
    expect('有 你 的 訪 客'.replace(rule.regex, rule.replace)).toEqual('有你的訪客')
    expect('有 你 1 的 訪'.replace(rule.regex, rule.replace)).toEqual('有你 1 的訪')
  })

  it(getDescription(dict, 4), () => {
    const rule = getRule(dict, 4)
    expect('"有你的訪客」'.replace(rule.regex, rule.replace)).toEqual('「有你的訪客」')
    expect('"有你的訪客」'.replace(rule.regex, rule.replace)).toEqual('「有你的訪客」')
    expect("'有你的訪客」".replace(rule.regex, rule.replace)).toEqual('「有你的訪客」')
    expect('~ 有你的訪客 」'.replace(rule.regex, rule.replace)).toEqual('「 有你的訪客 」')
    expect('_ 有你 , 的訪客 」'.replace(rule.regex, rule.replace)).toEqual('「 有你 , 的訪客 」')
  })
})
