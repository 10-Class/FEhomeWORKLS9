// 1)Написать функцию, которая получает в качестве аргумента массив. для расчета суммы четных чисел в массиве. Так же написать  новую функцию для расчета суммы нечетных чисел в массиве. 
// Написать функцию, которая принимает как аргумент две полученные суммы и выводит наибольшее из них.

function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

function sumOddNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            sum += arr[i];
        }
    }
    return sum;
}

function maxSum(sum1, sum2) {
    let max = 0;
    if (sum1 > sum2) {
        max = sum1;
    } else if (sum1 < sum2) {
        max = sum2;
    }
    return max;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSum = sumEvenNumbers(numbers);
const oddSum = sumOddNumbers(numbers);
const max = maxSum(evenSum, oddSum);

console.log("Сумма четных чисел:", evenSum);
console.log("Сумма нечетных чисел:", oddSum);
console.log("Наибольшая сумма:", max);

// 2)Напишите функцию для преобразования градусов Цельсия в градусы Фаренгейта. (Например: console.log(function(0)) => 32);
console.log("=========");

function far(cel) {
    return 1,8 * cel + 32;
}

console.log(far(0));
console.log(far(4));


// 3)Реализуйте функцию, которая принимает на вход массив объектов с информацией о книгах (название, автор, количество страниц и т.д.) и возвращает объект с информацией о самой толстой книге (наибольшее количество страниц).
console.log("=========");


const massive = [
    {
        title: "Маленький принц",
        author: "Антуан де Сент-Экзюпери",
        pages: 32
    },
    
    {
        title: "Алиса в Стране чудес",
        author: "Льюис Кэрролл",
        pages: 48
    },

    {
        title: "Десять негритят",
        author: "Агата Кристи",
        pages: 256
    },

    {
        title: "Планета обезьян",
        author: "Пьер Буль",
        pages: 320
    },

    {
        title: "Вечера на хуторе близ Диканьки",
        author: "Николай Гоголь",
        pages: 136
    },
]

function returnMaxPages (array) {
    let max = 0;
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        const {pages} = array[i];
        if (max < pages) {
            max = pages;
            obj = array[i];
        }
    }
    return obj;
}

console.log(returnMaxPages(massive));



// 4)Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив, содержащий только уникальные числа (без повторений).
console.log("=========");

function uniqueNumbers(arr) {
    let un = [];

    for (let i = 0; i < arr.length; i++) {
        let isUnique = true;
        
        for (let j = 0; j < un.length; j++) {
            if (arr[i] === un[j]) {
                isUnique = false;
            }
        }

        if (isUnique) {
            un.push(arr[i]);
        }
    }

    return un;
}

const num = [1, 2, 3, 4, 2, 3, 5, 6, 1];
console.log(uniqueNumbers(num));


