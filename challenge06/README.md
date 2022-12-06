# [Reto #6: Creando adornos navideños](https://adventjs.dev/es/challenges/2022/6)

![Challenge 06](https://adventjs.dev/challenges-2022/6.svg)

Una pareja de entusiastas de la navidad ha creado una empresa de adornos navideños. El primer adorno que quieren fabricar es un cubo que se pone en los árboles.

El problema es que tienen que programar la máquina y no saben cómo hacerlo. Nos han pedido ayuda para lograrlo.

Para <strong>crear los cubos</strong> se le pasa un <strong>número con el tamaño deseado</strong> al programa y este devuelve un `string` con el <strong>diseño de ese tamaño</strong>. Por ejemplo, si le pasamos un 3, el programa debe devolver un cubo de 3x3x3:

```js
const cube = createCube(3)
```

```js
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
```

Como ves el cubo tiene tres caras visualmente. Los símbolos que se usan para construir las caras del cubo son: `/`, `\`, `_` y (espacio en blanco).

Otros ejemplos de cubos:

```js
const cubeOfOne = createCube(1)
```

```js
/\_\
\/_/
```

```js
const cubeOfOne = createCube(2)
```

```js
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
```

<strong>A tener en cuenta:</strong>

- Fíjate bien en los espacios en blanco que hay en el cubo.
- El cubo tiene que ser simétrico.
- Asegúrate de usar los símbolos correctos.
- Cada nueva línea del cubo debe terminar con un salto de línea (\n) excepto la última.

Basado en esta kata de Codewars