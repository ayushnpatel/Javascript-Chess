const kings = document.querySelectorAll(".king");
console.log(kings);

for (let i = 0; i < kings.length; i++) {
    const king = kings[i];
    kingParent = king.parentElement;
    var possibleLocs;
    var draggedX;
    var draggedY;
    king.addEventListener('dragstart', function(e){
        draggedItem = king;
        kingParent = king.parentElement;
        x = kingParent.getAttribute('x');
        y = kingParent.getAttribute('y');
        possibleLocs = [[x,y]];
        getKingLocs();
        console.log(possibleLocs);
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color to dark gray
            var possibleLoc = document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']");
            var color = possibleLoc.getAttribute("originalBackgroundColor");
            possibleLoc.style.backgroundImage = "-webkit-"+"radial-gradient("+color+", rgba(1, 1, 1, .2))";
        }
        setTimeout(function(){
            king.style.display = 'none';
        }, 0);
    });
    king.addEventListener('dragend', function(e){
        draggedItem.style.display = 'block';
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color back to normal
            document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']").style.backgroundImage = null;
        }
        setTimeout(function(){
            possibleLocs = null;
            draggedItem = null;
            kingParent = null;
            x = null;
            y = null;
        },0)

    })
}
function getKingLocs(){
    kingMoveChecks(parseInt(x)+1,y-1,draggedItem);
    kingMoveChecks(parseInt(x)+1,y,draggedItem);
    kingMoveChecks(parseInt(x)+1,parseInt(y)+1,draggedItem);
    kingMoveChecks(x,y-1,draggedItem);
    kingMoveChecks(x,parseInt(y)+1,draggedItem);
    kingMoveChecks(x-1,y-1,draggedItem);
    kingMoveChecks(x-1,y,draggedItem);
    kingMoveChecks(x-1,parseInt(y)+1,draggedItem);
}
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
function kingMoveChecks(x,y, king){
    console.log(x+"     "+y);
    try {
        if(document.querySelector(".empty[x='"+x+"'][y='"+y+"']").children.length == 0){
            possibleLocs.push([x,y]);
        }else if(document.querySelector(".empty[x='"+(x)+"'][y='"+(y)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(x)+"'][y='"+(y)+"']").firstChild.getAttribute('color').match(king.getAttribute('color'))){
            possibleLocs.push([x,y]);
        }
    } catch (error) {
        
    }
}
