// объекты с данными
const champs = window.champions;
const items = window.items;
//основные HTML поля
let span = document.querySelector('#Hp');
let field = document.getElementById(`champions_field`);
let champList = document.getElementById(`champions_list`);
let buttons = document.querySelectorAll('.ChampImg');// поле выбора персов
let img = document.querySelector('img');
let logZone = document.querySelector('.logZone');

//барон
let BaronHpMax = 2000;
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
    let picture = `<img src="../img/${name}.png" alt="${name}" id="${name}remove" class="ChampSelected" width="50px" height="50px"></img>`;
    
    let div = document.createElement('div');
    field.append(div);
    div.className = `droppable ${name}`;
    
    
    div.innerHTML = `<div class = "MenuChamp"><button  class="ChampButton" ">${picture}</button>
    <input type="number" max="18" value="1" class="lvl lvl${name}""></div>
    <div class = " Stats${name} Stats">
    
    <p class="Ap${name}">Ap ${champs[name]["Ap"]}</p>
    <p class="Ad${name}">Ad ${champs[name]["Ad lvl 1"]}</p>
    <p class="As${name}">As ${champs[name]["As lvl 1"]}</p>
    <p class="Ch${name}">Ch ${champs[name]["Crit Chance"]}</p>
    <p class="Cd${name}">Cd ${champs[name]["Crit Damage"]}</p>
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
    $(`.lvl${name}`).on("input",function (){
        if ($(`.lvl${name}`).val() > 18){
            $(`.lvl${name}`).val("18");
        }
    });
    
    
    //console.log(BaronHpCurrent);
   
}
function RemoveChamp(){
    let target = event.target;
    let name = target.id;
    let ChampName = name.substring(0, name.length -6)
    let name2= document.getElementById(`${ChampName}`)
    if (target.tagName != 'IMG') return;
    let targetRemove = document.getElementById(`${name}`).parentNode.parentNode.parentNode;
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
    let zone = field.querySelectorAll("img.ChampSelected");
    Array.from(zone).forEach(img => champs[img.alt].HandDamage(champs[img.alt][`Ad lvl ${$(`.lvl${img.alt}`).val()}`],champs[img.alt][`As lvl ${$(`.lvl${img.alt}`).val()}`],champs[img.alt]["Crit Chance"],champs[img.alt]["Crit Damage"]));
  
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
function autoSmite(){
    let smite = setTimeout( function Smite() {
        smite = setTimeout(Smite,Math.random()*(500)+500);
        if(BaronHpCurrent <= 900) {
            console.log (`Вы не успели засмайтить!
            Вражеский лесник засмайтил на ${BaronHpCurrent} ХП!`)
            BaronHpCurrent -=900;
            clearTimeout(smite);
            return BaronHpCurrent;}
        },0)}
function BaronHpCheck (){                               //все работает. не трогать
    let HpBar = document.getElementById(`perc_in`);
    let HpBarPercent = BaronHpMax / 100;
    let BaronHpCheck = setTimeout( function BaronHpCheckRecursion(){
        BaronHpCheck = setTimeout(BaronHpCheckRecursion,100); 
        if (BaronHpCurrent <= 0) {
        span.innerHTML = "0";
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
        for (let itemsOnChamp of childs.childNodes){//название переменной изменить
            let itemEquiped = itemsOnChamp.getAttribute("name");//название переменной изменить
            let champEquiped = childs.parentNode.parentNode.parentNode.getAttribute("data-champName");
            //console.log(itemEquiped);
            console.log(champEquiped);
                      

            let newAd = champs[champEquiped][`Ad lvl ${$(`.lvl${champEquiped}`).val()}`] += +items[itemEquiped].Ad || 0;
            let newAp = champs[champEquiped].Ap += +items[itemEquiped].Ap || 0;
            let newAs = champs[champEquiped][`As lvl ${$(`.lvl${champEquiped}`).val()}`] += +((+items[itemEquiped].As ) * (+items["As Ratio"]) || 0);
            let newCh = champs[champEquiped]["Crit Chance"] += +items[itemEquiped]["Crit Chance"] || 0;
            let newCd = champs[champEquiped]["Crit Damage"] += +items[itemEquiped]["Crit Damage"] || 0;
            
         
            $(`.Ap${champEquiped}`)[0].innerHTML = `Ap ${newAp}`;
            $(`.Ad${champEquiped}`)[0].innerHTML = `Ad ${(newAd.toFixed(0))}`;
            $(`.As${champEquiped}`)[0].innerHTML = `As ${newAs}`;
            $(`.Ch${champEquiped}`)[0].innerHTML = `Ch ${newCh}`;
            $(`.Cd${champEquiped}`)[0].innerHTML = `Cd ${newCd}`;
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
    alert ("Чемпионы не выбраны!");
    start.addEventListener("click",Start,{once:true});
    return;}
    $(".log1").hide();
    $(".items_in").hide();
    $(".champ_intro").hide();
    $(".baronFight").removeClass("hide");
    calcStats();
    BaronHpCheck(); // слежение за хп баром
    Damage(); // урон
    BaronHpReg(); // исцеление
    autoSmite();
    clear.addEventListener("click",Clear,{once:true});
    document.addEventListener("keydown",Smite,{once:true});
    
}

function Clear(){       //все работает. не трогать
    let champTables = document.querySelectorAll(".table td");
    $(".log1").show();
    $(".items_in").show();
    $(".champ_intro").show();
    $(".baronFight").addClass("hide");
    for (let childs of champTables ){
        for (let itemsOnChamp of childs.childNodes){//название переменной изменить
            let itemEquiped = itemsOnChamp.getAttribute("name");//название переменной изменить
            let champEquiped = childs.parentNode.parentNode.parentNode.getAttribute("data-champName");
            //console.log(itemEquiped);
            console.log(champEquiped);
                      

            let newAd = champs[champEquiped][`Ad lvl ${$(`.lvl${champEquiped}`).val()}`] -= +items[itemEquiped].Ad || 0;
            let newAp = champs[champEquiped].Ap -= +items[itemEquiped].Ap || 0;
            let newAs = champs[champEquiped][`As lvl ${$(`.lvl${champEquiped}`).val()}`] -= +((+items[itemEquiped].As) * (+items["As Ratio"]))||0;
            let newCh = champs[champEquiped]["Crit Chance"] -= +items[itemEquiped]["Crit Chance"] || 0;
            let newCd = champs[champEquiped]["Crit Damage"] -= +items[itemEquiped]["Crit Damage"] || 0;
            
         
            $(`.Ap${champEquiped}`)[0].innerHTML = `Ap ${newAp}`;
            $(`.Ad${champEquiped}`)[0].innerHTML = `Ad ${(newAd.toFixed(0))}`;
            $(`.As${champEquiped}`)[0].innerHTML = `As ${newAs}`;
            $(`.Ch${champEquiped}`)[0].innerHTML = `Ch ${newCh}`;
            $(`.Cd${champEquiped}`)[0].innerHTML = `Cd ${newCd}`;
        }
       
    }
    BaronHpCurrent = BaronHpMax;
    span.innerHTML = `${BaronHpCurrent}`; 
    document.getElementById(`perc_in`).style.width=100+"%";
    start.addEventListener("click",Start,{once:true})
    return BaronHpCurrent;
}

function ClearField(){      //все работает. не трогать
    
    location.reload();
 
}

let observer = new MutationObserver(()=>$(".logZone > p").last()[0].scrollIntoView(false))
observer.observe(logZone,{
    childList : true
});


function Smite(e) {
    if(e.keyCode == 70){
        
    if (BaronHpCurrent <= 900){
        BaronHpCurrent -= 900;
        alert ("Вы засмайтили!")
    }
    else {
        BaronHpCurrent -= 900;
        alert (`Лох! У нашора осталось еще ${BaronHpCurrent} здоровья!`)
    }}   
return BaronHpCurrent;}