let x = 3

class Foo {
    public a:number

    constructor () {
        this.a = 0
    }

    public x(): Foo {
        this.a += 1
        return this
    }

    public y(): Foo {
        this.a += 2
        return this
    }

    public z(): Foo {
        this.a += 3
        return this
    }
}

let b = new Foo()

console.log(b.x().y().a)



