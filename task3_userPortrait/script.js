function getInfo() {
  let year = parseInt(prompt('Введіть Ваш рік народження'))
  let city = prompt('В якому місті Ви живете?')
  let sport = prompt('Який Ваш улюблений вид спорту?')
  return { year, city, sport }
}
let info = getInfo()
let array = [] // щоб дізнатись, що саме не ввів користувач
function check(x) {
  if (x === undefined || x === null || x.trim() === '') {
    //перевірка на undefined, null, пусту строку
    return false
  } else if (typeof x === 'string' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/.test(x)) {
    //перевірка на символи
    return x
  } else {
    return false
  }
}

function age(y) {
  if (y === undefined || y === null || isNaN(y) || y > 2024 || y < 1900) {
    //перевірка на undefined, null, isNaN(), число більше 2024 або менше 1900
    return false
  } else if (typeof y === 'string' && y.trim() === '') {
    //перевірка на пусту строку
    return false
  } else {
    return 2025 - y
    //рахую вік користувача
  }
}
let y = age(info.year)
let c = check(info.city)
let s = check(info.sport)
if (c === false) {
  array.push('місто') // додаю у масив те, що не ввів користувач
  c = '...'
}
if (s === false) {
  array.push('спорт')
  s = '...'
}
if (y === false) {
  array.push('вік')
  y = '...'
}
c = c.trim().charAt(0).toUpperCase() + c.trim().slice(1).toLowerCase() // місто буде починатися з великої букви, а інші букви будуть з маленької. trim() прибирає пробіли
s = s.trim().toLowerCase() //спорт буде складатися з маленьких букв. trim() прибирає пробіли
console.log(`y ${y}`)
console.log(`c ${c}`)
console.log(`s ${s}`)
switch (c) {
  case 'Київ':
    alert(`Ти живеш у столиці України, твій вік ${y}`)
    break
  case 'Вашингтон':
    alert(`Ти живеш у столиці США, твій вік ${y}`)
    break
  case 'Лондон':
    alert(`Ти живеш у столиці Англії, твій вік ${y}`)
    break
  default:
    alert(`Ти живеш у місті ${c}, твій вік ${y}`)
    break
}
switch (s) {
  case 'плавання':
    alert('Круто! Хочеш бути як Клочкова Яна?')
    break
  case 'бокс':
    alert('Круто! Хочеш бути як Ломаченко Василь?')
    break
  case 'фехтування':
    alert('Круто! Хочеш бути як Харлан Ольга?')
    break
  case 'немає':
    alert("Спорт корисний для твого здоров'я, пошукай що подобається саме тобі")
    break
  default: //додала default щоб виводився спорт у будь-якому випадку
    alert(`Вид спорту: ${s}`)
}
if (array.length > 0) {
  alert(`Шкода, що Ви не захотіли ввести ${array.join(', ')}`) //виводить якщо користувач щось не ввів
}
