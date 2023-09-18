const gameContainer = document.querySelector('.game-container');
const character = document.getElementById('character');
const walls = document.querySelectorAll('.wall');

let characterX = 0;
let characterY = 0;
let characterRotation = 0;
const moveSpeed = 5;
const rotationSpeed = 3;
const keysPressed = {};
let pre = 'fas fa-chevron-up';

let characterHit = false;

function updateCharacterPosition() {
    character.style.left = characterX + 'px';
    character.style.top = characterY + 'px';
    character.style.transform = `rotate(${characterRotation}deg)`;
}

function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
}

function smoothMovement() {
    const containerRect = gameContainer.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const deltaX = (keysPressed['ArrowRight'] || keysPressed['d'] ? moveSpeed : 0) -
        (keysPressed['ArrowLeft'] || keysPressed['a'] ? moveSpeed : 0);

    const deltaY = (keysPressed['ArrowDown'] || keysPressed['s'] ? moveSpeed : 0) -
        (keysPressed['ArrowUp'] || keysPressed['w'] ? moveSpeed : 0);

    const targetX = clamp(characterX + deltaX, 0, containerWidth - character.clientWidth);
    const targetY = clamp(characterY + deltaY, 0, containerHeight - character.clientHeight);

    let collision = false;
    walls.forEach((wall) => {
        const wallRect = wall.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect();

        if (
            characterRect.right + deltaX > wallRect.left &&
            characterRect.left + deltaX < wallRect.right &&
            characterRect.bottom + deltaY > wallRect.top &&
            characterRect.top + deltaY < wallRect.bottom
        ) {
            collision = true;
        }
    });

    if (!collision) {
        characterX = targetX;
        characterY = targetY;

        if (deltaX > 0) {
            characterRotation = rotationSpeed;
        } else if (deltaX < 0) {
            characterRotation = -rotationSpeed;
        } else {
            characterRotation = 0;
        }
    }

    updateCharacterPosition();

    const arrow = character.querySelector('i');

    if (keysPressed['ArrowUp'] || keysPressed['w']) {
        pre = 'fas fa-chevron-up';
    } else if (keysPressed['ArrowRight'] || keysPressed['d']) {
        pre = 'fas fa-chevron-right';
    } else if (keysPressed['ArrowLeft'] || keysPressed['a']) {
        pre = 'fas fa-chevron-left';
    } else if (keysPressed['ArrowDown'] || keysPressed['s']) {
        pre = 'fas fa-chevron-down';
    }
    
    
    arrow.className = pre;
}

document.addEventListener('keydown', (event) => {
    keysPressed[event.key] = true;
});

document.addEventListener('keyup', (event) => {
    keysPressed[event.key] = false;
});

function checkCharacterCollision() {
    const characterRect = character.getBoundingClientRect();
    const specialElements = document.querySelectorAll('.special');

    specialElements.forEach((specialElement) => {
        const specialRect = specialElement.getBoundingClientRect();

        if (
            characterRect.right > specialRect.left &&
            characterRect.left < specialRect.right &&
            characterRect.bottom > specialRect.top &&
            characterRect.top < specialRect.bottom
        ) {
            
            window.location.href = 'LEVEL 4/index.html'; 
        }
    });
}

function gameLoop() {
    smoothMovement();
    checkCharacterCollision();

    if (characterHit) {
        
        characterX = 0;
        characterY = 0;
        characterHit = false;
    }

    requestAnimationFrame(gameLoop);
}

function createProjectile() {
    const projectile = document.createElement('div');
    projectile.className = 'projectile';
    gameContainer.appendChild(projectile);

    const containerRect = gameContainer.getBoundingClientRect();
    const containerHeight = containerRect.height;
    const projectileHeight = 20;

    const initialX = containerRect.width - projectileHeight - 100;
    const initialY = Math.random() * (containerHeight - projectileHeight);

    projectile.style.left = initialX + 'px';
    projectile.style.top = initialY + 'px';

    const projectileSpeed = 5;

    function moveProjectile() {
        const projectileRect = projectile.getBoundingClientRect();
        const characterRect = character.getBoundingClientRect();

        if (
            projectileRect.left < characterRect.right &&
            projectileRect.right > characterRect.left &&
            projectileRect.top < characterRect.bottom &&
            projectileRect.bottom > characterRect.top
        ) {
            location.reload();
        }

        const newX = projectileRect.left - projectileSpeed;
        projectile.style.left = newX + 'px';

        if (newX + projectileHeight < 0) {
            gameContainer.removeChild(projectile);
        } else {
            requestAnimationFrame(moveProjectile);
        }
    }

    moveProjectile();
}

const okButton = document.getElementById('okButton');
const controler = document.querySelector('.controler');

okButton.addEventListener('click', () => {
    controler.classList.add('hide');
    gameLoop();
    setInterval(createProjectile, 200);
});

var icon = document.getElementById("HIHIHI");


icon.onclick = function() {
   
    var confirmacao = confirm("Tem certeza que quer pular de fase? Recomendo que utilize apenas se o Nível estiver bugado em sua tela.");
    
   
    if (confirmacao) {
        window.location.href = "LEVEL 4/index.html"; 
    }
};
