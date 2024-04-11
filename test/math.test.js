const Math = require('../lib/Math')


describe('Math Test', () => {
    it('Should return the sum of two numbers' , () => {
        const sum = Math.sum(10, 15)

        expect(sum).toBe(25)
    })

    it('Should return the difference between two numbers', () => {
        const diff = Math.diff(20, 10)

        expect(diff).toBe(10)
    })

    //Write a test that checks that Math.sumArray returns the sum of all numbers in a provided argument array [10, 15, 3] = 28

    it('should return array', ()=>{
        const sum = Math.sumArray([10,5,20])
        expect(sum).toBe(35)
    })
})
