export function add(numbers: string): number {
    if (numbers === '') return 0;
    if (!numbers.includes(",")) return parseInt(numbers);
    const numArray = numbers.split(",");
    return numArray.reduce((sum,num)=>sum+parseInt(num), 0);
}
