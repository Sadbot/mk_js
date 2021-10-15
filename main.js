const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    name: 'SCORPION',
    hp: 100,
    player: 1,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Kunai'],
    attack: function() {
        console.log('Fight...');
    }
}

const player2 = {
    name: 'SUB-ZERO',
    hp: 100,
    player: 2,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Sword'],
    attack: function() {
        console.log('Fight...');
    }
}

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }

    return $tag;
}

function createPlayer(playerObj) {
    const $life = createElement('div', 'life');
    const $name = createElement('div', 'name');
    const $progressBar = createElement('div', 'progressbar');
    const $img = createElement('img');
    const $character = createElement('div', 'character');
    const $player = createElement('div', 'player' + playerObj.player);

    $life.style.width = playerObj.hp + '%';
    $name.innerText = playerObj.name;
    $img.src = playerObj.img;

    $progressBar.appendChild($life);
    $progressBar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressBar);
    $player.appendChild($character);

    return $player;
}

function changeHP(initiator, owner) {
    if (initiator.hp == 0) {
        return;
    }

    const $playerLife = document.querySelector('.player' +  owner.player + ' .life');

    owner.hp -= Math.floor(Math.random() * 20 + 1);
    if (owner.hp <= 0) {
        owner.hp = 0;
        $arenas.appendChild(playerLose(initiator.name));
    }

    $playerLife.style.width = owner.hp + '%';
}

function playerLose(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    $loseTitle.innerText = name + ' win';

    $randomButton.disabled = true;
    $randomButton.style.display = 'none';
    
    return $loseTitle;
}

$randomButton.addEventListener('click', function(e) {
    changeHP(player1, player2);
    changeHP(player2, player1);
});

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));