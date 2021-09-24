// объекты с данными
const champs = window.champions;
const items = window.items;
//основные HTML поля
let span = document.querySelector('#Hp');
let field = document.getElementById(`champions_field`);
let champList = document.getElementById(`champions_list`);
let buttons = document.querySelectorAll('.ChampImg');// поле выбора персов
let img = document.querySelector('img');
let logZone = document.getElementById('log');
//урон
let damage = 0;
//барон
let BaronHpMax = 1000;
let BaronHpRegen = 15;
let BaronHpCurrent = BaronHpMax;

Array.from(buttons).forEach(function(btn) {
    btn.setAttribute(`listener`,`1`);
    btn.addEventListener("click", SelectChamp,{once:true});
    btn.addEventListener("click", ShowChamp,{once:true});
    });

function SelectChamp(){
    let target = event.target;
    if (target.tagName != 'IMG') return;
    if (field.children.length == 5) {
        target.addEventListener("click", SelectChamp,{once:true})
        return ;} // если выбраны персы и был нажат клик, то вновь дается событие
    target.removeAttribute(`listener`);

    let name = target.getAttribute('data-object');
    let picture = `<img src="../img/${name}.png" alt="${name}" id="${name}remove" class="ChampSelected"></img>`;
    
    let div = document.createElement('div');
    field.append(div);
    div.className = `droppable ${name}`;
    
    
    div.innerHTML = `<button  class="ChampButton" ">${picture}</button>
    <div class = "Stats">
    <p>Ad ${champs[name]["Ad lvl 1"]}</p>
    <p>Ap ${champs[name]["Ap"]}</p>
    <p>As ${champs[name]["As lvl 1"]}</p>
    <p>Ch ${champs[name]["Crit Chance"]}</p>
    <p>Cd ${champs[name]["Crit Damage"]}</p>
    </div>
    <table  class="table" data-champName="${name}">
    <tr>
     <td></td>
     <td></td>
     <td></td>
    </tr>
    <tr>
     <td></td>
     <td></td>
     <td></td>
    </tr>
  </table>`;
  
    Array.from(field.children).forEach(function(pict){
        pict.addEventListener("click",RemoveChamp,{once:true})
    });
    
    
    //console.log(BaronHpCurrent);
   
}
function RemoveChamp(){
    let target = event.target;
    let name = target.id;
    let ChampName = name.substring(0, name.length -6)
    let name2= document.getElementById(`${ChampName}`)
    if (target.tagName != 'IMG') return;
    let targetRemove = document.getElementById(`${name}`).parentNode.parentNode;
    targetRemove.remove();
    Array.from(buttons).forEach(function(btn) {
        let result = btn.hasAttribute(`listener`);
        
        if (result)return;
        name2.setAttribute(`listener`,`1`);
        name2.addEventListener("click", SelectChamp,{once:true});
        name2.addEventListener("click", ShowChamp,{once:true});
        }); 
        console.log(ChampName);
    damage -= champs[ChampName]["Ad lvl 1"];   
}

function ShowChamp(){ // вывод объекта персонажа
    let target = event.target;
    if (target.tagName != 'IMG') return;
    let name = target.getAttribute('data-object');
    //console.log(champs[name]);
    //console.log(champs[name]["Ad lvl 1"]);
}

function Damage() {
    // champs[img.alt].HandDamage(champs[img.alt]["Ad lvl 1"],champs[img.alt]["As lvl 1"],0.5,1.2)// тест. рабочий
    let zone = Array.from(field.querySelectorAll("img"));
    Array.from(zone).forEach(img => champs[img.alt].HandDamage(champs[img.alt]["Ad lvl 1"],champs[img.alt]["As lvl 1"],champs[img.alt]["Crit Chance"],champs[img.alt]["Crit Damage"]));
    BaronHpCurrent -= damage;   
    span.innerHTML = `${BaronHpCurrent.toFixed(0)}`;
    return BaronHpCurrent;

}

function BaronHpReg(){  //все работает. не трогать. остается только добавить скейл за минуту
    let heal = setTimeout ( function BaronHeal() { // пассивное исцеление
        heal = setTimeout (BaronHeal,5000);
     if (BaronHpCurrent <= 0) { 
        clearTimeout(heal);
        return ;};
    if (BaronHpCurrent < BaronHpMax){
    BaronHpCurrent += BaronHpRegen;  
    span.innerHTML = `${BaronHpCurrent.toFixed(0)}`;

    if (BaronHpCurrent >= 9000) {span.innerHTML = `9000`};  
    
    return BaronHpCurrent}
    },0)
}


function BaronHpCheck (){                               //все работает. не трогать
    let HpBar = document.getElementById(`perc_in`);
    let HpBarPercent = BaronHpMax / 100;
    let BaronHpCheck = setTimeout( function BaronHpCheckRecursion(){
        BaronHpCheck = setTimeout(BaronHpCheckRecursion,100);
        if (BaronHpCurrent <= 0) {
        span.innerHTML = "0";
        console.log(span);
        document.getElementById(`perc_in`).style.width=0+"%";
        clearTimeout(BaronHpCheck);
        return ;}
        let CurrentHpBarPercent = (BaronHpCurrent / HpBarPercent);
        span.innerHTML = `${BaronHpCurrent.toFixed(0)}`;
        HpBar.style.width=CurrentHpBarPercent+"%"; 
},0)}

function calcStats(){
    let champTables = document.querySelectorAll(".table td");
    for (let childs of champTables ){
        for (let itemsz of childs.childNodes){//название переменной изменить
            let itemEquiped = itemsz.getAttribute("name");//название переменной изменить
            let champEquiped = childs.parentNode.parentNode.parentNode.getAttribute("data-champName");
            console.log(itemEquiped);
            console.log(champEquiped);
           //champs[champEquiped]["Ad lvl 1"] += +items[itemEquiped].Ad || 0;
           //champs[champEquiped][Ap] += +items[itemEquiped][Ap] || 0;
           
            console.log(items[itemEquiped].Ap);
        }
       
    }
    }

//старт всей программы
let start = document.querySelector(".Start");
let clear = document.querySelector(".Clear");
let clearField = document.querySelector(".ClearField");

start.addEventListener("click",Start,{once:true})
clear.addEventListener("click",Clear,{once:true})
clearField.addEventListener("click",ClearField);


function Start(){       //все работает. не трогать
    if (Array.from(field.children).length == 0) {
    alert ("Чемпионы не выбраны!")
    return;}

    calcStats();
    BaronHpCheck(); // слежение за хп баром
    Damage(); // урон
    BaronHpReg(); // исцеление
    clear.addEventListener("click",Clear,{once:true})
    
}

function Clear(){       //все работает. не трогать
    BaronHpCurrent = BaronHpMax;
    span.innerHTML = `${BaronHpCurrent}`; 
    document.getElementById(`perc_in`).style.width=100+"%";
    start.addEventListener("click",Start,{once:true})
    return BaronHpCurrent;
}

function ClearField(){      //все работает. не трогать
    
    let name2= document.querySelectorAll(".ChampImg")
    Array.from(buttons).forEach(function(btn) {
        let result = btn.hasAttribute(`listener`);
        
        if (result)return;
        for (let elem of name2)
        {elem.setAttribute(`listener`,`1`);
        elem.addEventListener("click", SelectChamp,{once:true});
        elem.addEventListener("click", ShowChamp,{once:true});
        }
        }); 
    field.innerHTML = "";
    return;
}


