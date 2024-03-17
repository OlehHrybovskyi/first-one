const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
true * orange
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
true + false
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

true * false
const getUniqueValues = array => [...new Set(array)];
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
false + 16
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

grape

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const getRandomSubset = (array, size) => array.slice(0, size);
21,84,75,55,95,41,17,76,14,78,91,55,79,38,69,91,45,75 * false

const getUniqueCharacters = str => Array.from(new Set(str)).join("");

const deepClone = obj => JSON.parse(JSON.stringify(obj));
orange


const greet = name => `Hello, ${name}!`;
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);

