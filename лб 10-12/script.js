function calculateFormula(x, y) {
    try {
        // Проверка на отрицательное число под корнем
        if (x < 0) {
            throw "Ошибка: под корнем не может быть отрицательное число!";
        }

        // Вычисление значения формулы
        let result = Math.log(Math.abs((y - Math.sqrt(Math.abs(x))) * (x - y / x + Math.pow(x, 2) / 4)));

        // Возвращаем результат расчета
        return result;
    } catch (error) {
        // Обработка исключений
        alert(error);
        return null;
    }
}

function handleSubmit() {
    // Получаем значения x и y из формы
    let x = parseFloat(document.getElementById('inputX').value);
    let y = parseFloat(document.getElementById('inputY').value);

    // Выполняем расчет с помощью функции
    let result = calculateFormula(x, y);

    // Выводим результат на страницу, если он не равен null
    if (result !== null) {
        document.getElementById('result').textContent = 'Результат вычислений: ' + result.toFixed(4);
    }
}
// Функция для обработки формы и расчета формулы
function handleSubmit() {
    // Получаем значения x и y из формы
    let x = parseFloat(document.getElementById('inputX').value);
    let y = parseFloat(document.getElementById('inputY').value);

    // Выполняем расчет по вашей формуле
    let result = calculateFormula(x, y);

    // Выводим результат на страницу, если он не равен null
    if (result !== null) {
        document.getElementById('result').textContent = 'Результат вычислений: ' + result.toFixed(4);
    }
}

// Функция для расчета формулы
function calculateFormula(x, y) {
    try {
        // Проверка на отрицательное число под корнем
        if (x < 0) {
            throw "Ошибка: под корнем не может быть отрицательное число!";
        }

        // Вычисление значения формулы
        let result = Math.log(Math.abs((y - Math.sqrt(Math.abs(x))) * (x - y / x + Math.pow(x, 2) / 4)));

        // Возвращаем результат расчета
        return result;
    } catch (error) {
        // Обработка исключений
        alert(error);
        return null;
    }
}

// Вызов функций при загрузке страницы
window.onload = function() {
    workWithArray();
    printName();
    workWithStrings();
};
