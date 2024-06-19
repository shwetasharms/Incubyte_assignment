import {add} from "./stringCalculator"
test('return 0 for empty  string', ()=>{
    expect(add("")).toBe(0)
})
