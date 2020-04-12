const pawns = document.querySelectorAll('.pawn');
const squares = document.querySelectorAll('.square');
//console.log(pawns);
//console.log(squares);

let draggedItem = null;

for (let i = 0; i < pawns.length; i++) {
    const pawn = pawns[i];
    pawn.addEventListener('dragstart', function(e){
        //console.log('dragstart',e)
        draggedItem = pawn;
        setTimeout(function(){
            pawn.style.display = 'none';
        }, 0);
    });
    pawn.addEventListener('dragend', function(e){
        //console.log('dragend',e)
        setTimeout(function(){
            draggedItem.style.display = 'block';
            draggedItem = null;

        },0)

    })
    for (let j = 0; j < squares.length; j++) {
        /*const square = squares[j];
        square.addEventListener('dragover', function(e){
            e.preventDefault();
        })
        square.addEventListener('dragenter', function(e){
            e.preventDefault();
            //console.log('dragenter');
            makeBackgroundColor(this, 0.99);
        })
        square.addEventListener('dragleave', function(e){
            makeBackgroundColor(this, 0.4);
        })
        square.addEventListener('drop', function(e){
            //console.log('drop');
            this.append(draggedItem);
            makeBackgroundColor(this, 0.4);
        } );*/
        
    }
}

function makeBackgroundColor(item, alpha){
    current_color = getComputedStyle(item).getPropertyValue("background-color");
    match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(current_color)
    a = alpha
    item.style.backgroundColor = "rgba(" + [match[1],match[2],match[3],a].join(',') +")";
}