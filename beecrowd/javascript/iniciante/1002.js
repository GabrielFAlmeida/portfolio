"use strict";

export function problem(inputLines) {
  let raio = Number(inputLines[0]);

  let area = 3.14159 * Math.pow(raio, 2);

  console.log(`A=${area.toFixed(4)}`);
}
