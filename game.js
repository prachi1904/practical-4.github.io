/* TODO implement game logic here */
window.onload = function () {
    let labyrinth = new Labyrinth();
    labyrinth.printConsole();
    labyrinth.printDisplay('map');

     // move the player 


    document.onkeydown = function (event) {
        var char = event.keyCode;

        /*
                                        w (87)/ up(38)

                a(65) left-arrow  (37)              d (68),  right -arrow (39)
                                
                                      s (83)  down(40)


        */

        if (char == 37 || char == 65) {
            if (labyrinth.playerPos.x - 1 >= 0 && labyrinth.map[labyrinth.playerPos.y][labyrinth.playerPos.x - 1] == 0) {
                labyrinth.playerPos.x -= 1;
                labyrinth.player.style.left = (labyrinth.playerPos.x * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 40 || char == 83) {
            if (labyrinth.playerPos.y + 1 < labyrinth.height  && labyrinth.map[labyrinth.playerPos.y+1][labyrinth.playerPos.x] == 0) {
                labyrinth.playerPos.y += 1;
                labyrinth.player.style.top = (labyrinth.playerPos.y * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 39 || char == 68) {
            if (labyrinth.playerPos.x + 1 < labyrinth.width && labyrinth.map[labyrinth.playerPos.y][labyrinth.playerPos.x + 1] == 0) {
                labyrinth.playerPos.x += 1;
                labyrinth.player.style.left = (labyrinth.playerPos.x * CELL_SIZE).toString() + 'px';
            }
        } else if (char == 38 || char == 87)  {
            if (labyrinth.playerPos.y - 1 >= 0  && labyrinth.map[labyrinth.playerPos.y-1][labyrinth.playerPos.x] == 0) {
                labyrinth.playerPos.y -= 1;
                labyrinth.player.style.top = (labyrinth.playerPos.y * CELL_SIZE).toString() + 'px';
            }
        }

        if(labyrinth.playerPos.x == labyrinth.end.x && labyrinth.playerPos.y == labyrinth.end.y){
            alert("Congratulations!");
        }
    }
}