const modeToggle = document.querySelector('.mode-toggle');
const body = document.body;
const mainContent = document.querySelector('.main-content');

modeToggle.addEventListener('click', () => {
  modeToggle.classList.toggle('night');

  const sunIcon = modeToggle.querySelector('.fa-sun');
  const moonIcon = modeToggle.querySelector('.fa-moon');

  if (modeToggle.classList.contains('night')) {
    sunIcon.style.opacity = '0';
    sunIcon.style.transform = 'translateY(-10px)';
    moonIcon.style.opacity = '1';
    moonIcon.style.transform = 'translateY(0)';
    mainContent.classList.add('dark-mode-content');
    body.classList.add('dark-mode');
  } else {
    sunIcon.style.opacity = '1';
    sunIcon.style.transform = 'translateY(0)';
    moonIcon.style.opacity = '0';
    moonIcon.style.transform = 'translateY(10px)';
    mainContent.classList.remove('dark-mode-content');
    body.classList.remove('dark-mode');
  }
});

const textToTypeInitial = "A primeira letra de cada palavra escondida, um alfabeto diferente... Numeros"; 
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
                                    if (inputElement.value === "14 15 5 20 13") {
                                        window.location.href = "LEVEL 7/index1.html"; 
                                    }

                                    if (inputElement.value === "141552013") {
                                        window.location.href = "LEVEL 7/index1.html"; 
                                    }

                                    if (inputElement.value === "1415052013") {
                                        window.location.href = "LEVEL 7/index1.html"; 
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
    const content = 'A inicial de cada palavra em alfabeto numerico gera uma ordem de números';
    alert(content);
});

noButton.addEventListener('click', () => {
    popup.style.display = 'none';
});


var icon = document.getElementById("HIHIHI");


icon.onclick = function() {
   
    var confirmacao = confirm("Tem certeza que quer pular de fase?");
    
   
    if (confirmacao) {
        window.location.href = "LEVEL 7/index1.html"; 
    }
};

