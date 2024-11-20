import fs from 'fs'

export const loadDictionary = lang => JSON.parse(fs.readFileSync(`dictionaries/${lang}.json`).toString())
export const getDescription = (rules, index) => rules[index].description || `Rule #${index}`

export const getRule = (rules, index) => ({
  regex: new RegExp(rules[index].match, 'gu'),
  replace: rules[index].replace,
})
