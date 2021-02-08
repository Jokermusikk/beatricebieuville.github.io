const players = [];
const player1 = new Tone.Player( address + lyd1).toDestination();
players.push(player1);
const player2 = new Tone.Player( address + lyd2).toDestination();
players.push(player2);
const player3 = new Tone.Player( address + lyd3).toDestination();
players.push(player3);
const player4 = new Tone.Player( address + lyd4).toDestination();
players.push(player4);
const player5 = new Tone.Player( address + lyd5).toDestination();
players.push(player5);
const player6 = new Tone.Player( address + lyd6).toDestination();
players.push(player6);
const player7 = new Tone.Player( address + lyd7).toDestination();
players.push(player7);
const player8 = new Tone.Player( address + lyd8).toDestination();
players.push(player8);
const player9 = new Tone.Player( address + lyd9).toDestination();
players.push(player9);
const player10 = new Tone.Player( address + lyd10).toDestination();
players.push(player10);
function playSound(range,element,button){
        var slider = document.getElementById(arguments[0]);
        slider.oninput = function() {
          element.playbackRate = this.value;

        }
        document.getElementById(arguments[2]).addEventListener("click", function() {
          if (element.state !== 'started') {
            element.loop = true;
            element.start();
          } else {
            element.stop();
          }
        });
};
for (let i=1; i<11; i++){
     const range = String("range" + i);
     const lyd = players[i-1];
     const knapp = String("knapp" + i);
     playSound(range, lyd, knapp);
     };
