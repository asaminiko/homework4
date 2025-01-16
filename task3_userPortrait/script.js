function getInfo() {
  let year = parseInt(prompt('Введіть Ваш рік народження'))
  let city = prompt('В якому місті Ви живете?')
  let sport = prompt('Який Ваш улюблений вид спорту?')
  return { year, city, sport }
}
let info = getInfo()
let array = []
function check(x) {
  if (x === undefined || x === null || x.trim() === '') {
    return false
  } else if (typeof x === 'string' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/.test(x)) {
    return x
  } else {
    return false
  }
}

let y = info.year ? info.year : 0
let c = check(info.city)
let s = check(info.sport)
if (c === false) {
  array.push('місто')
  c = '...'
}
if (s === false) {
  array.push('спорт')
  s = '...'
}
function age() {
  if (y === 0 || y > 2024) {
    array.push('вік')
    return 0
  } else {
    return 2025 - y
  }
}

c = c.charAt(0).toUpperCase() + c.slice(1)
s = s.charAt(0).toLowerCase() + s.slice(1)
console.log(`y ${y}`)
console.log(`c ${c}`)
console.log(`s ${s}`)
switch (c) {
  case 'Київ':
    alert(`Ти живеш у столиці України, твій вік ${age()}`)
    break
  case 'Вашингтон':
    alert(`Ти живеш у столиці США, твій вік ${age()}`)
    break
  case 'Лондон':
    alert(`Ти живеш у столиці Англії, твій вік ${age()}`)
    break
  default:
    alert(`Ти живеш у місті ${c}, твій вік ${age()}`)
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
}
if (array.length > 0) {
  alert(`Шкода, що Ви не захотіли ввести ${array.join(', ')}`)
}
