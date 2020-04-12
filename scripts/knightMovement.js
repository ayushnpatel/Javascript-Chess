const knights = document.querySelectorAll(".knight");
console.log(knights);

for (let i = 0; i < knights.length; i++) {
    const knight = knights[i];
    knightParent = knight.parentElement;
    var possibleLocs;
    var draggedX;
    var draggedY;
    knight.addEventListener('dragstart', function(e){
        draggedItem = knight;
        knightParent = knight.parentElement;
        x = knightParent.getAttribute('x');
        y = knightParent.getAttribute('y');
        possibleLocs = [[x,y]];
        getKnightLocs(draggedItem);
        //removeDuplicates(possibleLocs);
        console.log(possibleLocs);
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color to dark gray
            var possibleLoc = document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']");
            var color = possibleLoc.getAttribute("originalBackgroundColor");
            possibleLoc.style.backgroundImage = "-webkit-"+"radial-gradient("+color+", rgba(1, 1, 1, .2))";
        }
        setTimeout(function(){
            knight.style.display = 'none';
        }, 0);
    });
    knight.addEventListener('dragend', function(e){
        draggedItem.style.display = 'block';
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color back to normal
            document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']").style.backgroundImage = null;
        }
        setTimeout(function(){
            possibleLocs = null;
            draggedItem = null;
            knightParent = null;
            x = null;
            y = null;
        },0)

    })
}
function getKnightLocs(knight){
    gettingKnightLoc(parseInt(x)-1,parseInt(y)-2, knight);
    gettingKnightLoc(parseInt(x)+1,parseInt(y)-2, knight);
    gettingKnightLoc(parseInt(x)-1,parseInt(y)+2, knight);
    gettingKnightLoc(parseInt(x)+1,parseInt(y)+2, knight);
    gettingKnightLoc(parseInt(x)-2,parseInt(y)+1, knight);
    gettingKnightLoc(parseInt(x)-2,parseInt(y)-1, knight);
    gettingKnightLoc(parseInt(x)+2,parseInt(y)+1, knight);
    gettingKnightLoc(parseInt(x)+2,parseInt(y)-1, knight);
}
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
function gettingKnightLoc(x,y,knight){
    try {
        if(document.querySelector(".empty[x='"+(x)+"'][y='"+(y)+"']").children.length == 0){
            possibleLocs.push([x,y]);
        }else if(document.querySelector(".empty[x='"+(x)+"'][y='"+(y)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(x)+"'][y='"+(y)+"']").firstChild.getAttribute('color').match(knight.getAttribute('color'))){
            possibleLocs.push([x,y]);
        }
    } catch (error) {
    }
}
