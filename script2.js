const players = [];
const player1 = new Tone.Player( address + lyd1);
players.push(player1);
const player2 = new Tone.Player( address + lyd2);
players.push(player2);
const player3 = new Tone.Player( address + lyd3);
players.push(player3);
const player4 = new Tone.Player( address + lyd4);
players.push(player4);
const player5 = new Tone.Player( address + lyd5);
players.push(player5);
const player6 = new Tone.Player( address + lyd6);
players.push(player6);
const player7 = new Tone.Player( address + lyd7);
players.push(player7);
const player8 = new Tone.Player( address + lyd8);
players.push(player8);
const player9 = new Tone.Player( address + lyd9);
players.push(player9);
const player10 = new Tone.Player( address + lyd10);
players.push(player10);


function prepareSound(index){
        var player = players[index-1];
        player.connect(gainNodes[index-1]);
        
        var pitchSlider = document.getElementById(String("range" + index));
        pitchSlider.oninput = function() {
          player.playbackRate = this.value;
        }
        
        var gainSlider = document.getElementById(String("gain" + index));
        gainSlider.oninput = function() {
          gainNodes[index-1].gain.rampTo(this.value,0.01);
        }
        
        var playButton = document.getElementById(String("knapp" + index));
        playButton.addEventListener("click", function() {
          if (player.state !== 'started') {
            player.loop = true;
            player.start();
            this.classList.add('playing');
          } else {
            player.stop();
            this.classList.remove('playing');
          }
        });
};
const gainNodes = [];

for (let i=1; i<11; i++){
    gainNodes.push(new Tone.Gain(0,"decibel").toDestination());
    prepareSound(i);
};
