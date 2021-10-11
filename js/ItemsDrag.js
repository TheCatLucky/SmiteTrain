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
      let lwCounter = 0;
      let mytchicCounter = 0;
      elem.remove();  //удалить картинку
      let champTables = document.querySelectorAll(".table td");
      for (let cell of champTables){
        if ((cell.parentNode.parentNode.parentNode).getAttribute("data-champName") == droppableBelow.classList[1]){
          for (let td of cell.childNodes){
            let itemName = td.getAttribute("name");
            if (items[itemName]["Unique"] == "LW"){
              lwCounter++;
            }
            if (items[itemName]["Unique"] == "Mythic"){
              mytchicCounter++;
            }
          }
          if(cell.innerHTML == ""){
            if (lwCounter >= 1 && items[itemName]["Unique"] == "LW"){
              break;
            }
            if (mytchicCounter >= 1 && items[itemName]["Unique"] == "Mythic"){
              break;
            }
            img = document.createElement("img");
                    let place = cell;
                    img.setAttribute("src", `../img/${itemSrc}`);
                    img.setAttribute("width", "40px");
                    img.setAttribute("height", "40px");
                    img.setAttribute("name",`${itemName}`)
                    place.append(img);
                    img.addEventListener("click",removeThisItem,{once:true});
                    break;
          };
        }
        
      }
      }
    function removeThisItem(){
        let target = event.target;
        //let name = target.getAttribute("name");
        if (target.tagName != 'IMG') return;
        target.remove();        
    }
      
    
    
    
    