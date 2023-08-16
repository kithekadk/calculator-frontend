import {expect, it, describe, expectTypeOf} from 'vitest'
import { cleanNumbers, transformToNumber } from './numbers'
import { validateNumber } from './validation'

describe('Converts to a number', ()=>{
    it('passes if value in convertible to a number', ()=>{
        const value = '5'

        const result = transformToNumber(value)

        expect(result).toBe(5)
        expect(result).toBeTypeOf('number')
    })

    it('should be a type number if the parameter is not convertable to a number', ()=>{
        const value = 'invalid'

        const result = transformToNumber(value)

        expect(result).toBeNaN()
    })
})

describe('cleanNumbers()', ()=>{
    it('should return an array of number values if an array of string number values is provided', ()=>{
        const stringNumbers = ['1', '2', '3', '4']

        const cleanedNumbers = cleanNumbers(stringNumbers)
        // console.log(cleanedNumbers);
        const number = stringNumbers.map(el=>{
            return +el
        })

        expect(cleanNumbers(stringNumbers)).toEqual([1, 2, 3, 4])
        
        expect(cleanNumbers(stringNumbers)).toEqual(number)

        cleanedNumbers.forEach(num =>{
            expect(typeof(num)).toBe('number')
        })

        expect(cleanedNumbers.every(item=>typeof(item) === 'number')).toBeTruthy()

        expect(cleanedNumbers[0]).toBeTypeOf('number')
    })

    it('should throw an error if an array with at least one empty string is provided', ()=>{
        const values = ['', 1]

        const cleanFn = ()=> cleanNumbers(values)

        expect(cleanFn).toThrow(/Invalid input - must not be empty./)

    })

    it('throws an error if a string which cant be a number is passed', ()=>{
        const values = ['d', 4]

        const validateFn =()=> cleanNumbers(values)

        expect(validateFn).toThrow(/Invalid number input./)
    })

})
