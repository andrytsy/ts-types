interface Rect {
    readonly id: number
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: 123,
    size: {
        width: 1,
        height: 2
    }
}

const rect2: Rect = {
    id: 12345,
    size: {
        width: 2,
        height: 4
    }
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

//================================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: 123,
    size: {
        width: 1,
        height: 2
    },
    getArea() {
        return this.size.width * this.size.height
    }
}

//===================================

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date) {
        this.time = date
    }
}

//====================================

interface Styles {
    [key: string]: string
}

const css = {
    border: '1px',
    margin: '1px',
    padding: '1px',
}
