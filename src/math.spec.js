import { it , expect, describe } from "vitest";
import { add } from "./math";

describe('Add Function', ()=>{

    it('correctly add numbers', ()=>{
        const numbers = add([1, 2, 3])
        expect(numbers).toEqual(6)
    })

    it('should return Not a number when one invalid value is provided', ()=>{
       const inputs = ['invalid', 2, 3] 

       const result = add(inputs)

       expect(result).toBeNaN()
    }) 

    it('should return correct sum when provided with numeric strings', ()=>{
        const inputs = ['1', '2', '3']

        const result = add(inputs)

        const expectedResult = inputs.reduce(
            (prevValue, currentVal)=> +prevValue + +currentVal, 0
        )

        expect(result).toBe(expectedResult)

        // expect(result).toBe(6)
    })

    it('returns a 0 when array is empty', ()=>{
        const inputs = []

        const result = add(inputs)

        expect(result).toBe(0)
    })

    it('should throw an error if no value is passed to the add function', ()=>{
        const result = ()=>{
            add()
        }

        expect(result).toThrow("is not iterable")
    })

    it('errors out if args are not in an array', ()=>{
        const num1 = 1
        const num2 = 2

        const result = ()=>{
            add(num1, num2)
        }

        expect(result).toThrow('is not iterable')
    })
})
