'use strict';

describe('calculator module tests', function () {

    it('should add two numbers', function () {
        //given
        var a = 1, b = 4, result
        //when
        result = calculator.add(a, b);
        //then
        expect(result).toBe(5);
    }),
        it('should throw exception for string add two numbers', function () {
            //given
            var a = 'string', b = 2;
            //when
            expect(function () {
                calculator.add(a, b)
            }).toThrow(new Error('It is not a number'));
        }),
        it('should divide two numbers', function () {
            //given
            var a = 3, b = 0, result
            //when
            result = calculator.divide(a, b);
            //then
            expect(result).toBe(Infinity);
        }),
        it('should throw exception for string divide two numbers', function () {
            //given
            var a = 'string', b = 2;
            //when
            expect(function () {
                calculator.divide(a, b)
            }).toThrow(new Error('It is not a number'));
        }),
        it('should multiply two numbers', function () {
            //given
            var a = 2, b = 2, result
            //when
            result = calculator.multiply(a, b);
            //then
            expect(result).toBe(4);
        }),
        it('should throw exception for string multiply two numbers', function () {
            //given
            var a = 'string', b = 2;
            //when
            expect(function () {
                calculator.multiply(a, b)
            }).toThrow(new Error('It is not a number'));
        }),
        it('should subtract two numbers', function () {
            //given
            var a = 2, b = 2, result
            //when
            result = calculator.subtract(a, b);
            //then
            expect(result).toBe(0);
        }),
        it('should throw exception for string subtract two numbers ', function () {
            //given
            var a = 'string', b = 2;
            //when
            expect(function () {
                calculator.subtract(a, b)
            }).toThrow(new Error('It is not a number'));
        }),
        it('should factorial iteration', function () {
            //given
            var n = 3, result;
            //when
            result = calculator.factorialIter(n);
            //then
            expect(result).toBe(6);
        }),
        it('factorial iteration should throw exception for string ', function () {
            //given
            var n = 'string';
            //when
            expect(function () {
                calculator.factorialIter(n)
            }).toThrow(new Error('It is not a correct number'));
        }),
        it('factorial iteration should throw exception for floating point ', function () {
            //given
            var n = 4.5;
            //when
            expect(function () {
                calculator.factorialIter(n)
            }).toThrow(new Error('It is not a correct number'));
        }),
        it('factorial iteration should throw exception for negative number ', function () {
            //given
            var n = -1;
            //when
            expect(function () {
                calculator.factorialIter(n)
            }).toThrow(new Error('Enter a number greater than zero'));
        }),
        it('should factorial recursion return 6', function () {
            //given
            var n = 3, result;
            //when
            result = calculator.factorialRek(n);
            //then
            expect(result).toBe(6);
        }),
        it('factorial recursion should throw exception for string ', function () {
            //given
            var n = 'string';
            //when
            expect(function () {
                calculator.factorialRek(n)
            }).toThrow(new Error('It is not a correct number'));
        }),
        it('factorial recursion should throw exception for floating point ', function () {
            //given
            var n = 4.5;
            //when
            expect(function () {
                calculator.factorialRek(n)
            }).toThrow(new Error('It is not a correct number'));
        }),
        it('factorial recursion should throw exception for negative number ', function () {
            //given
            var n = -1;
            //when
            expect(function () {
                calculator.factorialRek(n)
            }).toThrow(new Error('Enter a number greater than zero'));
        })

});