let menu = document.querySelector('.champs_in');
let arrow = document.querySelector('#ChampArrow')
const widthScreen = document.documentElement.clientWidth;
document.body.style.maxWidth = `${widthScreen}px`;  // размер экрана
function MenuIn(){
menu.classList.add('champs_out');
arrow.addEventListener("click",MenuOut,{once:true});
}
function MenuOut(){
menu.classList.remove('champs_out');
arrow.addEventListener("click", MenuIn,{once:true});
}

arrow.addEventListener("click", MenuIn,{once:true});

let item = document.querySelector(".items_in");
let itemArrow = document.querySelector("#ItemArrow");

function ItemsIn(){
item.classList.add('items_out');
itemArrow.addEventListener("click",ItemsOut,{once:true});
}
function ItemsOut(){
item.classList.remove('items_out');
itemArrow.addEventListener("click", ItemsIn,{once:true});
}

itemArrow.addEventListener("click", ItemsIn,{once:true});