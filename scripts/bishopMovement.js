const bishops = document.querySelectorAll(".bishop");
console.log(bishops);

for (let i = 0; i < bishops.length; i++) {
    const bishop = bishops[i];
    bishopParent = bishop.parentElement;
    var possibleLocs;
    var draggedX;
    var draggedY;
    bishop.addEventListener('dragstart', function(e){
        draggedItem = bishop;
        bishopParent = bishop.parentElement;
        x = bishopParent.getAttribute('x');
        y = bishopParent.getAttribute('y');
        possibleLocs = [[x,y]];
        getBishopLocs(draggedItem);
        console.log(possibleLocs);
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color to dark gray
            var possibleLoc = document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']");
            var color = possibleLoc.getAttribute("originalBackgroundColor");
            possibleLoc.style.backgroundImage = "-webkit-"+"radial-gradient("+color+", rgba(1, 1, 1, .2))";
        }
        setTimeout(function(){
            bishop.style.display = 'none';
        }, 0);
    });
    bishop.addEventListener('dragend', function(e){
        draggedItem.style.display = 'block';
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color back to normal
            document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']").style.backgroundImage = null;
        }
        setTimeout(function(){
            possibleLocs = null;
            draggedItem = null;
            bishopParent = null;
            x = null;
            y = null;
        },0)

    })
}
function getBishopLocs(draggedItem){
    tempX = parseInt(x)+1;
    tempY = parseInt(y)+1;
    while(tempX < 8 && tempY < 8){
        if(document.querySelector(".empty[x='"+tempX+"'][y='"+tempY+"']").children.length == 0){
            possibleLocs.push([tempX,tempY]);
            tempX++;
            tempY++;
        }else if(document.querySelector(".empty[x='"+(tempX)+"'][y='"+(tempY)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(tempX)+"'][y='"+(tempY)+"']").firstChild.getAttribute('color').match(draggedItem.getAttribute('color'))){
            possibleLocs.push([tempX,tempY]);
            break;
        }else{
            break;
        }
    }
    tempX = parseInt(x)-1;
    tempY = parseInt(y)+1;
    while(tempX >= 0 && tempY < 8){
        if(document.querySelector(".empty[x='"+tempX+"'][y='"+tempY+"']").children.length == 0){
            possibleLocs.push([tempX,tempY]);
            tempX--;
            tempY++;
        }else if(document.querySelector(".empty[x='"+(tempX)+"'][y='"+(tempY)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(tempX)+"'][y='"+(tempY)+"']").firstChild.getAttribute('color').match(draggedItem.getAttribute('color'))){
            possibleLocs.push([tempX,tempY]);
            break;
        }else{
            break;
        }
    }
    tempX = parseInt(x)-1;
    tempY = parseInt(y)-1;
    while(tempX >= 0 && tempY >= 0){
        if(document.querySelector(".empty[x='"+tempX+"'][y='"+tempY+"']").children.length == 0){
            possibleLocs.push([tempX,tempY]);
            tempX--;
            tempY--;
        }else if(document.querySelector(".empty[x='"+(tempX)+"'][y='"+(tempY)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(tempX)+"'][y='"+(tempY)+"']").firstChild.getAttribute('color').match(draggedItem.getAttribute('color'))){
            possibleLocs.push([tempX,tempY]);
            break;
        }else{
            break;
        }
    }
    tempX = parseInt(x)+1;
    tempY = parseInt(y)-1;
    while(tempX < 8 && tempY >= 0){
        if(document.querySelector(".empty[x='"+tempX+"'][y='"+tempY+"']").children.length == 0){
            possibleLocs.push([tempX,tempY]);
            tempX++;
            tempY--;
        }else if(document.querySelector(".empty[x='"+(tempX)+"'][y='"+(tempY)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(tempX)+"'][y='"+(tempY)+"']").firstChild.getAttribute('color').match(draggedItem.getAttribute('color'))){
            possibleLocs.push([tempX,tempY]);
            break;
        }else{
            break;
        }
    }
}
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
