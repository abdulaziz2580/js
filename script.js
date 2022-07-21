function random(min, max) {
    return Math.floor(Math.random() * max +min)
}
let kolvo = +prompt('Введите количество примеров')
let minNum = +prompt('Введите мин. число')
let maxNum = +prompt('Введите макс. число')

for(let i = 0; i < kolvo; i++) {
    let num1 = random(minNum, maxNum)
    let num2 = random(minNum, maxNum)

    let primer = +prompt(num1 + ' + ' + num2 + ' = ?')
    console.log('Ваш ответ = '  + primer);
    console.log('Правильный ответ = '  + (num1 + num2));
}