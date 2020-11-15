const numArr: Array<number> = [1,2,3]
const strArr: Array<string> = ['1', '2']

function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(numArr)
reverse(strArr)
