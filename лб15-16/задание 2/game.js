document.addEventListener('DOMContentLoaded', () => {
    // Пример создания объекта класса TicTacToe
    const game = new TicTacToe();
    game.start();  // Обращение к методу объекта
});

class TicTacToe {
    // Пример синтаксиса класса (определение конструктора и методов)
    constructor() {
        // Пример обращения внутри класса к полям
        this.cells = document.querySelectorAll('.cell');
        this.resetButton = document.getElementById('reset');

        // Устанавливаем начального игрока и инициализируем игровое поле
        this.currentPlayer = 'X';  // Пример инкапсуляции: поля внутри класса
        this.board = Array(9).fill(null); // Пример инкапсуляции: отслеживание состояния ячеек

        // Определяем все выигрышные комбинации
        this.winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Горизонтальные линии
            [0, 3, 6], [1, 4, 7], [2, 5, 8]  // Вертикальные и диагональные линии
        ];
    }

    // Метод для запуска игры
    start() {
        // Пример использования метода класса
        this.cells.forEach(cell => {
            // Пример использования метода внутри класса
            cell.addEventListener('click', () => this.handleCellClick(cell));
        });

        // Пример использования метода внутри класса
        this.resetButton.addEventListener('click', () => this.resetGame());
    }

    // Обработчик клика по ячейке
    handleCellClick(cell) {
        const index = cell.dataset.index;  // Пример обращения к свойству объекта

        // Проверяем, занята ли ячейка
        if (!this.board[index]) {
            // Записываем ход игрока в массив и отображаем его на экране
            this.board[index] = this.currentPlayer;  // Пример инкапсуляции
            cell.textContent = this.currentPlayer;

            // Пример обращения к методу класса
            if (this.checkWin()) {
                alert(`Игрок ${this.currentPlayer} выиграл!`); // Сообщаем о победе
                this.resetGame(); // Сбрасываем игру
            } else if (this.board.every(cell => cell)) {  // Проверяем, если все ячейки заполнены
                alert('Ничья!'); // Если заполнены и нет победителя, объявляем ничью
                this.resetGame(); // Сбрасываем игру
            } else {
                // Меняем игрока (переключаем между 'X' и 'O')
                this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    }

    // Функция для проверки выигрыша
    checkWin() {
        // Пример использования метода класса
        return this.winPatterns.some(pattern => {
            // Пример использования метода внутри класса
            return pattern.every(index => this.board[index] === this.currentPlayer);
        });
    }

    // Функция для сброса игры
    resetGame() {
        // Очищаем массив состояния игрового поля
        this.board.fill(null);
        // Очищаем текст в каждой ячейке
        this.cells.forEach(cell => (cell.textContent = ''));
        // Устанавливаем текущего игрока обратно на 'X'
        this.currentPlayer = 'X';
    }
}
