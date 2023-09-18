const textToTypeInitial = " Insira a Senha"; 
const textToTypeReplacement = " Insira o Plus Code:"; 
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
                                    if (inputElement.value === "4CJ9Q8F7+J7") {
                                        window.location.href = "LEVEL -5/index.html"; 
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

$(window).on('load', addNoise);

function addNoise() {
  $('.loader').text('Bring in \'da noise!');
  $('.noise-wrapper').css('opacity',1);
}






