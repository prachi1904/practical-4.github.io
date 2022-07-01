var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]];

/* TODO implement core labyrinth functionality here */


/*print map on console log  */
this.printConsole = function () {
        this.height = this.map.length;
        this.width = this.map[0].length;
        let str = "";
        for (let i = 0; i < this.height; i++) {

            for (let j = 0; j < this.width; j++) {
                if (this.map[i][j] == 0) {

                    str += ' ';  /*add " " for space */

                } else {

                    str += '*';  /*add start for wall*/

                }
            }
            str += '\n';  /*next row of the labryinth*/
        }
        console.log(str);  
    }
/*print map on c */

    this.printDisplay = function (id) {
        let element = document.getElementById(id);
        element.style.position = "relative"; //complete grid 
        element.style.height = (this.height * CELL_SIZE).toString() + 'px'; /*if height = 5 then 5*40 = '200px' */
        element.style.width = (this.width * CELL_SIZE).toString() + 'px';
        element.style.border = "1px solid black";

        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {

                let cell = document.createElement('div');  // a single block 

                cell.style.height = CELL_SIZE.toString() + 'px';
                cell.style.width = CELL_SIZE.toString() + 'px';

                cell.style.position = "absolute"; 

                cell.style.left = (CELL_SIZE * j).toString() + 'px';

                cell.style.top = (CELL_SIZE * i).toString() + 'px';

                if (this.map[i][j] == 0) {
                    cell.style.backgroundColor = "white";  // spaces
                } else {
                    cell.style.backgroundColor = "grey";   //wall
                }
                element.appendChild(cell);
            }
        }
    }
    this.start = { x: 0, y: 0 };
    this.end = { x: 5, y: Math.floor(Math.random()*5) };
    this.playerPos = { x: 0, y: 0 };
    this.player = document.createElement('div');
    this.player.style.backgroundImage = "url('images/hero.jpg')";

    this.player.style.position = "absolute";

    //place the hero at start 
    this.player.style.left = (this.playerPos.x*CELL_SIZE).toString()+'px';
    this.player.style.top = (this.playerPos.y * CELL_SIZE).toString()+'px';

    this.player.style.height = CELL_SIZE.toString() + 'px'; // thus a square div size image height = '40px'
    this.player.style.width = CELL_SIZE.toString() + 'px';  // thus a square div size image width = '40px'

    this.player.style.zIndex = "30";

    //-----------------------------------------------------------------------------------//

    document.getElementById('map').appendChild(this.player);

    this.destination = document.createElement('div');
    this.destination.style.position = "absolute";
    this.destination.style.backgroundColor = "yellow";
    this.destination.style.height = CELL_SIZE.toString() + 'px';
    this.destination.style.width = CELL_SIZE.toString() + 'px';

    //place yellow at end 
    this.destination.style.left = (this.end.x*CELL_SIZE).toString()+'px';
    this.destination.style.top =(this.end.y*CELL_SIZE).toString()+'px';

    this.destination.style.zIndex="29";

    document.getElementById('map').appendChild(this.destination);

}

