import {foodItem} from "./fooditem.js"

console.log(foodItem);

function displayItems(){
    var biryani = document.getElementById("biryani");
    var chicken = document.getElementById("chicken");
    var paneer = document.getElementById("paneer");
    var vegetable = document.getElementById("vegetable");
    var chinese = document.getElementById("chinese");
    var southIndian = document.getElementById("south-indian");

    const biryaniData = foodItem.filter(item=> item.category=='biryani');
    console.log(biryaniData);

    const chickenData = foodItem.filter(item=> item.category=='chicken');
    console.log(chickenData);

    const paneerData = foodItem.filter(item=> item.category=='paneer');
    console.log(paneerData);

    const vegetableData = foodItem.filter(item=> item.category=='vegetable');
    console.log(vegetableData);

    const chineseData = foodItem.filter(item=> item.category=='chinese');
    console.log(chineseData);

    const southIndianData = foodItem.filter(item=> item.category=='south-indian');
    console.log(southIndianData);

    biryaniData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var atag = document.createElement('a');
        atag.setAttribute('class','rating');

        var star = document.createElement('i');
        star.setAttribute('class','fa-solid fa-star fa-sm');

        var spanrating = document.createElement('span');
        spanrating.setAttribute('id','rating');
        spanrating.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id);
        // heart.onclick = function() { liked(event); };

        // changed

        atag.appendChild(star);
        atag.appendChild(spanrating);

        cardTop.appendChild(atag);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);
    })

    chickenData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var atag = document.createElement('a');
        atag.setAttribute('class','rating');

        var star = document.createElement('i');
        star.setAttribute('class','fa-solid fa-star fa-sm');

        var spanrating = document.createElement('span');
        spanrating.setAttribute('id','rating');
        spanrating.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id);

        atag.appendChild(star);
        atag.appendChild(spanrating);

        cardTop.appendChild(atag);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chicken.appendChild(itemCard);
    })

    paneerData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var atag = document.createElement('a');
        atag.setAttribute('class','rating');

        var star = document.createElement('i');
        star.setAttribute('class','fa-solid fa-star fa-sm');

        var spanrating = document.createElement('span');
        spanrating.setAttribute('id','rating');
        spanrating.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id);

        atag.appendChild(star);
        atag.appendChild(spanrating);

        cardTop.appendChild(atag);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        paneer.appendChild(itemCard);
    })

    vegetableData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var atag = document.createElement('a');
        atag.setAttribute('class','rating');

        var star = document.createElement('i');
        star.setAttribute('class','fa-solid fa-star fa-sm');

        var spanrating = document.createElement('span');
        spanrating.setAttribute('id','rating');
        spanrating.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id);

        atag.appendChild(star);
        atag.appendChild(spanrating);

        cardTop.appendChild(atag);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        vegetable.appendChild(itemCard);
    })

    chineseData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var atag = document.createElement('a');
        atag.setAttribute('class','rating');

        var star = document.createElement('i');
        star.setAttribute('class','fa-solid fa-star fa-sm');

        var spanrating = document.createElement('span');
        spanrating.setAttribute('id','rating');
        spanrating.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id);

        atag.appendChild(star);
        atag.appendChild(spanrating);

        cardTop.appendChild(atag);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        chinese.appendChild(itemCard);
    })

    southIndianData.map(item=>{
        var itemCard = document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop = document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var atag = document.createElement('a');
        atag.setAttribute('class','rating');

        var star = document.createElement('i');
        star.setAttribute('class','fa-solid fa-star fa-sm');

        var spanrating = document.createElement('span');
        spanrating.setAttribute('id','rating');
        spanrating.innerText = ' ' + item.rating;

        var heart = document.createElement('i');
        heart.setAttribute('class','fa-regular fa-heart add-to-cart');
        heart.setAttribute('id',item.id);

        atag.appendChild(star);
        atag.appendChild(spanrating);

        cardTop.appendChild(atag);
        cardTop.appendChild(heart);

        var img = document.createElement('img');
        img.src = item.img;

        var itemName = document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText = item.name;

        
        var itemPrice = document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText = 'Price : ' + item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        southIndian.appendChild(itemCard);
    })

}

displayItems();

const categoryListData = [...new Map(foodItem.map(item=> [item['category'],item])).values()];
console.log(categoryListData);

function categoryLists(){
    var categoryList = document.getElementById('category-list');

    categoryListData.map(item=> {
        var listCard = document.createElement('div');
        listCard.setAttribute('class','list-card');

        var listImg = document.createElement('img');
        listImg.src = item.img;

        var listName = document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText = item.category;
        listName.setAttribute('href','#'+item.category);

        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard = listCard.cloneNode(true);
        categoryList.appendChild(listCard);
    })
}

