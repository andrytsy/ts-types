function add(a: number, b:number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toLocaleLowerCase()
}

interface MyPosition {
    x: number | undefined
    y: number | undefined
}

interface MyDefaultPosition extends MyPosition {
    default: string
}

function position(): MyPosition
function position(a: number): MyDefaultPosition
function position(a: number, b: number): MyPosition

function position(a?: number, b?: number) {
    if (!a && !b) {
        return {x: undefined, y: undefined}
    }

    if (a && !b) {
        return {x: a, y: undefined, default: a.toString()}
    }

    return {x: a, y: b}
}
