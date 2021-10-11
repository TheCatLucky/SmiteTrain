//$(".intro").hide(); // на время разработки
// объекты с данными
const champs = window.champions;
const items = window.items;
//основные HTML поля
let span = $("#Hp");
let field = $("#champions_field");
let buttons = $(".ChampImg");
let img = $('img');
let logZone = $("#logZone");
let start = $("#Start");
let clear = $("#Clear");
let clearField = $("#ClearField");
let smiteKey;
let BaronHpCurrent;
let BaronHpMax;
let BaronHpRegen;

start.one("click",startGame);
clearField.on("click",clearInGameZone);

Array.from(buttons).forEach(function(btn) {
  btn.setAttribute(`listener`,`1`);
  btn.addEventListener("click", selectChamp,{once:true});
});

$(".ingameMinute").on("input",function () {
  if ($(".ingameMinute").val() > 99){
    $(".ingameMinute").val("99");
  }
});

$(".ingameMinute").on("blur",function () {
  if ($(".ingameMinute").val() < 20){
    $(".ingameMinute").val("20");
  }
});

$(".intro__choose>h1").one("click", function () {
  if ($(this).text() == "D"){
    smiteKey = 68;
    console.log(smiteKey);
    $(".intro").fadeToggle(500);
  }
  if ($(this).text() == "F"){
    smiteKey = 70;
    console.log(smiteKey);
    $(".intro").fadeToggle(500);
  }
});

$(".BaronNashor").hide();
$(".baronFight").hide();
$(".logZone").hide();

function selectChamp() {
  let target = event.target;
  let name = target.getAttribute('data-object');
  let picture = `<img src="../img/${name}.png" alt="${name}" id="${name}remove" class="ChampSelected" width="50px" height="50px"></img>`;
  let div = document.createElement('div');

  if (target.tagName != 'IMG') return;
  if (field.children().length == 5) {
    target.addEventListener("click", selectChamp,{once:true})
    return ;} // если выбраны персы и был нажат клик, то вновь дается событие
  target.removeAttribute(`listener`);
   
  field.append(div);
  div.className = `droppable ${name}`;
  div.innerHTML = `<div class = "MenuChamp">
  <button  class="ChampButton" ">${picture}</button>
  <input type="number" max="18" value="1" class="lvl lvl${name}""></div>
  <div class = " Stats${name} Stats">
    <p class="Ap${name}">Ap ${champs[name]["Ap"]}</p>
    <p class="Ad${name}">Ad ${champs[name]["Ad lvl 1"]}</p>
    <p class="As${name}">As ${(champs[name]["As lvl 1"]).toFixed(3)}</p>
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
  Array.from(field.children()).forEach(function(pict){
    pict.addEventListener("click",removeChamp)
  });
  $(`.lvl${name}`).on("input",function (){
    if ($(`.lvl${name}`).val() > 18){
      $(`.lvl${name}`).val("18");
    }
  });
}

function removeChamp() {
  let target = event.target;

  if (target.tagName != 'IMG' || target.className == "") {
    return;
  }

  let name = target.id;
  let ChampName = name.substring(0, name.length -6);
  let name2= $(`#${ChampName}`);
  let targetRemove = $(`#${name}`).closest(".droppable");

  targetRemove.remove();
  Array.from(buttons).forEach(function(btn) {
    let result = btn.hasAttribute(`listener`);
    
    if (result){
      return;
    }
    name2.attr("listener","1");
    name2.one("click", selectChamp);
    }); 
    console.log(ChampName);
  damage -= champs[ChampName]["Ad lvl 1"];   
}

function damage() {
  let zone = $("img.ChampSelected");
  
  Array.from(zone).forEach(img => champs[img.alt].HandDamage(
    champs[img.alt][`Ad lvl ${$(`.lvl${img.alt}`).val()}`],
    champs[img.alt][`As lvl ${$(`.lvl${img.alt}`).val()}`],
    champs[img.alt]["Crit Chance"],
    champs[img.alt]["Crit Damage"],
    champs[img.alt]["Lethality"],
    champs[img.alt]["Ad penetration"],
    $(`.lvl${img.alt}`).val()
    ));
  span.html(`${BaronHpCurrent.toFixed(0)}`);
  return BaronHpCurrent;
}

function calcBaronHpReg() {
  let minuteScale = $(".ingameMinute").val();
  BaronHpRegen = 15 + minuteScale * 0.375;
  return BaronHpRegen;
}

