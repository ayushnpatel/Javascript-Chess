const whitePawns = document.querySelectorAll(".pawn[color='white']");
console.log(whitePawns);
for (let i = 0; i < whitePawns.length; i++) {
    const whitePawn = whitePawns[i];
    whitePawnParent = whitePawn.parentElement;
    var possibleLocs;
    var draggedX;
    var draggedY;
    whitePawn.addEventListener('dragstart', function(e){
        draggedItem = whitePawn;
        whitePawnParent = whitePawn.parentElement;
        x = whitePawnParent.getAttribute('x');
        y = whitePawnParent.getAttribute('y');
        possibleLocs = [[x,y]];
        getPawnLocs(draggedItem);
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color to dark gray
            console.log(possibleLocs);
            var possibleLoc = document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']");
            var color = possibleLoc.getAttribute("originalBackgroundColor");
            possibleLoc.style.backgroundImage = "-webkit-"+"radial-gradient("+color+", rgba(1, 1, 1, .2))";
        }
        setTimeout(function(){
            whitePawn.style.display = 'none';
        }, 0);
    });
    whitePawn.addEventListener('dragend', function(e){
        //console.log('dragend',e)
        draggedItem.style.display = 'block';
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color back to normal
            document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']").style.backgroundImage = null;
        }
        setTimeout(function(){
            possibleLocs = null;
            draggedItem = null;
            whitePawnParent = null;
            x = null;
            y = null;
        },0)

    })
}

function getPawnLocs(pawn){
    switch (pawn.getAttribute('color')) {
        case 'white':
            console.log("JAKSFJKASHFJKHASFJKAHSFJKHASKFJHASKFJKAHSFKJ");
            var anythingFront = false;
            if(pawn.getAttribute('firstMove').match('true')){
                gettingPawnLocs(x,y-1);
                gettingPawnLocs(x,y-2);
            }else{
                gettingPawnLocs(x,y-1);
            }
            try {
                if(document.querySelector(".empty[x='"+(x-1)+"'][y='"+(y-1)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(x-1)+"'][y='"+(y-1)+"']").firstChild.getAttribute('color').match(pawn.getAttribute('color'))){
                    possibleLocs.push([x-1,y-1]);
                }  
            } catch (error) {     
            }
            try {
                if(document.querySelector(".empty[x='"+(parseInt(x)+1)+"'][y='"+(y-1)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(parseInt(x)+1)+"'][y='"+(y-1)+"']").firstChild.getAttribute('color').match(pawn.getAttribute('color'))){
                    possibleLocs.push([parseInt(x)+1,y-1]);
                }  
            } catch (error) {   
            } 
            break;
            
        case 'black':
            console.log("ajs");
            if(pawn.getAttribute('firstMove').match('true')){
                gettingPawnLocs(x,parseInt(y)+1);
                gettingPawnLocs(x,parseInt(y)+2);
            }else{
                gettingPawnLocs(x,parseInt(y)+1);
            }
            try {
                if(document.querySelector(".empty[x='"+(parseInt(x)+1)+"'][y='"+(parseInt(y)+1)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(parseInt(x)+1)+"'][y='"+(parseInt(y)+1)+"']").firstChild.getAttribute('color').match(pawn.getAttribute('color'))){
                    possibleLocs.push([parseInt(x)+1,parseInt(y)+1]);
                }  
            } catch (error) {     
            }
            try {
                if(document.querySelector(".empty[x='"+(x-1)+"'][y='"+(parseInt(y)+1)+"']").children.length == 1 && !document.querySelector(".empty[x='"+(x-1)+"'][y='"+(parseInt(y)+1)+"']").firstChild.getAttribute('color').match(pawn.getAttribute('color'))){
                    possibleLocs.push([x-1,parseInt(y)+1]);
                }   
            } catch (error) {     
            }
            break;
    }
}
function gettingPawnLocs(x,y){
    try {
        if(document.querySelector(".empty[x='"+(x)+"'][y='"+(y)+"']").children.length == 0)
            possibleLocs.push([x,y]);
    } catch (error) {
    }
}