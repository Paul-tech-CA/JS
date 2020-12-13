// ===========Введите пароль===============

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userInput = prompt('Введите пароль');

console.log(userInput);

if (userInput === null) {
  message = 'Отменено пользователем!';
} else if (userInput === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}

console.log(message);

alert(message);