function calcBaronMaxHp() {
  let minuteScale = $(".ingameMinute").val();
  
  BaronHpMax = 1 + 180 * minuteScale;
  return (BaronHpCurrent = BaronHpMax);
}
function setBaronHp() {
  BaronHpCurrent = BaronHpMax;
  span.html(`${BaronHpCurrent}`);
  document.getElementById(`perc_in`).style.width=100+"%";
  return BaronHpCurrent;
}

function baronHpReg() {  //все работает
  let heal = setTimeout ( function BaronHeal() { // пассивное исцеление
    heal = setTimeout (BaronHeal,5000);
    if (BaronHpCurrent <= 0) { 
      clearTimeout(heal);
      return ;
    }
    if (BaronHpCurrent < BaronHpMax){
      BaronHpCurrent += BaronHpRegen; 
      span.html(`${BaronHpCurrent.toFixed(0)}`);
      if (BaronHpCurrent >= BaronHpMax) {
        span.html(`${BaronHpMax}`);
      }
      return BaronHpCurrent;
    }
  },0)
}

function autoSmite() {
  let smite = setTimeout( function autoSmite() {
    smite = setTimeout(autoSmite,Math.random()*(500)+500);
    if(BaronHpCurrent <= 900) {
      console.log (`Вы не успели засмайтить!
      Вражеский лесник засмайтил на ${BaronHpCurrent} ХП!`);
      BaronHpCurrent -=900;
      clearTimeout(smite);
      return ;}
  },0)
}

function smite(keydown) {
  if(keydown.keyCode == smiteKey){
    if (BaronHpCurrent <= 900){
      BaronHpCurrent -= 900;
      alert ("Вы засмайтили!");
      return BaronHpCurrent;
    }
    else {
      BaronHpCurrent -= 900;
      alert (`У нашора осталось еще ${BaronHpCurrent} здоровья!`);
      return BaronHpCurrent;
    }
  }  
  document.addEventListener("keydown",smite,{once:true}); 
  return BaronHpCurrent;
}

function checkBaronHp () {                               //все работает. не трогать
  let HpBar = $("#perc_in");
  let checkBaronHp = setTimeout( function checkBaronHpRecursion(){
    checkBaronHp = setTimeout(checkBaronHpRecursion,100); 
    let HpBarPercent = BaronHpMax / 100;
    let CurrentHpBarPercent = BaronHpCurrent / HpBarPercent;
    if (BaronHpCurrent <= 0) {
    span.html("0");
    HpBar.css({"width" : "0%"});
    clearTimeout(checkBaronHp);
    return ;
    }
    span.html(`${BaronHpCurrent.toFixed(0)}`);
    HpBar.css({"width" : `${CurrentHpBarPercent}%`}); 
},0)
}

function calcStats() {
  let champTables = document.querySelectorAll(".table td");
  let infinCounter = 0;
  for (let childs of champTables ){
    for (let itemsOnChamp of childs.childNodes){
      let itemEquiped = itemsOnChamp.getAttribute("name");
      let champEquiped = childs.parentNode.parentNode.parentNode.getAttribute("data-champName");

      if (items[itemEquiped]["name"] == "Infinity Edge"){
        if (infinCounter > 1){ 
          infinCounter++
        }
        else{
          infinCounter = 1;
        }
      }

      if (items[itemEquiped]["name"] == "Blade of the Ruined King"){
        champs[champEquiped]["Has BotrK"] = 1;
      }

      let newAd = champs[champEquiped][`Ad lvl ${$(`.lvl${champEquiped}`).val()}`] += +items[itemEquiped].Ad || 0;
      let newAp = champs[champEquiped].Ap += +items[itemEquiped].Ap || 0;
      let newAs = champs[champEquiped][`As lvl ${$(`.lvl${champEquiped}`).val()}`] += +((+items[itemEquiped].As ) * (+champs[champEquiped]["As Ratio"]) || 0);
      let newCh = champs[champEquiped]["Crit Chance"] += +items[itemEquiped]["Crit Chance"] || 0;
      let newCd = champs[champEquiped]["Crit Damage"] += +items[itemEquiped]["Crit Damage"] || 0;
      champs[champEquiped]["Lethality"] += +items[itemEquiped]["Lethality"] || 0;
      champs[champEquiped]["Ad penetration"] += +items[itemEquiped]["Ad penetration"] || 0;

      if (infinCounter == 1 && champs[champEquiped]["Crit Chance"] >= 0.6){
        newCd = champs[champEquiped]["Crit Damage"] += 0.35;
        infinCounter ++;
      }
      
      $(`.Ap${champEquiped}`)[0].innerHTML = `Ap ${newAp}`;
      $(`.Ad${champEquiped}`)[0].innerHTML = `Ad ${newAd.toFixed(0)}`;
      $(`.As${champEquiped}`)[0].innerHTML = `As ${newAs.toFixed(3)}`;
      $(`.Ch${champEquiped}`)[0].innerHTML = `Ch ${newCh.toFixed(2)}`;
      $(`.Cd${champEquiped}`)[0].innerHTML = `Cd ${newCd.toFixed(2)}`;
    }
  }
}

