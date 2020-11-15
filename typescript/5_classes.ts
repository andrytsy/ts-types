class Typescript {
    version: string

    constructor(verion: string) {
        this.version = verion
    }

    info(name: string) {
        return `(${name}) Typescript version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numOfWeels: number = 4

    constructor(theModel: string) {
        this.model = theModel
    }
}

class Car1 {
    readonly numOfWeels: number = 4
    constructor(readonly model: string) {}
}

// =================

class Animal {
    protected voice: string
    public color: string

    constructor() {
        this.go()
    }

    private go() {}
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('myau!')

//=======================

abstract class Component {
    abstract render(): void
    abstract info(): string
}
