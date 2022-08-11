// function test(a) {
//     return a * 10
// }

// function test2(a) {
//     return a + a
// }

// function compile(a, f1, f2) {
//     if (typeof (a) == "number") {
//         return f1(a);
//     } else {
//         return f2(a);
//     }
// }
// Это были функции высшего порядка



function giveMoney(money, country, f1, f2) {
    if (country == "Норвегия") {
        return f2(money)
    } else if (country == "Россия") {
        return f1(money)
    }
}

function Rus(money) {
    if (money <= 12000) {
        return money
    } else {
        return (money / 100) * 87
    }
}

function Nor(money) {
    if (money <= 12000) {
        return money
    } else if (money <= 100000) {
        return (money / 100) * 90
    } else {
        return (money / 100) * 67
    }
}


console.log(giveMoney(10000, "Россия", Rus, Nor))