export default class Reporter {

    constructor() {
        this.listeners = []
    }

    report(start, end, size) {
        const message = `Showing ${end > start? (start + 1) : start} to ${end} of ${size}`
        this.listeners.forEach(listener => listener(message))
    }

    register(listener) {
        this.listeners.push(listener)
    }
}