const numbers = [1, 5, 8, 12, 3, 15, 7, 20];
const words = ["кіт", "собака", "миша", "папуга", "хомяк"];

const countItems = (array, condition) => {
  let count = 0;
  for (let item of array) {
    if (condition(item)) {
      count += 1;
    }
    }
    return count;
};

// Умови для перевірки:
const isEven = (num) => num % 2 === 0;
const isLarge = (num) => num > 10;
const isShort = (word) => word.length <= 3;

// Тестування
console.log("Парних чисел:", countItems(numbers, isEven));
console.log("Чисел більше 10:", countItems(numbers, isLarge));
console.log("Коротких слів:", countItems(words, isShort));

const calculate = (a, b, operation) => {
    return operation(a, b);
}

const add = (a, b) => { const result = a + b; return result; };
const subtract = (a, b) => { const result = a - b; return result; };
const multiply = (a, b) => { const result = a * b; return result; };
const divide = (a, b) => {
    if ( a  === 0 || b === 0) {
        return "error" ;
    }
    const result = a / b;
    return result;
};


// Тестування
console.log(calculate(10, 5, add));      // Повинно показати 15
console.log(calculate(10, 5, subtract)); // Повинно показати 5
console.log(calculate(10, 5, multiply)); // Повинно показати 50
console.log(calculate(10, 5, divide));   // Повинно показати 2
console.log(calculate(10, 0, divide));   // Повинно показати помилку

const repeatMessage = (times, messageCreator) => {
    for (let i = 0; i < times; i += 1) {
         messageCreator(i);
    };
};

const ownMessage = (num) => console.log(`${num + 1}. Hello world!`)

repeatMessage(7, ownMessage);