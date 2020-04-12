const blackPawns = document.querySelectorAll(".pawn[color='black']");
const squares = document.querySelectorAll('.empty');
console.log(blackPawns);
for (let i = 0; i < blackPawns.length; i++) {
    const blackPawn = blackPawns[i];
    blackPawnParent = blackPawn.parentElement;
    var possibleLocs;
    blackPawn.addEventListener('dragstart', function(e){
        draggedItem = blackPawn;
        blackPawnParent = blackPawn.parentElement;
        x = blackPawnParent.getAttribute('x');
        y = blackPawnParent.getAttribute('y');
        possibleLocs = [[x,y]];
        getPawnLocs(blackPawn);
        console.log(possibleLocs);
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color to dark gray
            var possibleLoc = document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']");
            var color = possibleLoc.getAttribute("originalBackgroundColor");
            possibleLoc.style.backgroundImage = "-webkit-"+"radial-gradient("+color+", rgba(1, 1, 1, .2))"; 
    }
        setTimeout(function(){
            blackPawn.style.display = 'none';
        }, 0);
    });
    blackPawn.addEventListener('dragend', function(e){
        draggedItem.style.display = 'block';
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color back to normal
                document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']").style.backgroundImage = null;
        }
        setTimeout(function(){
            possibleLocs = null;
            draggedItem = null;
            blackPawnParent = null;
            x = null;
            y = null;
        },0)
    })
    for (let j = 0; j < squares.length; j++) {
        const square = squares[j];
        var squareX;
        var squareY;
        var target;
        square.addEventListener('dragover', function(e){
            e.preventDefault();
            squareX = e.target.getAttribute('x');
            squareY = e.target.getAttribute('y');

        })
        square.addEventListener('dragenter', function(e){
            e.preventDefault();
            makeBackgroundColor(this, 0.99);
        })
        square.addEventListener('dragleave', function(e){
            makeBackgroundColor(this, 0.4);
        })
        square.addEventListener('drop', function(e){
            if(e.target.parentElement != null && e.target.parentElement.className.match('empty')){
                squareX = e.target.parentElement.getAttribute('x');
                squareY = e.target.parentElement.getAttribute('y');
                target = e.target.parentElement;
            }else{
                squareX = e.target.getAttribute('x');
                squareY = e.target.getAttribute('y');
                target = e.target;
            }
                        /*console.log("the possible locs are "+possibleLocs);
            console.log("the squareX is "+squareX+"      and the square Y is "+squareY);
            console.log("the x value of the original position is "+x+"    and the y value of the original position is"+y);*/
            if(possibleLocs!=null){
                for(let x = 0; x < possibleLocs.length; x++){
                    //console.log(possibleLocs[x][0]+" == "+squareX+",        "+possibleLocs[x][1]+" == "+squareY+",        "+squareX+" != "+x+",       "+squareY+" != "+y);
                    if(possibleLocs[x][0] == squareX && possibleLocs[x][1] == squareY){
                        //console.log("YEEEEEEEEEEHAWWWWWWWW");
                        if(squareX != x && squareY != y)
                            draggedItem.setAttribute('firstMove','false');
                        if(this.firstElementChild != null){
                            this.removeChild(this.firstElementChild) //have to set the attributes (x,y) of images because when you hover over the image/dragover, it is receiving the image rather than the square so this for loop never runs
                            this.append(draggedItem);
                        }else
                            this.append(draggedItem);
                        
                    }
                }
            }
            makeBackgroundColor(this, 0.4);
        } );
        
    }
}

function makeBackgroundColor(item, alpha){
    current_color = getComputedStyle(item).getPropertyValue("background-color");
    match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color)
    a = alpha
    item.style.backgroundColor = "rgba(" + [match[1],match[2],match[3],a].join(',') +")";
}
