//task 1
const menu = prompt("Оберіть кава, чай або сік");
const drinks = ["чай", "кава", "сік"];
let result; 

switch(menu) {
case drinks[0] : result = "Ви обрали чай"
break
case drinks[1] : result = "Ви обрали каву"
break
case drinks[2]: result = "Ви обрали сік"
break
default: result = "Такого наразі немає"
}
alert(result);

//task 2
const weekDay = prompt("День тижня");
let day = ["понеділок", "вівторок", "середа", "четвер", "п'ятниця", "субота", "неділя"];
switch(weekDay) {
    case day[0] : alert("Сьогодні робочий день");
    break
    case day[1] : alert("Сьогодні робочий день");
    break
    case day[2] : alert("Сьогодні робочий день");
    break
    case day[3] : alert("Сьогодні робочий день");
    break
    case day[4] : alert("Сьогодні робочий день, але вже завтра вихідний");
    break
    case day[5] : alert("Сьогодні вихідний");
    break
    case day[6] : alert("Сьогодні вихідний");
    break
}
//task 3
const numberMonth = prompt("Введіть цифрою номер місяця, щоб дізнатися цого назву та пору року");
const months1 = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
switch(numberMonth) {
    case months1[0] : alert("Січень, зима");
    break
    case months1[1] : alert("Лютий, зима");
    break
    case months1[2] : alert("Березень, весна");
    break
    case months1[3] : alert("Квітень, весна");
    break
    case months1[4] : alert("Травень, весна");
    break
    case  months1[5] : alert("Червень, літо");
    break
    case  months1[6] : alert("Липень, літо");
    break
    case months1[7] :  alert("Серпень, літо");
    break
    case months1[8] :  alert("Вересень, осінь");
    break 
    case months1[9] : alert("Жоітень, осінь");
    break
    case months1[10] : alert("Листопад, осінь");
    break
    case months1[11] : alert("Грудень, зима");
    break
}

//task 4
const numberOfDays = prompt("Введіть номер місяця, щоб дізнатися кількість днів у ньому");
const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
switch(numberOfDays) {
    case months[0] : alert("Січень 31 день");
    break
    case months[2] : alert("Березень 31 день");
    break
    case months[4] : alert("Травень 31 день");
    break
    case months[6] : alert("Липень 31 день");
    break
    case months[7] : alert("Серпень 31 день");
    break
    case months[9] : alert("Жовтень 31 день");
    break
    case months[11] : alert("Грудень 31 день");
    break
    case months[1] : alert("Лютий 29 днів");
    break
    case months[3] : alert("Квітень 30 днів");
    break
    case months[5] : alert("Червень 30 днів");
    break
    case months[8] : alert("Вересень 30 днів");
    break
    case months[10] : alert("Листопад 30 днів");
    break
}

//task 5

const enter = prompt("Введіть колір! червоний, жовтий або зелений")
const color = enter
switch (color) {
    case "червоний": alert("стоп");
        break;
    case "зелений": alert("іди")
        break
    case "жовтий": alert("чекай")
        break
    default: alert("такої команди немає")
}
// Task 6
let x = prompt("Оберіть число!");
let y = prompt("Оберіть число!");
const z = prompt("Якщо ви оберете 1, то виконається дія + . Якщо ви оберете 2, то виконається дія - . Якщо ви оберете 3, то виконається дія * . Якщо ви оберете 4, то виконається дія /");
x = parseInt(x)
y = parseInt(y)
let results;
switch (z) {
  case "1":
    results = x + y;
    break;
  case "2":
    results = x - y;
    break;
  case "3":
    results = x * y;
    break;
  case "4":
    results = x / y;
    break;
    default: results = "Такої команди не існує"
}
alert(results)
