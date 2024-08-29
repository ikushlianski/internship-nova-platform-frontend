// test-file.ts

// 1. Ошибка неиспользуемой переменной
const unusedVariable: string = 'This is unused';

// 2. Ошибка типа
const num: number = 'This should be a number';
console.log(num);

// 3. Ошибка синтаксиса
function testFunction(param: string): void {
  console.log(param);
}

// Неправильное использование функции
testFunction(123);

// 4. Ошибка типизации
interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: 'John',
  // Ошибка: ожидается number, но передано string
  age: 'Doe'
};
