let menu = document.querySelector('.log1');
let arrow = document.querySelector('#ChampArrow')
const widthScreen = document.documentElement.clientWidth;
document.body.style.maxWidth = `${widthScreen}px`;  // размер экрана
function MenuIn(){
menu.classList.add('log2');
menu.classList.remove(`log1`);
arrow.addEventListener("click",MenuOut,{once:true});
}
function MenuOut(){
menu.classList.remove('log2');
menu.classList.add(`log1`);
arrow.addEventListener("click", MenuIn,{once:true});
}

arrow.addEventListener("click", MenuIn,{once:true});

let item = document.querySelector(".items_in");
let itemArrow = document.querySelector("#ItemArrow");

function ItemsIn(){
item.classList.add('items_out');
item.classList.remove(`items_in`);
itemArrow.addEventListener("click",ItemsOut,{once:true});
}
function ItemsOut(){
item.classList.remove('items_out');
item.classList.add(`items_in`);
itemArrow.addEventListener("click", ItemsIn,{once:true});
}

itemArrow.addEventListener("click", ItemsIn,{once:true});