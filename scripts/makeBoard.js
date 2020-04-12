console.log('Hello World');
var boardArray = new Array(8);
for (let i = 0; i < boardArray.length; i++) {
    boardArray[i] = new Array(8);  
}
function makeBoard(){
    var x=8;
    var y=8;
    var chessBoard = document.getElementById("chessBoard");
    var pawnImage = document.getElementById("pawn");
    for (var i=0; i<y; i++){
        var row = chessBoard.appendChild(document.createElement("div"));
        for (var j=0; j<x; j++){
            var span = row.appendChild(document.createElement("span"));
            span.setAttribute('y', i);
            span.setAttribute('x', j);
            span.className = "empty";
            span.setAttribute('originalBackgroundColor', (getComputedStyle(span).getPropertyValue("background-color")));
            var img;
            if((i==0&&j==0) || (i==0&&j==7) || (i==7&&j==0) || (i==7&&j==7)){
                img = span.appendChild(document.createElement('img'));
                if(i == 0)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/blackRook.png?raw=true', 'black', 'rook', img);
                if(i == 7)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/whiteRook.png?raw=true', 'white', 'rook', img);
            }
            if((i==0&&j==1) || (i==0&&j==6) || (i==7&&j==1) || (i==7&&j==6)){
                img = span.appendChild(document.createElement('img'));
                if(i == 0)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/blackKnight.png?raw=true', 'black', 'knight', img);
                if(i == 7)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/whiteKnight.png?raw=true', 'white', 'knight', img);
            }
            if((i==0&&j==2) || (i==0&&j==5) || (i==7&&j==2) || (i==7&&j==5)){
                img = span.appendChild(document.createElement('img'));
                if(i == 0)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/blackBishop.png?raw=true', 'black', 'bishop', img);
                if(i == 7)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/whiteBishop.png?raw=true', 'white', 'bishop', img);
            }
            if((i==0&&j==3) || (i==7&&j==3)){
                img = span.appendChild(document.createElement('img'));
                if(i == 0)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/blackQueen.png?raw=true', 'black', 'queen', img);
                if(i == 7)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/whiteQueen.png?raw=true', 'white', 'queen', img);
            }
            if((i==0&&j==4) || (i==7&&j==4)){
                img = span.appendChild(document.createElement('img'));
                if(i == 0)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/blackKing.png?raw=true', 'black', 'king', img);
                if(i == 7)
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/whiteKing.png?raw=true', 'white', 'king', img);
            }
            else if(i==1 || i == 6){
                img = span.appendChild(document.createElement('img'));
                if(i == 1){
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/blackPawn.png?raw=true','black','pawn',img);
                }
                if(i == 6){
                    makeImage('https://github.com/patosai/chess/blob/master/Sprites/whitePawn.png?raw=true','white','pawn',img);
                }
                img.setAttribute('firstMove', 'true');
            }
                
        }
    }
}

function makeImage(src, color, className, img){
    img.className = className;
    img.setAttribute('src', src);
    img.setAttribute('width', '90');
    img.setAttribute('height', '90');
    img.setAttribute('color', color);
    img.setAttribute('draggable', true);
}
/*html => markup

css => style

javascript => interactability*/