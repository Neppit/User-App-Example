class Math {
    static sum(a, b) {
        return a + b
    }

    static diff(a, b) {
        return a - b
    }

    static sumArray(a) {
        let sum = 0
        for (let i = 0; i < a.length; i++) {
            sum += a[i]
        }
        return sum
    }
}

Math.sum(5, 10)
Math.diff(20, 10)

module.exports = Math