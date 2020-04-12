const queens = document.querySelectorAll(".queen");
console.log(queens);

for (let i = 0; i < queens.length; i++) {
    const queen = queens[i];
    queenParent = queen.parentElement;
    var possibleLocs;
    var draggedX;
    var draggedY;
    queen.addEventListener('dragstart', function(e){
        draggedItem = queen;
        queenParent = queen.parentElement;
        x = queenParent.getAttribute('x');
        y = queenParent.getAttribute('y');
        possibleLocs = [[x,y]];
        getQueenLocs(draggedItem);
        removeDuplicates(possibleLocs);
        console.log(possibleLocs);
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color to dark gray
            var possibleLoc = document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']");
            var color = possibleLoc.getAttribute("originalBackgroundColor");
            possibleLoc.style.backgroundImage = "-webkit-"+"radial-gradient("+color+", rgba(1, 1, 1, .2))";
        }
        setTimeout(function(){
            queen.style.display = 'none';
        }, 0);
    });
    queen.addEventListener('dragend', function(e){
        draggedItem.style.display = 'block';
        for(let i = 0; i < possibleLocs.length; i++){ //here we are setting the possible locations background color back to normal
            document.querySelector(".empty[x='"+possibleLocs[i][0]+"'][y='"+possibleLocs[i][1]+"']").style.backgroundImage = null;
        }
        setTimeout(function(){
            possibleLocs = null;
            draggedItem = null;
            queenParent = null;
            x = null;
            y = null;
        },0)

    })
}
function getQueenLocs(draggedItem){
    getRookLocs(draggedItem);
    getBishopLocs(draggedItem);
}
function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b)
};
