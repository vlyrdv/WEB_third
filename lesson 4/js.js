let obj = [{
        name: "Микроволновка",
        title: "loremloremloremloremlorem",
        price: 5700,
        img: "images/микроволновка.webp",
        popularity: 5.0
    }, {
        name: "Холодильник",
        title: "loremloremloremloremlorem",
        price: 10200,
        img: "images/микроволновка.webp",
        popularity: 1.2
    },
    {
        name: "Чайник",
        title: "loremloremloremloremlorem   ",
        price: 2000,
        img: "images/микроволновка.webp",
        popularity: 2.4
    }
]
let obj2 = {}

let funcs = {
    sort_price: function (a, b) {
        if (a.price > b.price) {
            return 1;
        } else {
            return -1;
        }
    },
    sort_price_rev: function (a, b) {
        if (a.price < b.price) {
            return 1;
        } else {
            return -1;
        }
    },
    sort_alph: function (a, b) {
        if (a.name > b.name) {
            return 1;
        } else {
            return -1;
        }
    },
    sort_alph_rev: function (a, b) {
        if (a.name < b.name) {
            return 1;
        } else {
            return -1;
        }
    },
    sort_popular: function (a, b) {
        if (a.popularity > b.popularity) {
            return 1;
        } else {
            return -1;
        }
    },
    sort_popular_rev: function (a, b) {
        if (a.popularity < b.popularity) {
            return 1;
        } else {
            return -1;
        }
    }

}
for (i of obj) {
    $(".row").append(
        `<div class="col s4">
            <div class="card">
                <div class="card-image">
                    <img src='${i.img}'>
                    <span class="card-title" style="color: black;">${i.name}</span>
                </div>
                <div class="card-content">
                    <p>${i.price}Р</p>
                </div>
                <div class="card-action">
                    <a href="#">Купить</a>
                </div>
            </div>
        </div>
        `
    );
}

// function sort_price(a, b) {
//     if (a.price > b.price) {
//         return 1;
//     } else {
//         return -1;
//     }
// }

// function sort_price_rev(a, b) {
//     if (a.price > b.price) {
//         return -1;
//     } else {
//         return 1;
//     }
// }

// function sort_alph(a, b) {
//     if (a.name > b.name) {
//         return 1;
//     } else {
//         return -1;
//     }
// }

// function sort_alph_rev(a, b) {
//     if (a.name > b.name) {
//         return -1;
//     } else {
//         return 1;
//     }
// }

// function sort_popular(a, b) {
//     if (a.popularity > b.popularity) {
//         return 1;
//     } else {
//         return -1;
//     }
// }

// function sort_popular_rev(a, b) {
//     if (a.popularity > b.popularity) {
//         return -1;
//     } else {
//         return 1;
//     }
// }


// function const_price(fst, scd) {
//     let newMas = [];
//     for (i in obj) {
//         if (i.price >= fst && i.price <= scd) {
//             newMas.push(i)
//         }
//     }
// }

// for (i of obj.sort()) {
//     $(".row").append(
//         `<div class="col s4">
//             <div class="card">
//                 <div class="card-image">
//                     <img src='${i.img}'>
//                     <span class="card-title" style="color: black;">${i.name}</span>
//                 </div>
//                 <div class="card-content">
//                     <p>${i.price}Р</p>
//                 </div>
//                 <div class="card-action">
//                     <a href="#">Купить</a>
//                 </div>
//             </div>
//         </div>
//         `
//     );
// }

function vision(fnc, from, to) {
    console.log(fnc, from, to)
    for (i of obj.sort(funcs[fnc])) {
        if (i.price >= from && i.price <= to) {
            $(".row").append(
                `<div class="col s4">
            <div class="card">
                <div class="card-image">
                    <img src='${i.img}'>
                    <span class="card-title" style="color: black;">${i.name}</span>
                </div>
                <div class="card-content">
                    <p>${i.price}Р</p>
                </div>
                <div class="card-action">
                    <a href="#">Купить</a>
                </div>
            </div>
        </div>
        `
            );
        }
    }
}
// console.log($("#sort").val(), $("#from").val(), $("#to").val())
// vision($("#sort").value(), $("#from").value(), $("#to").value())

$("#sort").on("change", () => {
    $(".col").remove()
    vision($("#sort").val(), $("#from").val(), $("#to").val());
})
$("#pricevalue").on("click", () => {
    $(".col").remove()
    vision($("#sort").val(), $("#from").val(), $("#to").val());
})