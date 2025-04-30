# Template TypeScript
## Diseño Sostenible - Ingeniería y Artesanía del Software con TypeScript
![Diseño Sostenible](coverds.png)

Plantilla base para practicar las katas del curso o para empezar un proyecto nuevo.

Incluye:
* TypeScript
* Jest
* ESLint
* Prettier
* Husky

## Instrucciones
* `nvm use`
* `npm install`
* `npm test`

Más información sobre el curso en [diseñosostenible.com](https://diseñosostenible.com).

### ESLint
[TypeScript ESLint Rules](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin)

### Husky hooks
* Pre-commit: Execute npm analize (tsc + eslint --fix)
* Pre-push: Execute test

## Requisitos de la kata

En este ejercicio nuestro objetivo será escribir un programa que descomponga un número natural en sus factores primos. Para ello crearemos la funcion primeFactors a la que le pasamos el número que queremos descomponer y nos devolverá un array con los factores primos ordenados de menor a mayor.
Es decir, los factores primos de un número "x" son un conjunto de números (los cuales tienen que ser primos) que multiplicados entre sí dan como resultado ese número "x". Nótese que un número primo es aquel que sólo es divisible (de forma entera) entre sí mismo o entre 1.

Por tanto, si a la función entrase el número 9, ésta debe retornar un conjunto de números primos ordenados de menor a mayor que multiplicados entre sí dan como resultado 9.


