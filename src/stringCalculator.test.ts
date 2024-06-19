import {add} from "./stringCalculator"
test('return 0 for empty  string', ()=>{
    expect(add("")).toBe(0)
})
test('returns the number itself if the string contain the single number', ()=>{
    expect(add('1')).toBe(1)
    expect(add('5')).toBe(5)
})