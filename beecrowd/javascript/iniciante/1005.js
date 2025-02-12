"use strict";

export function problem(inputLines) {
  let A = Number(inputLines[0]);
  let B = Number(inputLines[1]);

  const pesoA = 3.5;
  const pesoB = 7.5;

  const somaDosPesos = pesoA + pesoB;

  let media = (A * pesoA + B * pesoB) / somaDosPesos;

  console.log(`MEDIA = ${media.toFixed(5)}`);
}