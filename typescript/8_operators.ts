interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeys1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeys2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeys1 = 'name'
