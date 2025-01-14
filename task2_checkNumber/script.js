function getInput() {
  let input = document.getElementById('input1').value
  if (100 <= input && input <= 999) {
    //перевірка на тризначність
    console.log(`Число ${input} тризначне`)
  } else {
    console.log(`Помилка, ${input} не тризначне число`)
    return false //функція зупинена
  }
  let i = 0
  input.charAt(0) == input.charAt(1)
    ? ++i
    : console.log('цифри в 1 умові не однакові')
  input.charAt(1) == input.charAt(2)
    ? ++i
    : console.log('цифри в 2 умові не однакові')
  input.charAt(0) == input.charAt(2)
    ? ++i
    : console.log('цифри в 3 умові не однакові')
  switch (i) {
    case 3:
      console.log('Так, всі цифри однакові')
      break
    case 1:
      console.log('Є однакові цифри')
      break
    case 0:
      console.log('Немає однакових цифр')
      break
  }
}
