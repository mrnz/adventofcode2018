/* eslint-env node, mocha */
'use strict';

const assert = require('assert'),
    day1part1 = require('../day01/1-1.js'),
    day1part2 = require('../day01/1-2.js');

describe('Day 1', () => {

    describe('Part One', () => {

        it('should +1, -2, +3, +1 results in  3', () => {
            assert.equal(3, day1part1('+1 \n  -2 \n +3 \n  +1'));
        });
        
        it('should +1, +1, +1 results in  3', () => {
            assert.equal(3, day1part1('+1 \n +1 \n +1'));
        });
        
        it('should +1, +1, -2 results in  0', () => {
            assert.equal(0, day1part1('+1 \n +1 \n -2'));
        });
        
        it('should -1, -2, -3 results in  3', () => {
            assert.equal(-6, day1part1('-1 \n -2 \n -3'));
        });

    });

    describe('Part Two', () => {
        it('should +1, -1 results in 0', () => {
            assert.equal(0, day1part2('+1 \n -1'));
        });

        it('should +3, +3, +4, -2, -4 results in  10', () => {
            assert.equal(10, day1part2('+3 \n +3 \n +4 \n -2 \n -4'));
        });

        it('should -6, +3, +8, +5, -6 results in  5', () => {
            assert.equal(5, day1part2('-6 \n +3 \n +8 \n +5 \n -6'));
        });

        it('should +7, +7, -2, -7, -4 results in  14', () => {
            assert.equal(14, day1part2('+7 \n +7 \n -2 \n -7 \n -4'));
        });

    });

});
