'use strict';

var calculator = (function () {
    return {
        add: function (a, b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new Error('It is not a number');
            }
            return a + b;
        },
        subtract: function (a, b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new Error('It is not a number');
            }
            return a - b;
        },
        multiply: function (a, b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new Error('It is not a number');
            }
            return a * b;
        },
        divide: function (a, b) {
            if (typeof a !== 'number' || typeof b !== 'number') {
                throw new Error('It is not a number');
            }
            return a / b;
        },
        factorialIter: function (n) {
            if (typeof n !== 'number' || n !== Math.floor(n)) {
                throw new Error('It is not a correct number');
            }
            if (n < 0) {
                throw new Error('Enter a number greater than zero');
            }
            var result = 1;
            for (var i = 1; i <= n; i++) {
                result = result * i;
            }
            return result;
        },
        factorialRek: function recursive(n) {
            if (typeof n !== 'number' || n !== Math.floor(n)) {
                throw new Error('It is not a correct number');
            }
            if (n < 0) {
                throw new Error('Enter a number greater than zero');
            }
            if (n === 0) {
                return 1;
            }
            return recursive(n - 1) * n;
        }
    }
})();