'use strict';

module.exports = data => data
    .trim()
    .split('\n')
    .reduce((total, curr) => total + Number(curr), 0);
