cards = [{
        content: {
            title: "Test 1",
            description: "test",
        },
        description: {
            text: "testtest"
        }
    },
    {
        content: {
            title: "Test 2",
            description: "test",
        },
        description: {
            text: "test2test"
        }
    }
]


newCard = {
    content: {
        title: "",
        description: "",
    },
    description: {
        text: ""
    }
}

function assignNewCard(card) {
    cards.push(JSON.parse(JSON.stringify(card)));
}




console.log(cards)
assignNewCard(newCard)
newCard.content.title = 'test3'
console.log(cards[2].content.title) // тоже будет 'test3'





N2


let data = [{
        brand: "Apple",
        name: "MacBook",
        model: "Air 13 2022",
        type: "Notebook",
        cost: "1300",
        color: "silver"
    },
    {
        brand: "Samsung",
        name: "YADAUN",
        model: "S22",
        type: "Smartphone",
        cost: "1500",
        color: "gray"
    }
]

function sortCost1(a, b) {
    if (a.brand > b.brand) {
        return 1
    } else {
        return -1
    }
}

function sortCost2(a, b) {
    if (a.cost > b.cost) {
        return 1
    } else {
        return -1
    }
}

function sortCost3(a, b) {
    let min = 1000;
    let max = 3000;

    function range(a) {
        if (a.cost >= min && a.cost <= max) {
            return a;
        }
    }
}

function sortCost4(a, b) {
    if (a.color > b.color) {
        return 1
    } else {
        return -1
    }
}