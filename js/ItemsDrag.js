setInterval(function() { 
  let parent = document.querySelectorAll('.ItemImg');
  
  for (let elem of parent){
  
  elem.addEventListener("mousedown", refreshItem);
  elem.addEventListener("mousedown", move);
 
  elem.ondragstart = function() {
    
    return false;
  };
}},300);
  
function refreshItem(event){
  let test = event.target;
  let place = event.target.parentNode;
  
  if (place.children.length >= 2 ) {return ;}
  else {
  photoSrc = test.getAttribute("alt");
  let name = test.getAttribute("data-name")
  let img = document.createElement("img");
  img.setAttribute("src", photoSrc);
  img.setAttribute("alt", photoSrc);
  img.setAttribute("class", "ItemImg");
  img.setAttribute("data-name", name);
  img.setAttribute("width", "50px");
  img.setAttribute("height", "50px");
  
  place.append(img);
  }
}

function move(event) {
  let currentItem = event.target;
  let shiftX = event.clientX - currentItem.getBoundingClientRect().left;
  
  let shiftY = event.clientY - currentItem.getBoundingClientRect().top;
    // установка элемента НАД всем
  currentItem.style.position = 'absolute';
  currentItem.style.zIndex = 1000;
  document.body.append(currentItem);
  moveAt(event.pageX, event.pageY);
    // для удобства. установка под позицию курсора
  function moveAt(pageX, pageY) {
    currentItem.style.left = pageX - shiftX + 'px';
    currentItem.style.top = pageY - shiftY + 'px';
  }
  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
    let currentItem = event.target;
    
    // спрятать элемент под мышкой, чтобы взять элемент ниже
    currentItem.hidden = true;
    // самый верхний элемент
    let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
    
    // обратно показываем элемент
    currentItem.hidden = false;
    
    let x = event.clientX;
    let y = event.clientY;
    let currentDroppable = document.elementFromPoint(x,y);  //элемент под мышкой
    
    let droppableBelow = elemBelow.closest('.droppable');
    
        
      if (currentDroppable) { // вне зоны
        addEventListener("mouseup",removeItem,{once:true});
        removeEventListener("mouseup",setItem,{once:true});
      }
      
      if (currentDroppable = droppableBelow) { // зашли на зону
        removeEventListener("mouseup",removeItem,{once:true});
        addEventListener("mouseup",setItem,{once:true});
      }
    
  }
  // перемещение по документу
  document.addEventListener('mousemove', onMouseMove);
    // действие после отжимания клавиши мыши
  currentItem.onmouseup = function() {
    let currentItem = event.target;
    document.removeEventListener('mousemove', onMouseMove);
    currentItem.onmouseup = null;
  };
};
    
function removeItem(){
  let x = event.clientX;
  let y = event.clientY;
  let elem = document.elementFromPoint(x,y);
  if (elem.tagName != "IMG") return;
  elem.remove();
}

function setItem(){
  let x = event.clientX;
  let y = event.clientY;
  let elem = document.elementFromPoint(x,y);
  elem.hidden = true;
  let secondElem = document.elementFromPoint(x,y);
  let droppableBelow = secondElem.closest('.droppable');
  
  elem.hidden = false;
  let itemName = elem.getAttribute("data-name");
  let itemSrc = elem.getAttribute("alt");
  elem.remove();  //удалить картинку
  let champTables = $(".table td");
  for (let cell of champTables){
    if ((cell.parentNode.parentNode.parentNode).getAttribute("data-champName") == droppableBelow.classList[1]){
        switch(true){
          case droppableBelow.hasAttribute("Mythic") === true && (items[itemName]["Unique"]=="Mythic"):
            return;
          case droppableBelow.hasAttribute("BotrK") === true && (items[itemName]["Unique"]=="BotrK"):
            return;
          case droppableBelow.hasAttribute("WitsEnd") === true && (items[itemName]["Unique"]=="WitsEnd"):
            return;
          case droppableBelow.hasAttribute("Youmuu") === true && (items[itemName]["Unique"]=="Youmuu"):
            return;
          case droppableBelow.hasAttribute("Glaive") === true && (items[itemName]["Unique"]=="Glaive"):
            return;
          case droppableBelow.hasAttribute("Hydra") === true && (items[itemName]["Unique"]=="Hydra"):
            return;
          case droppableBelow.hasAttribute("Collector") === true && (items[itemName]["Unique"]=="Collector"):
            return;
          case droppableBelow.hasAttribute("LifeLine") === true && (items[itemName]["Unique"]=="LifeLine"):
            return;
          case droppableBelow.hasAttribute("LW") === true && (items[itemName]["Unique"]=="LW"):
            return;
          case droppableBelow.hasAttribute("RFC") === true && (items[itemName]["Unique"]=="RFC"):
            return;
          case droppableBelow.hasAttribute("NashorsTooth") === true && (items[itemName]["Unique"]=="NashorsTooth"):
            return;
          default:
            break;
        }
        
      if(cell.innerHTML == ""){
        img = document.createElement("img");
        let place = cell;
        img.setAttribute("src", `img/${itemSrc}`);
        img.setAttribute("width", "40px");
        img.setAttribute("height", "40px");
        img.setAttribute("name",`${itemName}`)
        place.append(img);
        img.addEventListener("click",removeThisItem,{once:true});
        droppableBelow.setAttribute(`${items[itemName]["Unique"]}`,1);
        break;
      };
    }
  }
  
}
function removeThisItem(){
  let target = event.target;
  let itemName = target.getAttribute("name");
  let x = event.clientX;
  let y = event.clientY;
  let secondElem = document.elementFromPoint(x,y);
  let droppableBelow = secondElem.closest('.droppable');
  console.log(droppableBelow)
  console.log(itemName)
  droppableBelow.removeAttribute(`${items[itemName]["Unique"]}`)
  if (target.tagName != 'IMG') return;
  target.remove();        
}