function clearFight() {       //все работает. не трогать
  let champTables = document.querySelectorAll(".table td");
  let infinCounter = 0;

  if (BaronHpCurrent >= 0){
    BaronHpCurrent = 0;
    console.log(BaronHpCurrent);
  }

  $("body").css({
    "background" : "url(../img/back.jpg) no-repeat",
    "background-size": "100%"
  });
  $(".champs_in").show();
  $(".items_in").show();
  $(".champ_intro").show();
  $(".BaronNashor").hide();
  $(".baronFight").hide();
  $(".logZone").hide();
  for (let childs of champTables ){
    for (let itemsOnChamp of childs.childNodes){//название переменной изменить
      let itemEquiped = itemsOnChamp.getAttribute("name");//название переменной изменить
      let champEquiped = childs.parentNode.parentNode.parentNode.getAttribute("data-champName");
      let newCd = champs[champEquiped]["Crit Damage"];

      if (items[itemEquiped]["name"] == "Infinity Edge"){
        if (infinCounter >= 1){ 
          infinCounter++;
          console.log(infinCounter);
        }
        else{
          infinCounter = 1;
        }
      }

      if (infinCounter == 1 && champs[champEquiped]["Crit Chance"] >= 0.6){
         newCd = champs[champEquiped]["Crit Damage"] -= 0.35;
         infinCounter++
      }

      let newAd = champs[champEquiped][`Ad lvl ${$(`.lvl${champEquiped}`).val()}`] -= +items[itemEquiped].Ad || 0;
      let newAp = champs[champEquiped].Ap -= +items[itemEquiped].Ap || 0;
      let newAs = champs[champEquiped][`As lvl ${$(`.lvl${champEquiped}`).val()}`] -= +((+items[itemEquiped].As ) * (+champs[champEquiped]["As Ratio"]) || 0);
      let newCh = champs[champEquiped]["Crit Chance"] -= +items[itemEquiped]["Crit Chance"] || 0;
      champs[champEquiped]["Lethality"] -= +items[itemEquiped]["Lethality"] || 0;
      champs[champEquiped]["Ad penetration"] -= +items[itemEquiped]["Ad penetration"] || 0;
      newCd = champs[champEquiped]["Crit Damage"] -= +items[itemEquiped]["Crit Damage"] || 0;
      
      $(`.Ap${champEquiped}`)[0].innerHTML = `Ap ${newAp}`;
      $(`.Ad${champEquiped}`)[0].innerHTML = `Ad ${newAd.toFixed(0)}`;
      $(`.As${champEquiped}`)[0].innerHTML = `As ${newAs.toFixed(3)}`;
      $(`.Ch${champEquiped}`)[0].innerHTML = `Ch ${newCh.toFixed(2)}`;
      $(`.Cd${champEquiped}`)[0].innerHTML = `Cd ${newCd.toFixed(2)}`;
    }
  }
  $(".logZone > p").remove();
  start.one("click",startGame);
  return BaronHpCurrent;
}

function clearInGameZone() {      //все работает. не трогать
  location.reload();
}

logZone.on('DOMSubtreeModified', function(){$(".logZone > p").last()[0].scrollIntoView(false)});

function startGame() {       //все работает. не трогать
  if (Array.from(field.children()).length == 0) {
  alert ("Чемпионы не выбраны!");
  start.one("click",startGame);
  return;}
  $("body").css({
    "background" : "url(../img/fight.jpg) no-repeat",
    "background-size": "115%"
  });
  $(".champs_in").hide();
  $(".items_in").hide();
  $(".champ_intro").hide();
  $(".baronFight").show();
  $(".BaronNashor").show();
  $(".logZone").show();
  setBaronHp();
  calcBaronHpReg();//расчет хп регена
  calcBaronMaxHp();//расчет максимального хп
  calcStats();//статистики персонажей
  checkBaronHp(); // слежение за хп баром
  damage(); // урон
  baronHpReg(); // исцеление
  autoSmite();
  clear.one("click",clearFight);
  document.addEventListener("keydown",smite,{once:true});
  return BaronHpCurrent;
}