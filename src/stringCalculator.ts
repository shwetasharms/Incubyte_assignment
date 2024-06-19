export function add(numbers: string): number {

    // Return 0 if the input string  is empty
    if (numbers === '') return 0;

    // delimiter is comma or newline
    let delimiter = /,|\n/


    // split the number  using delimeter
    const numArray = numbers.split(delimiter);

    // Check for  negative  numbers
    const negative = numArray.filter(num => parseInt(num) < 0)
    if (negative.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negative.join(",")}`)
    }

    // return the result
    return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}
