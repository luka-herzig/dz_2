// Створення змінних для зберігання температури за Цельсієм та Фаренгейтом
let tempCelsius = 25;

// Переведення температури з Цельсія у Фаренгейти за допомогою формули
let tempFahrenheit = (tempCelsius * 9/5) + 32;

console.log(tempCelsius);
console.log(tempFahrenheit);


// Створення змінної для зберігання кількості днів у місяці
let daysInMonth = 30; // Приклад для місяця з 30 днями

// Обчислення кількості годин та хвилин у цьому місяці
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;

// Виведення результату в консоль
console.log(hoursInMonth);
console.log(minutesInMonth);


//Змінні для зберігання рівня здоров'я та енергії гравця в грі
const healthy = 100; //Здоров'я
const energy = 100; //Енергія
const killHealty = healthy - 56;
const killEnergy = energy - 62;

// Виведення результату в консьоль
 console.log(killHealty);
  console.log(killEnergy);


// Змінна для зберігання суми покупки в магазині
 const sum = 1234;
 const discount = 0.10;
 const discountAmout = sum * (1 - discount); //Тут ми вказали що сума (1234) помножена на 1 і ми від цього віднімаємо знижку ($discount)

 // Виведення результату в консьоль
 console.log(discountAmout);


 //Я не знаю що таке плаваюча кома тому роблю те що знаю
 const number = 12.93;
 const num = Math.floor(number);

 // Виведення результату в консоль
 console.log(num);

 //6
 const myNumber = "34.21";
 console.log(parseFloat(myNumber));

 //7 
 const myString = "14";
 console.log(parseInt(myString));

 //8
 const myNum = 32;
 console.log(Math.sqrt(myNum));
 
 //9
let integerValue = 42;
let stringValue = "123";
let parsedValue = parseInt(stringValue);

console.log(parsedValue);
let stringifiedValue = integerValue.toString();

console.log(stringifiedValue);
