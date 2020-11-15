const isFetching: boolean = false
const isLoading: boolean = true

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const text: string = 'Hello Typescript'

const numberArr: number[] = [1, 2, 3]
// Generic
const numberArr2: Array<number> = [1, 2, 3, 4]

const words: string[] = ['Hello', 'Typescript']

const contact: [string, number] = ['Vladilen', 123]

// Any
let variable: any = 42
variable = 'New string'
variable = []

// Void
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Хайзенберг')

// Never
function throwError(message: string): never {
    throw new Error(message);
}

function infinite(): never {
    while (true) {

    }
}

// Custom type
type Login = string

const login: Login = '123123'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

type SomeType = number | null | undefined
