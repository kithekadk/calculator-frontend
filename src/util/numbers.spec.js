import {expect, it, describe} from 'vitest'
import { transformToNumber } from './numbers'

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
