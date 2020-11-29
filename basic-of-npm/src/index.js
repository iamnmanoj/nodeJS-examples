const moment = require('moment');
const semver = require('semver');

const a = 10;
const date = moment().format('dddd');

console.log(date);
console.log(semver.valid('a.b.c'));