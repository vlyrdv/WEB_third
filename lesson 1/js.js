let books = {
    "1": ["Валерий", "Как жить дауном", "15.11.2005"],
    "2": ["Федя", "Как жить с огромным хуем", "01.01.2015"],
    "3": ["Вадим", "Как жить с огромной дурой", "07.08.2001"],
}




function delete_book(id) {
    if (id in books) {
        delete books[id]
        alert("Книга удалена")
    } else {
        delete_box.style.display = "none";
        alert("Книги с таким ID не существует")
    }
}

function select(id) {
    let flag = false;
    for (i in books) {
        if (i == id) {
            flag = i;
            break
        }
    }
    if (flag) {
        book_id.innerText = "#" + id
        book_author.innerText = books[i][0]
        book_name.innerText = books[i][1]
        book_date.innerText = books[i][2]
    } else {
        alert("Книги с таким ID не найдено")
        book_id.innerText = ""
        book_author.innerText = ""
        book_name.innerText = ""
        book_date.innerText = ""
    }
}

function insert(id, author, name, date) {
    books[id] = [author, name, date]
    console.log(books)
}

function update(id, author, name, date) {
    if (id in books) {
        books[id] = [author, name, date]
    } else {
        alert("Книги с таким ID не найдено")
    }
}







let insert_btn_box = document.getElementById("insert_btn_box");
let insert_box = document.getElementById("insert_box");

insert_btn_box.addEventListener("click", () => {
    if (insert_box.style.display == "none") {
        insert_box.style.display = "flex";
    } else {
        insert_box.style.display = "none";
    }
})



let update_btn_box = document.getElementById("update_btn_box");
let update_box = document.getElementById("update_box");

update_btn_box.addEventListener("click", () => {
    if (update_box.style.display == "none") {
        update_box.style.display = "flex";
    } else {
        update_box.style.display = "none";
    }
})


let delete_btn_box = document.getElementById("delete_btn_box");
let delete_box = document.getElementById("delete_box");

delete_btn_box.addEventListener("click", () => {
    if (delete_box.style.display == "none") {
        delete_box.style.display = "flex";
    } else {
        delete_box.style.display = "none";
    }
})



let book_id = document.getElementById("book_id");
let book_author = document.getElementById("book_author");
let book_name = document.getElementById("book_name");
let book_date = document.getElementById("book_date");

let search = document.getElementById("search");
let start_search = document.getElementById("start_search");
start_search.addEventListener("click", () => {
    select(search.value)
})



let insert_name = document.getElementById("insert_book_name")
let insert_author = document.getElementById("insert_book_author")
let insert_date = document.getElementById("insert_book_date")
let start_insert = document.getElementById("start_insert")

start_insert.addEventListener("click", () => {
    if (insert_name.value == "") {
        alert("Введите все данные")
    }
    if (insert_author.value == "") {
        alert("Введите все данные")
    }
    if (insert_date.value == "") {
        alert("Введите все данные")
    } else {
        let data = Object.keys(books);
        let max_ = 0
        for (i in data) {
            if (Number(data[i]) > max_) {
                max_ = Number(data[i])
            }

        }
        insert(String(max_ + 1), insert_author.value, insert_name.value, insert_date.value)
        insert_box.style.display = "none";
        alert("Книга добавлена")
    }
})

let update_id = document.getElementById("update_book_id")
let update_name = document.getElementById("update_book_name")
let update_author = document.getElementById("update_book_author")
let update_date = document.getElementById("update_book_date")
let start_update = document.getElementById("start_update")


start_update.addEventListener("click", () => {
    if (update_id.value == "") {
        alert("Введите все данные")
    }
    if (update_name.value == "") {
        alert("Введите все данные")
    }
    if (update_author.value == "") {
        alert("Введите все данные")
    }
    if (update_date.value == "") {
        alert("Введите все данные")
    } else {
        update(update_id.value, update_author.value, update_name.value, update_date.value)
        update_box.style.display = "none";
        alert("Книга изменена")
    }
})





let delete_id = document.getElementById("delete_book_id");
let start_delete = document.getElementById("start_delete");



start_delete.addEventListener("click", () => {
    delete_book(delete_id.value);
})