class Counter {
    constructor() {
        this.count = 0;
        console.log(this.count);
    }

    increment() {
        this.count++;
        console.log(this.count);
    }

    start() {
        setInterval(this.increment(), 1000);
    }
}

const counter = new Counter();
counter.start();