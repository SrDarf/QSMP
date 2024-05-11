let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});



let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

let prevScrollPos = window.pageYOffset;

window.addEventListener('scroll', function () {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById('navbar');

  if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('hide-nav');
  } else {
    navbar.classList.add('hide-nav');
  }


  if (currentScrollPos === 0 || !canScrollUp()) {
    navbar.style.background = 'rgba(255, 253, 253, 0)';
  } else {
    navbar.style.background = 'rgba(255, 253, 253, 0)';
  }

  prevScrollPos = currentScrollPos;
});


function canScrollUp() {
  return window.scrollY > 0;
}

const typedSpan = document.getElementById("typed");
const totype = ["Crypto", "Stock Exchange", "Your future", "Crypto"];

const delayTyping_char = 100;
const delayErasing_text = 150;
const delayTyping_text = 1000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
  if (charIndex < totype[totypeIndex].length) {
    typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, delayTyping_char);
  } else {
    if (totypeIndex !== totype.length - 1) {
      setTimeout(eraseText, delayTyping_text);
    }
  }
}

function eraseText() {
  if (charIndex > 0) {
    typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
    charIndex = charIndex-1;
    setTimeout(eraseText, delayErasing_text);
  } else {
    totypeIndex++;

    if (totypeIndex >= totype.length)
      totypeIndex = 0;
    setTimeout(typeText, delayTyping_text);
  }
}

window.onload = function() {
  if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
}







document.addEventListener("DOMContentLoaded", function() {
  const starsBg = document.querySelector(".stars-bg");
  const toggleButton = document.getElementById("toggleStars");

  toggleButton.addEventListener("click", function() {
    if (starsBg.classList.contains("active")) {
      starsBg.classList.remove("active");
      starsBg.style.filter = "none";
      document.body.style.backgroundColor = "none";
    } else {
      starsBg.classList.add("active");
      starsBg.style.filter = "blur(5px)";
      document.body.style.backgroundColor = "none";

      setTimeout(function() {
        starsBg.style.filter = "none";
      }, 1000);
    }
  });

  const toggleIcon = document.getElementById("toggleStars");
  let isStar = true;

  toggleIcon.addEventListener("click", () => {
    toggleIcon.style.transform = "rotate(180deg)";
  
    setTimeout(() => {
      if (isStar) {
        toggleIcon.classList.remove("fa-star");
        toggleIcon.classList.add("fa-moon");
      } else {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-star");
      }

      toggleIcon.style.transform = "rotate(0deg)";
      isStar = !isStar;
    }, 500);
  });
});


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function handleScroll(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}

const observer = new IntersectionObserver(handleScroll, {
  root: null, 
  rootMargin: '0px', 
  threshold: 0.5, 
});

const underlineElements = document.querySelectorAll('.underline');

underlineElements.forEach((element) => {
  observer.observe(element);
});

let blackholeEnlarged = false; 
let navbar = document.getElementById("navbar");
let customCursor = document.querySelector(".custom-cursor");


function enlargeBlackhole() {
    if (!blackholeEnlarged) {
        const blackhole = document.getElementById("blackhole");
        blackhole.style.transform = "scale(100)";

        alert('UM BURACO NEGRO FOI ENCONTRADO! VAMOS TENTAR TE TELEPORTAR EM ALGUNS SEGUNDOS')
        setTimeout(function () {
          window.location.href = "LEVEL 1/index.html"; 
      }, 3000);
        blackholeEnlarged = true;
        customCursor.style.display = "block";

       
        document.body.style.cursor = 'none';

       
        document.body.style.setProperty('cursor', 'none', 'important'); 
    }
}

function hideNavbar() {
    navbar.classList.add("hidden"); 
}


function moveCursor() {
    const radius = 50; 
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const angle = performance.now() / 1000; 

    const newX = centerX + radius * Math.cos(angle);
    const newY = centerY + radius * Math.sin(angle);

  
    document.documentElement.style.setProperty('--cursor-x', newX + 'px');
    document.documentElement.style.setProperty('--cursor-y', newY + 'px');

    if (blackholeEnlarged) {
        customCursor.style.left = newX + 'px'; 
        customCursor.style.top = newY + 'px';
    }

    requestAnimationFrame(moveCursor);
}


window.addEventListener('load', () => {
    moveCursor();
});


window.addEventListener("scroll", () => {
    if (!blackholeEnlarged) {
        const scrollThreshold = 0.95; 
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;

        if ((scrollTop + windowHeight) >= (scrollThreshold * documentHeight)) {
            enlargeBlackhole();
            hideNavbar(); 
        }
    }
});

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const container = document.querySelector('.container05');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  if (currentSlide === slides.length - 1) {
    alert('Ok, Você não precisa ler mais essas avaliações')
    container.style.transition = 'transform 1s ease-out, opacity 1s ease-out';
    container.style.transform = 'rotateY(90deg)';
    container.style.opacity = 0;
    
    setTimeout(() => {
    
      container.style.display = 'none';
    }, 1000); 
  } else {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);


// Função para tratar o clique nos botões decorativos
function decorativeButtonClick(button) {
  // Adiciona a classe 'shake' ao botão
  button.classList.add('shake');
  
  // Define uma função para remover a classe 'shake' após um atraso
  setTimeout(function() {
      button.classList.remove('shake');
  }, 500); // 500ms é o tempo da animação de tremor
}

















































































































































































































































































































































































































































































































































































































































