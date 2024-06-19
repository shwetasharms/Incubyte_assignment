export function add(numbers: string): number {

    // Return 0 if the input string  is empty
    if (numbers === '') return 0;

    // delimiter is comma or newline
    let delimiter=/,|\n/


    // split the number  using delimeter
    const numArray = numbers.split(delimiter);
    return numArray.reduce((sum,num)=>sum+parseInt(num), 0);
}
