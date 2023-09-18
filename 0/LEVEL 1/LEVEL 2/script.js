let isAlternate = false;
let isFirstAlternate = true;

function animateLoadingText() {
    const loadingText = document.getElementById("loading");
    const originalText = loadingText.textContent;

    if (isAlternate && isFirstAlternate) {
        loadingText.textContent = originalText + " .";
        isFirstAlternate = false;
    } else {
        loadingText.textContent = originalText + " ";
    }

    isAlternate = !isAlternate;

    setTimeout(() => {
        loadingText.textContent = originalText + " ..";
        setTimeout(() => {
            loadingText.textContent = originalText + " ...";
            setTimeout(() => {
                loadingText.textContent = originalText;
                animateLoadingText();
            }, 500);
        }, 500);
    }, 500);
}


animateLoadingText();


function animatePercentage() {
    let currentPercentage = 0;
    const targetPercentage = 75;
    const increment = targetPercentage / 670;

    const animatedHeading = document.getElementById("animated-heading");

    setTimeout(() => { 
        const interval = setInterval(() => {
            if (currentPercentage <= targetPercentage) {
                animatedHeading.textContent = `${currentPercentage.toFixed(0)}%`;
                currentPercentage += increment;
            } else {
                clearInterval(interval);
               // Nova porcentagem do glitch
                const percentElement = document.createElement("span");
                percentElement.textContent = "let percentage = 75%";
                percentElement.className = "animated-heading";
                animatedHeading.parentNode.replaceChild(percentElement, animatedHeading);

                alternateRandomChars();
                alternateRandomColors();
            }
        }, 20); // Uns 2 segundos pra começar a animação
    }, 2000); 
}




function alternateRandomChars() {
    const loadingText = document.getElementById("loading");
    const title = document.getElementById("title");
    const characters = "inverso";
    let showPassword = true;
    let isFirstCycle = true;

    setInterval(() => {
        if (isFirstCycle) {
            if (showPassword) {
                loadingText.textContent = "Senha = 1212";
                title.textContent = "inverso";
            } else {
                loadingText.textContent = "inverso";
                title.textContent = "Inverso..."; // Muda o titulo
            }
            showPassword = !showPassword;
            isFirstCycle = false;
        } else {
            let randomText = '';
            for (let i = 0; i < loadingText.textContent.length; i++) {
                randomText += characters[Math.floor(Math.random() * characters.length)];
            }
            loadingText.textContent = randomText;
        }
    }, 3000); 
}


function alternateRandomColors() {
    const loadingText = document.getElementById("loading");

    setInterval(() => {
        const randomShadow = `${Math.random() * 10}px ${Math.random() * 10}px ${Math.random() * 10}px rgba(255, 0, 0, 0.3)`;

        loadingText.style.textShadow = randomShadow;
    }, 2000); 
}


animateLoadingText();
setTimeout(animatePercentage, 500);



document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        const consoleElement = document.querySelector(".console");
        const maxLines = 9;
        const targetLine = 76;
        let currentLine = 0;
        let interval;
        let currentPercentage = 0;

        function writeLine(text, style) {
            const lineElement = document.createElement("p");
            lineElement.textContent = text;
            if (style) {
                lineElement.style.color = style.color;
                lineElement.style.textShadow = style.textShadow;
            }
            if (currentLine >= maxLines) {
                consoleElement.removeChild(consoleElement.firstChild);
            }
            consoleElement.appendChild(lineElement);
            currentLine++;
            consoleElement.scrollTop = consoleElement.scrollHeight;

            if (currentLine >= targetLine) {
                clearInterval(interval);
                if (currentLine === targetLine) {
                    writeLine("C:/ Senha do Console");
                    const inputElement = document.createElement("input");
                    inputElement.classList.add("input");
                    consoleElement.appendChild(inputElement);
                }
            }
        }

        function generateRandomCharacters(length) {
            const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            let result = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                result += characters.charAt(randomIndex);
            }
            return result;
        }

        function startWriting() {
            interval = setInterval(() => {
                if (currentLine <= targetLine) {
                    if (currentLine === 75) {
                        const randomCharacters = generateRandomCharacters(20);
                        writeLine(`ERROR AT LINE 75 ERROR CODE: ${randomCharacters}`, {
                            color: "red",
                            textShadow: "0 0 5px rgba(255, 0, 0, 0.5)"
                        });
                    } else {
                        writeLine(`let percentage = ${currentLine}`);
                    }
                } else {
                    clearInterval(interval);
                }
            }, 200);
        }
       
        let is2121Entered = false; 

        function handleCommand(inputValue) {
            if (inputValue === "2121") {
                is2121Entered = true; 
                for (let i = 0; i < 5; i++) {
                    consoleElement.removeChild(consoleElement.firstChild);
                    currentLine--;
                }
                writeLine("C:/ Digite um comando");
                const newInputElement = document.createElement("input");
                newInputElement.classList.add("input");
                consoleElement.appendChild(newInputElement);
            } else if (is2121Entered && inputValue === "let percentage = 100") {
                percentualSet = true;
                writeLine("Set percentual to 100.");
        
                let countdown = 3;
                const countdownInterval = setInterval(() => {
                    if (countdown > 0) {
                        writeLine(`Redirecting in ${countdown} seconds`);
                        countdown--;
                    } else {
                        clearInterval(countdownInterval);
                        window.location.href = "LEVEL 3/index.html"; // Nova pagina do site maluco
                    }
                }, 1000);
            } else if (percentualSet && inputValue === "") {
                const animatedHeadingElement = document.getElementById("animated-heading");
                animatedHeadingElement.textContent = "100%";
                percentElement.textContent = "let percentage = 100%";
                writeLine("Updated animated-heading and loading class.");
            }
        }
        
        

        writeLine("DOM content Loaded = true");
        writeLine("Confidencial Acess = Moderate");
        writeLine("Login as Guest");
        startWriting();

        consoleElement.addEventListener("input", function (event) {
            const input = event.target;
            if (input.classList.contains("input")) {
                handleCommand(input.value);
            }
        });
    }, 2000);
});

var icon = document.getElementById("HIHIHI");


icon.onclick = function() {
   
    var confirmacao = confirm("Tem certeza que quer pular de fase?");
    
   
    if (confirmacao) {
        window.location.href = "LEVEL 3/index.html"; 
    }
};


