const userName = prompt("ім'я користувача")
let realName = check(userName)
const clearUserName = realName.trim() //ім'я без пропуску
const firstletter = clearUserName.charAt(0) //перша літера
const capitalLetter = firstletter.toUpperCase() //велика перша літера
function check(x) {
  if (x === undefined || x === null || x.trim() === '') {
    //перевірка на undefined, null, пусту строку
    console.log('помилка')
    return '...'
  } else if (typeof x === 'string' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ\s]+$/.test(x)) {
    //перевірка на символи
    return x
  } else {
    console.log('помилка')
    return '...'
  }
}

if (firstletter == capitalLetter && clearUserName != '...') {
  alert(`Hello, ${clearUserName}! How are you?`)
} else {
  alert(`${userName} isn't a name`)
}
