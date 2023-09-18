const textToTypeInitial = "Cesar precisa de uma chave, Cesar precisa de uma pergunta, A pergunta de um passado não tão distante"; 
const textToTypeReplacement = " Insira a Senha:"; 
const typingSpeed = 100; 
const deletionSpeed = 50; 
const inputDelay = 1000; 

const typingElement = document.getElementById("typing-text");
const inputElement = document.createElement("input");
inputElement.type = "text"; 
inputElement.style.display = "none"; 

setTimeout(() => {
    typingElement.textContent = ""; 
    typingElement.style.display = "inline"; 

    let charIndex = 0;
    const typingInterval = setInterval(() => {
        typingElement.textContent += textToTypeInitial[charIndex];
        charIndex++;
        
        if (charIndex === textToTypeInitial.length) {
            clearInterval(typingInterval);

            setTimeout(() => {
                const deletionInterval = setInterval(() => {
                    if (typingElement.textContent.length > 0) {
                        typingElement.textContent = typingElement.textContent.slice(0, -1);
                    } else {
                        clearInterval(deletionInterval);
                        
                        charIndex = 0;
                        typingIntervalReplacement = setInterval(() => {
                            typingElement.textContent += textToTypeReplacement[charIndex];
                            charIndex++;
                            
                            if (charIndex === textToTypeReplacement.length) {
                                clearInterval(typingIntervalReplacement);
                                document.getElementById("output").appendChild(inputElement);
                                inputElement.style.display = "inline"; 
                                
                                inputElement.addEventListener("input", function() {
                                    if (inputElement.value === "Voce tambem sabe da resposta agora") {
                                        window.location.href = "LEVEL 6/index.html"; 
                                    }

                                    if (inputElement.value === "Você também sabe da resposta agora") {
                                        window.location.href = "LEVEL 6/index.html"; 
                                    }

                                    if (inputElement.value === "você também sabe da resposta agora") {
                                        window.location.href = "LEVEL 6/index.html"; 
                                    }

                                });
                            }
                        }, typingSpeed);
                    }
                }, deletionSpeed);
            }, inputDelay);
        }
    }, typingSpeed);
}, 1000);

document.addEventListener("DOMContentLoaded", function() {
    var numInput1 = document.getElementById("numInput1");
    var numInput2 = document.getElementById("numInput2");

    numInput1.addEventListener("input", function() {
        if (numInput1.value === "37") {
            numInput1.style.color = "rgb(0, 255, 0)";
        } else {
            numInput1.style.color = "rgb(255, 2, 2)";
        }
    });

    numInput2.addEventListener("input", function() {
        if (numInput2.value === "12") {
            numInput2.style.color = "rgb(0, 255, 0)";
        } else {
            numInput2.style.color = "rgb(255, 2, 2)";
        }
    });
});


const textElement = document.getElementById("text");
const cursorElement = document.getElementById("cursor");
const originalText = "O Império Romano, uma influente civilização da antiguidade, viu um ponto crucial sob o comando de Júlio Cesar. Ele era um líder militar habilidoso que expandiu o território romano por meio de campanhas como a conquista da Gália. Seu papel na transição da República Romana para o regime imperial e seu trágico assassinato em 44 a.C. Cesar era inteligente, Cesar sabe a resposta, Cesar precisa de uma chave, Cesar precisa de uma Pergunta. Mas ambas as coisas estão apenas no passado, um passado não tão distante...";
let index = 0;

function typeText() {
    if (index < originalText.length) {
        const currentChar = originalText[index];

        if (currentChar === "C" && originalText.slice(index, index + 5) === "Cesar") {
            textElement.innerHTML += `<span class="highlight">Cesar</span>`;
            index += 5;

           
            if (originalText.slice(index - 16, index) === "Cesar era inteligente") {
                textElement.lastElementChild.style.color = "blue";
            }
        } else {
            textElement.textContent += currentChar;
            index++;
        }

        setTimeout(typeText, 50);
    } else {
        cursorElement.style.display = "none"; 
    }
}


window.onload = () => {
    setTimeout(typeText, 1000); 
};






const hintIcon = document.getElementById('show-Popup');
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

hintIcon.addEventListener('click', () => {
    popup.style.display = 'block';
});

yesButton.addEventListener('click', () => {
    popup.style.display = 'none';
    const content = 'A pergunta está no site anterior, mas a resposta apenas Cesar sabe (Cifra de Cesar)';
    alert(content);
});

noButton.addEventListener('click', () => {
    popup.style.display = 'none';
});


