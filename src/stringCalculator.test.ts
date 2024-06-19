import {add} from "./stringCalculator"

//  test case for empty string 
test('return 0 for empty  string', ()=>{
    expect(add("")).toBe(0)
})

// test case for the single string 
test('returns the number itself if the string contain the single number', ()=>{
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
})


// test case for the two numbers
test('return the sum of two number', ()=>{
    expect(add("1,2")).toBe(3);
    expect(add("5,7")).toBe(12);
})