categoryLists()

// function liked(event){
//     event.target.classList.add("fa-solid");
// }

document.querySelectorAll('.add-to-cart').forEach(item=> {item.addEventListener('click',addToCart);})

var cartData = [];

function addToCart(){
    console.log(this.parentNode.nextSibling.nextSibling);
    var itemToAdd = this.parentNode.nextSibling.nextSibling.innerText;

    var itemObj = foodItem.find(item=> item.name == itemToAdd);
    console.log(itemObj);

    var index = cartData.indexOf(itemObj);

    if(index === -1){
        document.getElementById(itemObj.id).classList.add('fa-solid','red');
        cartData = [...cartData,itemObj];
        console.log(cartData);
    }

    else if(index > -1){
        let removeheart = cartData.indexOf(itemObj);
        cartData.splice(removeheart,1);
        document.getElementById(itemObj.id).classList.remove('fa-solid','red');

        console.log(cartData);
    }

    document.getElementById('cart-plus').innerHTML = cartData.length + " Items";

    totalAmount();
    cartItems();
}

function cartItems(){
    var tablebody = document.getElementById('table-body');
    tablebody.innerHTML = '';

    cartData.map(item=> {
        var tableRow = document.createElement('tr');

        var rowData1 = document.createElement('td');
        var img = document.createElement('img');
        img.src = item.img;
        rowData1.appendChild(img);

        var rowData2 = document.createElement('td');
        rowData2.innerText = item.name;
        rowData2.setAttribute('class','card-item-name');

        var rowData3 = document.createElement('td');
        var btn1 = document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerHTML = "-";
        var span = document.createElement('span');
        span.innerHTML = item.quantity;
        var btn2 = document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerHTML = "+";
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);

        var rowData4 = document.createElement('td');
        rowData4.innerText = item.price;

        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);

        tablebody.appendChild(tableRow);
    })

    document.querySelectorAll('.increase-item').forEach(item=> {
        item.addEventListener('click',increaseItem);
    })

    document.querySelectorAll('.decrease-item').forEach(item=> {
        item.addEventListener('click',decreaseItem);
    })
}

var currPrice = 0;

function increaseItem(){
    let itemtoInc = this.parentNode.previousSibling.innerText;
    console.log(itemtoInc);

    var incObj = cartData.find(element => element.name == itemtoInc);
    incObj.quantity += 1;

    currPrice = (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);

    incObj.price = currPrice*incObj.quantity;
    totalAmount();
    cartItems();
}

var flag = false;

function decreaseItem(){
    let itemtoDec = this.parentNode.previousSibling.innerText;
    var decObj = cartData.find(element => element.name == itemtoDec);
    let ind = cartData.indexOf(decObj);
    if(decObj.quantity > 1){
        currPrice = (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity -= 1;
        decObj.price = currPrice*decObj.quantity;
    }

    else{
        document.getElementById(decObj.id).classList.remove('red','fa-solid');

        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText = ' '+ cartData.length + ' Items';
        // document.getElementById('m-cart-plus').innerText = ' '+ cartData.length;

        if(cartData.length < 1 && flag){
            document.getElementById('food-items').classList.toggle('food-items');
            document.getElementById('category-list').classList.toggle('food-items');
            // document.getElementById('m-cart-plus').classList.toggle('m-cart-plus'); 
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            // document.getElementById(category-header).classList.toggle('toggle-category');
            document.getElementById('checkout').classList.toggle('cart-toggle');

            flag = false;
            alert('Currently no items in cart');
        }

    }

    totalAmount();
    cartItems();
}

function totalAmount(){
    var sum = 0;
    cartData.map(item=> {
        sum += item.price;
    })
    document.getElementById('total-item').innerHTML = 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerHTML = 'Total Price : INR ' + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle)
// document.getElementById('m-cart-plus').addEventListener('click',cartToggle)


function cartToggle(){
    if(cartData.length > 0){
        document.getElementById('food-items').classList.toggle('food-items');
        document.getElementById('category-list').classList.toggle('food-items');
        // document.getElementById('m-cart-plus').classList.toggle('m-cart-plus'); 
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        // document.getElementById(category-header).classList.toggle('toggle-category');
        document.getElementById('checkout').classList.toggle('cart-toggle');

        flag = true;
    }
    else{
        alert('Currently no items in cart');
    }
}