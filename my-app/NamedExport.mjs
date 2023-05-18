import ui, {a, b, d} from './DefaultExport.mjs';

// 'ui' :- is default value exporter we can change name of that
// 'a, b, c' :- We can not change the value of these constant because that is not default export value

console.log(ui); // That is print default value that is set in DefaultExport.mjs file
// to print run command : $ node NamedExport.mjs

console.log(a); // Named export
console.log(b);
console.log(d); 