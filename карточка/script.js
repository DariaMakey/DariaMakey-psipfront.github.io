// Функция для записи данных в cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция для получения значения из cookie по имени
function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Функция для очистки всех cookie
function clearCookies() {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        // Устанавливаем cookie с истекшей датой
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
    }
}

// Обработчик отправки формы
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Сохраняем данные в cookie на 7 дней
    setCookie('name', name, 7);
    setCookie('email', email, 7);
    setCookie('birthdate', `${day}-${month}-${year}`, 7);

    // Выводим данные на страницу
    const result = `
        <h3>Данные формы:</h3>
        <p>Имя: ${name}</p>
        <p>Email: ${email}</p>
        <p>Дата рождения: ${day}-${month}-${year}</p>
    `;
    document.getElementById('result').innerHTML = result;

    // Также выводим данные из cookie
    showCookies();
});

// Функция для отображения данных из cookie
function showCookies() {
    const name = getCookie('name');
    const email = getCookie('email');
    const birthdate = getCookie('birthdate');

    if (name || email || birthdate) {
        const cookieResult = `
            <h3>Данные из cookie:</h3>
            <p>Имя: ${name}</p>
            <p>Email: ${email}</p>
            <p>Дата рождения: ${birthdate}</p>
        `;
        document.getElementById('cookie-result').innerHTML = cookieResult;
    }
}

// Функция для очистки cookie и обновления страницы
document.getElementById('clear-cookies').addEventListener('click', function () {
    clearCookies(); // Очищаем cookie
    document.getElementById('cookie-result').innerHTML = '<p>Cookie очищены.</p>'; // Очищаем вывод
});

// Функция для сохранения данных в JSON-файл
document.getElementById('download-json').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const day = document.getElementById('day').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;

    // Создаем объект с данными
    const data = {
        name: name,
        email: email,
        birthdate: `${day}-${month}-${year}`
    };

    // Преобразуем объект в JSON
    const json = JSON.stringify(data, null, 2);

    // Создаем Blob из JSON-данных
    const blob = new Blob([json], { type: 'application/json' });

    // Создаем ссылку для скачивания
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json'; // Название файла
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // Убираем ссылку после скачивания
    URL.revokeObjectURL(url); // Освобождаем память
});

// При загрузке страницы сразу отображаем cookie, если они есть
window.onload = function() {
    showCookies();
};

// Обработчик отправки формы
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Получаем значения полей формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const day = document.getElementById('day').value.trim();
    const month = document.getElementById('month').value.trim();
    const year = document.getElementById('year').value.trim();

    // Проверка на пустые поля
    if (!name || !email || !day || !month || !year) {
        alert("Пожалуйста, заполните все поля!");
        return; // Выход из функции, если есть пустые поля
    }

    // Сохраняем данные в cookie на 7 дней
    setCookie('name', name, 7);
    setCookie('email', email, 7);
    setCookie('birthdate', `${day}-${month}-${year}`, 7);

    // Выводим данные на страницу
    const result = `
        <h3>Данные формы:</h3>
        <p>Имя: ${name}</p>
        <p>Email: ${email}</p>
        <p>Дата рождения: ${day}-${month}-${year}</p>
    `;
    document.getElementById('result').innerHTML = result;

    // Также выводим данные из cookie
    showCookies();
});

