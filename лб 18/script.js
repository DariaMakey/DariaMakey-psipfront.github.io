// Функция для валидации формы с использованием RegExp и методов строк
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const interests = document.querySelectorAll('input[name="interests"]:checked');
    const result = document.getElementById('result');

    let errorMessage = "";

    // 1. Проверка имени с использованием test() и RegExp флагов
    const nameRegExp = /^[a-zA-Zа-яА-Я]{3,15}$/; // Проверяем только буквы, от 3 до 15 символов
    if (name === "") {
        errorMessage += "Имя не может быть пустым.<br>";
    } else if (!nameRegExp.test(name)) {
        errorMessage += "Имя должно содержать только буквы (от 3 до 15 символов).<br>";
    }

    // 2. Проверка email через exec() для получения всех частей email
    const emailRegExp = /^\S+@\S+\.\S+$/;
    const emailMatch = emailRegExp.exec(email);
    if (email === "") {
        errorMessage += "Email не может быть пустым.<br>";
    } else if (!emailMatch) {
        errorMessage += "Введите корректный email.<br>";
    } else {
        console.log(`Email разбит на части: ${emailMatch}`);
    }

    // 3. Проверка страны через метод String: search()
    if (country.search(/Россия|США|Канада|Германия/) === -1) {
        errorMessage += "Выберите правильную страну.<br>";
    }

    // 4. Пол - если не выбран
    if (!gender) {
        errorMessage += "Выберите пол.<br>";
    }

    // 5. Интересы - проверка через String.split()
    let interestsArray = Array.from(interests).map((interest) => interest.value);
    if (interestsArray.length === 0) {
        errorMessage += "Выберите хотя бы один интерес.<br>";
    } else {
        console.log(`Интересы (массив): ${interestsArray}`);
    }

    // Если есть ошибки, выводим их
    if (errorMessage) {
        result.innerHTML = `<div style="color: red;">${errorMessage}</div>`;
    } else {
        // 6. Пример использования replace() для изменения строки
        const formattedName = name.replace(/[^a-zA-Zа-яА-Я]/g, ''); // Убираем все символы, кроме букв
        const formattedEmail = email.replace(/@/, ' [at] '); // Заменяем "@" на "[at]"

        // Выводим результат в всплывающем окне
        alert(`Имя: ${formattedName}\nEmail: ${formattedEmail}\nПол: ${gender.value}\nСтрана: ${country}\nИнтересы: ${interestsArray.join(', ')}`);
    }
}

// Пример использования split() для разделения строки
function splitExample() {
    const sentence = "Я учу JavaScript, HTML, CSS и регулярные выражения.";
    const words = sentence.split(/,\s*/); // Разбиваем строку по запятым
    console.log("Разделенные слова:", words);
}

const formData = {
    name: name,
    email: email,
    country: country,
    gender: gender ? gender.value : null,
    interests: Array.from(interests).map((interest) => interest.value),
};

// Проверяем, было ли уже принято соглашение с cookies
document.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem('cookiesAccepted') !== 'true') {
        document.getElementById('cookie-notification').classList.remove('hidden');
    }
});

// Обработчик события для кнопки "Принять"
document.getElementById('accept-cookies').addEventListener('click', function() {
    // Сохраняем в localStorage информацию о принятии cookies
    localStorage.setItem('cookiesAccepted', 'true');
    // Скрываем уведомление
    document.getElementById('cookie-notification').classList.add('hidden');
});
