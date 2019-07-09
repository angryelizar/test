// Начальные переменные
let money,
    name,
    time,
    price;

// Окно с вводом бюджета магазина
function start() {
    money = prompt("Ваш бюджет?");
    while (isNaN(money) || money == "" || money == null){
        money = prompt("Ваш бюджет?");
    }
    name = prompt("Название вашего магазина?").toUpperCase();
    time = 21;
}
start()

// Объект со свойствами магазина
let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
}

// Окно с вводом товаров в магазине
function chooseGoods() {
    for (let i = 0; i < 5; i++) {
        let a = prompt("Какой тип товаров будем продавать?");
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null  && a != '' && a.length < 50) {
            console.log("Название товара веденно правильно");
            mainList.shopGoods[i] = a;
        } else {
            i = i - 1;
        }
    }
}
chooseGoods();

// Окно с добавление сотрудников магазина
function addEmployers(){
    for (let o = 0; o < 5; o++) {
        let e = prompt("Имя сотрудника?");

        if ((typeof(e)) === 'string' && (typeof(e)) != null  && e != '' && e.length < 50) {
            console.log("Имя сотрудника введено правильно");
            mainList.employers[o] = e;
        } else {
            o = o - 1;
        }
    } 
}
addEmployers();

// График работы магазина
function workTime(time){
    if (time < 0) {
        console.log("Такого не может быть");
    } else if(time > 8 && time < 20) {
        console.log("Время работать");
        } else if(time < 24) {
            console.log('Уже слишком поздно!');
            } else if(time > 24) {
                console.log('Привет, ты чо, ахуел');
                };
}
workTime(9);

// Окно с расчётом ежедневного бюджета магазина
function everydayBudget(){
    alert("Eжедневный бюджет - "+ mainList.budget / 30);
}

everydayBudget();


console.log(mainList);

// (typeof(a)) === 'string' && (typeof(a)) === null  && a != ''

function checkDiscount(price){
    price = 100
    var discountPrice = 20
    var discountPercent = price / 100 * discountPrice;
    if (mainList.discount = false) {
        console.log(price)
    } else if (mainList.discount = true) {
        newPrice = price-discountPercent;
        console.log(newPrice)
    }
}