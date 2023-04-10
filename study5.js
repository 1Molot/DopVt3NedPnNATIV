// const topCities2 = [
//     {
//         name: "New York",
//         country: "USA",
//         population: 8399000,
//         attractions: ["Statue of Liberty", "Central Park", "Empire State Building"]
//     },
//     {
//         name: "London",
//         country: "UK",
//         population: 8982000,
//         attractions: ["Big Ben", "Buckingham Palace", "London Eye"]
//     },
//     {
//         name: "Tokyo",
//         country: "Japan",
//         population: 13929286,
//         attractions: ["Tokyo Skytree", "Imperial Palace", "Senso-ji Temple"]
//     },
//     {
//         name: "Paris",
//         country: "France",
//         population: 2141000,
//         attractions: ["Eiffel Tower", "Louvre Museum", "Champs-Elysees"]
//     },
//     {
//         name: "Sydney",
//         country: "Australia",
//         population: 5312000,
//         attractions: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach"]
//     }
// ]
//
// const a = topCities2.map(el=>el)
// console.log(a)

//Используя метод map, напишите функцию, которая принимает массив чисел и возвращает новый массив, где каждый элемент в два раза больше исходного элемента:
    function doubleNumbers(arr) {

        return arr.map(el=>el*2)

    }

// console.log(doubleNumbers([2, 5, 7]));

//Используя метод filter, напишите функцию, которая принимает массив чисел и возвращает новый массив, содержащий только четные числа:
    function filterEvenNumbers(arr) {
        return arr.filter(el=>!(el%2))
    }

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))

// Используя метод reduce, напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов в массиве:
function sumNumbers(arr) {
}

// console.log(sumNumbers([2, 5, 7]));

// 1. Напишите функцию, которая принимает объект и добавляет свойство "age" со значением 0, если этого значения в принципе нет,
// если age имеется, просто вывести скопированный объект .

function addAge(obj) {
    return (obj.age) ? {...obj} : {...obj, age: 0}
}

// const person1 = {name: "John"};
// const person2 = {name: "Jane", age: 30};

// console.log(addAge(person1)); // { name: "John", age: 0 }
// console.log(addAge(person2));


//2. Напишите функцию, которая принимает массив и возвращает его копию с добавленным элементом.
function addElement(arr, element) {
    return [...arr,element]
}
 const numbers = [1, 2, 3];
// console.log(addElement(numbers, 4)); // [1, 2, 3, 4]
// console.log(numbers); // [1, 2, 3]


//3. Напишите функцию, которая принимает объект и возвращает его копию с удаленным свойством "age".
function deleteAge(obj) {
    const copyobj = {...obj}
    delete copyobj.age
    return copyobj

    // const {age,...rest} = {...obj}
    // return rest
}
// const person = { name: "John", age: 30 };
// console.log(deleteAge(person)); // { name: "John" }
// console.log(person); // { name: "John", age: 30 }

//4. Напишите функцию, которая принимает массив и возвращает его копию с удаленным последним элементом.
// function removeElement(arr) {}
// const numbers = [1, 2, 3];
// console.log(removeElement(numbers)); // [1, 2]
// console.log(numbers); // [1, 2, 3]

//5. Напишите функцию, которая принимает объект и возвращает его копию с добавленным свойством "isAdmin" со значением false.
// function addAdminFlag(obj) {}
// const person = { name: "John", age: 30 };
// console.log(addAdminFlag(person)); // { name: "John", age: 30, isAdmin: false }
// console.log(person); // { name: "John", age: 30 }

//6. Напишите функцию, которая принимает объект и возвращает его копию с измененным свойством "name" на "Jane".
// function changeName(obj) {}
// const person = { name: "John", age: 30 };
// console.log(changeName(person)); // { name: "Jane", age: 30 }
// console.log(person); // { name: "John", age: 30 }

//7. Напишите функцию, которая принимает массив и возвращает его копию с отсортированными элементами.
// function sortArray(arr) {}
// const letters = ["c", "a", "b"];
// console.log(sortArray(letters)); // ["a", "b", "c"]
// console.log(letters); //

const topCities = [
    {
        name: "New York",
        country: "USA",
        population: 8399000,
        attractions: ["Statue of Liberty", "Central Park", "Empire State Building"]
    },
    {
        name: "London",
        country: "UK",
        population: 8982000,
        attractions: ["Big Ben", "Buckingham Palace", "London Eye"]
    },
    {
        name: "Tokyo",
        country: "Japan",
        population: 13929286,
        attractions: ["Tokyo Skytree", "Imperial Palace", "Senso-ji Temple"]
    },
    {
        name: "Paris",
        country: "France",
        population: 2141000,
        attractions: ["Eiffel Tower", "Louvre Museum", "Champs-Elysees"]
    },
    {
        name: "Sydney",
        country: "Australia",
        population: 5312000,
        attractions: ["Sydney Opera House", "Harbour Bridge", "Bondi Beach"]
    }
];

//8. Напишите функцию, которая удалит достопримечательность из объекта города в массиве topCities. Функция должна принимать
// параметры: индекс города в массиве, из которого нужно удалить достопримечательность, и название достопримечательности,
// которую нужно удалить.
function removeAttraction(indexCity, attractionName) {}
// console.log(removeAttraction(1, "Big Ben"))
// console.log(removeAttraction(4, "Harbour Bridge"))

//9***. Напишите функцию, которая сравнит население двух городов в массиве topCities и вернет объект с информацией о том,
// какой город является более населенным. Функция должна принимать параметры: индексы двух городов в массиве, которые нужно сравнить.
function comparePopulation(cityIndex1, cityIndex2) {}

// console.log(removeAttraction(1, 2))
// console.log(removeAttraction(4, 0))

//10 Изменить название первого города в массиве topCities на "Los Angeles".

//11 Удалить последний город из массива topCities.

//12 Добавить новую достопримечательность "Golden Gate Bridge" в город "San Francisco".

//13 Отсортировать города по населению в порядке убывания.(sort)
