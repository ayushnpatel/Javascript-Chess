const rooks = document.querySelectorAll(".rook");
console.log(rooks);

for (let i = 0; i < rooks.length; i++) {
    const rook = rooks[i];
    rookParent = rook.parentElement;
    var possibleLocs;
    var draggedX;
    var draggedY;
    rook.addEventListener('dragstart', function(e){
        draggedItem = rook;
        rookParent = rook.parentElement;
        x = rookParent.getAttribute('x');
        y = rookParent.getAttribute('y');
        possibleLocs = [[x,y]];
        getRookLocs(draggedItem);
        removeDuplicates(possibleLocs);
        console.log(possibleLocs);
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color to dark gray
            var possibleLoc = document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']");
            var color = possibleLoc.getAttribute("originalBackgroundColor");
            possibleLoc.style.backgroundImage = "-webkit-"+"radial-gradient("+color+", rgba(1, 1, 1, .2))";
        }
        setTimeout(function(){
            rook.style.display = 'none';
        }, 0);
    });
    rook.addEventListener('dragend', function(e){
        draggedItem.style.display = 'block';
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color back to normal
            document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']").style.backgroundImage = null;
        }
        setTimeout(function(){
            possibleLocs = null;
            draggedItem = null;
            rookParent = null;
            x = null;
            y = null;
        },0)

    })
}
function getRookLocs(draggedItem){
    for(let temp = parseInt(x)+1; temp <= 7; temp++){
        if(document.querySelector(".empty[x='"+temp+"'][y='"+y+"']").children.length == 0){
            possibleLocs.push([temp,y]);
        }else if(document.querySelector(".empty[x='"+(temp)+"'][y='"+(y)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(temp)+"'][y='"+(y)+"']").firstChild.getAttribute('color').match(draggedItem.getAttribute('color'))){
            possibleLocs.push([temp,y]);
            break;
        }else{
            break;
        }
    }
    for(let temp = parseInt(x)-1; temp >= 0; temp--){
        if(document.querySelector(".empty[x='"+temp+"'][y='"+y+"']").children.length == 0){
            possibleLocs.push([temp,y]);
        }else if(document.querySelector(".empty[x='"+(temp)+"'][y='"+(y)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(temp)+"'][y='"+(y)+"']").firstChild.getAttribute('color').match(draggedItem.getAttribute('color'))){
            possibleLocs.push([temp,y]);
            break;
        }else{
            break;
        }
    }
    for(let temp = parseInt(y)+1; temp <= 7; temp++){
        if(document.querySelector(".empty[x='"+x+"'][y='"+temp+"']").children.length == 0){
            possibleLocs.push([x,temp]);
        }else if(document.querySelector(".empty[x='"+(x)+"'][y='"+(temp)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(x)+"'][y='"+(temp)+"']").firstChild.getAttribute('color').match(draggedItem.getAttribute('color'))){
            possibleLocs.push([x,temp]);
            break;
        }else{
            break;
        }
    }
    for(let temp = parseInt(y)-1; temp >= 0; temp--){
        if(document.querySelector(".empty[x='"+x+"'][y='"+temp+"']").children.length == 0){
            possibleLocs.push([x,temp]);
        }else if(document.querySelector(".empty[x='"+(x)+"'][y='"+(temp)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(x)+"'][y='"+(temp)+"']").firstChild.getAttribute('color').match(draggedItem.getAttribute('color'))){
            possibleLocs.push([x,temp]);
            break;
        }else{
            break;
        }
    }
}
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
