function getInput() {
  let input = document.getElementById('input1').value
  console.log(input)
  function check(input) {
    if (
      input === undefined ||
      input === null ||
      input.length != 3 ||
      (typeof input === 'string' && input.trim() === '')
    ) {
      //перевірка на undefined, null, пусту строку
      return false
    } else {
      return input
    }
  }
  let inp = check(input)
  if (inp === false) {
    console.log('помилка')
  } else {
    let arr = inp.split('').map(Number) //додаю у масив
    let i = 0
    arr[0] == arr[1] ? ++i : false //порівнюю індекси
    arr[1] == arr[2] ? ++i : false
    arr[0] == arr[2] ? ++i : false
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
}
