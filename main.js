const player1 = {
    name: 'SCORPION',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai'],
    attack: function() {
        console.log('Fight...');
    }
}

const player2 = {
    name: 'SUB-ZERO',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Sword'],
    attack: function() {
        console.log('Fight...');
    }
}

function createPlayer(className, playerObj) {
    // progressbar
    const $life = document.createElement('div');
    $life.classList.add('life');
    // $life.innerText = playerObj.hp;

    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = playerObj.name;

    const $progressBar = document.createElement('div');
    $progressBar.classList.add('progressbar');
    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    //character
    const $img = document.createElement('img');
    $img.src = playerObj.img;
    
    const $character = document.createElement('div');
    $character.classList.add('character');
    $character.appendChild($img);
    

    // player
    const $player = document.createElement('div');
    $player.classList.add(className);
    $player.appendChild($progressBar);
    $player.appendChild($character);


    // root
    const $root = document.querySelector('.arenas');
    $root.appendChild($player);
}


createPlayer('player1', player1);
createPlayer('player2', player2);