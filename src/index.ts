import { merge } from "./merge.js";

const array1 = [1, 4, 7];
const array2 = [2, 5, 8];
const array3 = [9, 6, 3];

const merged = merge(array1, array2, array3);
console.log(merged); 