const character = document.getElementById('character');
const gameContainer = document.querySelector('.game-container');
let characterX = 0;
let characterY = 0;
const moveSpeed = 4;
let movingUp = false;
let movingDown = false;
let movingLeft = false;
let movingRight = false;
let characterDirection = 'up';

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

const windowCenterX = windowWidth / 2;
const windowCenterY = windowHeight / 2;

const marginX = windowWidth * 0.2;
const marginY = windowHeight * 0.2;

function updateCharacterPosition() {
    character.style.transform = `translate(${characterX}px, ${characterY}px)`;
}

function moveCharacter() {
    if (movingUp && characterY > 0) {
        characterY -= moveSpeed;
        characterDirection = 'up';
    }
    if (movingDown && characterY < gameContainer.clientHeight - character.clientHeight) {
        characterY += moveSpeed;
        characterDirection = 'down';
    }
    if (movingLeft && characterX > 0) {
        characterX -= moveSpeed;
        characterDirection = 'left';
    }
    if (movingRight && characterX < gameContainer.clientWidth - character.clientWidth) {
        characterX += moveSpeed;
        characterDirection = 'right';
    }

    updateCharacterPosition();

    const arrow = character.querySelector('i');
    arrow.className = `fas fa-chevron-${characterDirection}`;

    updateCameraPosition();

    if ((characterX / gameContainer.clientWidth) * 100 >= 95) {
        const overlay = document.querySelector('.overlay');
        overlay.style.opacity = 1; 
        overlay.style.pointerEvents = 'auto'; 
        setTimeout(function(){
            alert('Olhar para essa tela vazia é tão interessante assim?')
            alert('Gostou da música? Ela é do Gravity falls')
            alert('Eai você gostou do site?')
            alert('Não é querendo me gabar nem nada mas no minimo ficou muito bom :D')
            alert('...')
            alert('Por quanto tempo você ainda vai ficar nessa tela completamente vazia?')
            alert('.')
            alert('.')
            alert('.')
            alert('Você quer mais niveis?')
            alert('Vou pensar no caso mas por agora...')
            alert('É isso... Muito obrigado por vir até aqui, até mais')
            alert('Iniciando LOOP!')
        }, 24000);        
    }

    requestAnimationFrame(moveCharacter);
}

function updateCameraPosition() {
    const scrollX = characterX - windowCenterX + character.clientWidth / 2;
    const scrollY = characterY - windowCenterY + character.clientHeight / 2;

    window.scrollTo(
        Math.min(Math.max(scrollX, 0), gameContainer.clientWidth - windowWidth + marginX),
        Math.min(Math.max(scrollY, 0), gameContainer.clientHeight - windowHeight + marginY)
    );
}

document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'w':
        case 'arrowup':
            movingUp = true;
            break;
        case 's':
        case 'arrowdown':
            movingDown = true;
            break;
        case 'a':
        case 'arrowleft':
            movingLeft = true;
            break;
        case 'd':
        case 'arrowright':
            movingRight = true;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    const key = event.key.toLowerCase();

    switch (key) {
        case 'w':
        case 'arrowup':
            movingUp = false;
            break;
        case 's':
        case 'arrowdown':
            movingDown = false;
            break;
        case 'a':
        case 'arrowleft':
            movingLeft = false;
            break;
        case 'd':
        case 'arrowright':
            movingRight = false;
            break;
    }
});

updateCharacterPosition();
moveCharacter();


document.addEventListener("DOMContentLoaded", function() {
    var audio = document.getElementById("myAudio");
    var playButton = document.getElementById("playButton");

    function simulateButtonClick() {
        var event = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
        });
        playButton.dispatchEvent(event);
    }

  
    setTimeout(simulateButtonClick, 100);
    
    playButton.addEventListener("click", function() {
     
        var promise = audio.play();

        if (promise !== undefined) {
            promise.then(function() {
          
            }).catch(function(error) {
           
                console.error("Erro ao reproduzir áudio: " + error);
            });
        }
    });
});


