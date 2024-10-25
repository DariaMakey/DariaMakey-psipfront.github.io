// 1. Что понимается под объектом в Java Script? Приведите примеры известных вам объектов в Java Script.
const answer1 = `
    <h2>1. Что понимается под объектом в JavaScript?</h2>
    <p>Объект в JavaScript — это структура данных, которая хранит данные и инструкции, описывающие их поведение. 
    Объекты представляют собой коллекции свойств, где каждое свойство ассоциировано с именем (ключом) и значением. 
    Объекты могут содержать примитивные типы данных, массивы, другие объекты, а также функции (методы).</p>
    <p>Примеры объектов в JavaScript:</p>
    <ul>
        <li>Объект <code>Math</code> для выполнения математических операций.</li>
        <li>Объект <code>Date</code> для работы с датами и временем.</li>
        <li>Объект <code>Array</code> для работы с массивами.</li>
        <li>Объект <code>window</code> для работы с глобальными функциями и свойствами в браузере.</li>
    </ul>
`;

// 2. Приведите пример описания объекта в JS.
const answer2 = `
    <h2>2. Пример описания объекта в JavaScript</h2>
    <pre>
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    startEngine: function() {
        console.log('Engine started');
    }
};
    </pre>
`;

// 3. Приведите пример доступа к свойствам объекта в JS
const answer3 = `
    <h2>3. Пример доступа к свойствам объекта в JavaScript</h2>
    <pre>
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};

console.log(car.brand); // доступ через точку
console.log(car['model']); // доступ через квадратные скобки
    </pre>
`;

// 4. Какая команда в JS позволяет выполнить удаление свойства. Приведите пример.
const answer4 = `
    <h2>4. Удаление свойства объекта в JavaScript</h2>
    <p>Для удаления свойства объекта используется оператор <code>delete</code>.</p>
    <pre>
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};

delete car.year; // Удаляет свойство 'year'
console.log(car); // { brand: 'Toyota', model: 'Camry' }
    </pre>
`;

// 5. Какая команда в JS позволяет выполнить проверку существования свойства. Приведите пример.
const answer5 = `
    <h2>5. Проверка существования свойства в объекте</h2>
    <p>Для проверки существования свойства объекта используется оператор <code>in</code> или метод <code>hasOwnProperty</code>.</p>
    <pre>
const car = {
    brand: 'Toyota',
    model: 'Camry'
};

console.log('brand' in car); // true
console.log(car.hasOwnProperty('model')); // true
console.log('year' in car); // false
    </pre>
`;

// 6. Какая команда в JS позволяет выполнить перебор свойств объекта. Приведите пример.
const answer6 = `
    <h2>6. Перебор свойств объекта в JavaScript</h2>
    <p>Для перебора свойств объекта можно использовать цикл <code>for...in</code>.</p>
    <pre>
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};

for (let key in car) {
    console.log(key + ': ' + car[key]);
}
    </pre>
`;

// Вывод всех ответов на страницу
document.getElementById('output').innerHTML = answer1 + answer2 + answer3 + answer4 + answer5 + answer6;
