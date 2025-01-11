const userName = prompt("ім'я користувач")
const clearUserName = userName.trim() //ім'я без пропуску
const firstletter = clearUserName.charAt(0) //перша літера
const capitalLetter = firstletter.toUpperCase() //велика перша літера

if (firstletter == capitalLetter) {
  alert(`Hello, ${clearUserName}! How are you?`)
} else {
  alert(
    `${clearUserName} isn't a name, because a name must start with a capital letter`
  )
}
