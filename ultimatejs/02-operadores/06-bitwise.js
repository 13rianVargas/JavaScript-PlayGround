// Decimal: 0 1 2 3 4 5 6 7 8 9
// Binary: 0 1

// bit: 0 1

// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// Byte: 00000101 -> 5
// Byte: 00000110 -> 6

// El BitWise es un operador que permite realizar operaciones a nivel de bits.

console.log("\nBitwise OR");
// Toma la cadena de Bytes y crea un nuevo Byte con base a si uno de los numeros contiene un 1 dentro.
console.log(1 | 3);
//   00000001 | 00000011 = 00000011 -> 3
console.log(1 | 4);
//   00000001 | 00000100 = 00000101 -> 5
console.log(3 | 5);
//   00000011 | 00000101 = 00000111 -> 7

console.log("\nBitwise AND");
// Toma la cadena de Bytes y crea un nuevo Byte con base a si ambos numeros contienen un 1 dentro.
console.log(1 & 3);
//   00000001 & 00000011 = 00000001 -> 1
console.log(1 & 4);
//   00000001 & 00000100 = 0000000 -> 0
console.log(3 & 5);
//   00000011 & 00000101 = 00000001 -> 1