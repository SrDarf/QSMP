$('html').on('click', function() {
    $('span').focus();
  });
  
  var g = 0;
  var countdownValue = 3; 
  var countdownInterval;
  

  
  $('span').on('input', function() {
    var v = $(this).text(),
      l = $('li:last-of-type'),
      t = $(this);
    v = v.replace(/\s/g, '');
    switch (v.toLowerCase()) {
      case "não":
      case "nao":
        l.after('<li>Oh isso é triste mas... Você não tem escolha :D');
        t.text('');
        startRandomText();
        startBlinking();
        setTimeout(function() {
          l.text("Oh que pena mas... Você não tem escolha :D");
          setTimeout(function() {
            startCountdown();
          }, 2000); 
        }, 3000); 
        break;
      case "yes":
      case "da":
      case "sim":
      case "ja":
        l.after('<li>Haha, que bom! Redirecionando em 3 segundos!');
        g = 1;
        t.text('');
        startCountdownToRedirect(); 
        break;
      case "chess":
      case "poker":
      case "war":
        l.after('<li>GLOBAL THERMONUCLEAR WAR INITIATED, HAVE A NICE DAY<br><br>WINNER: NONE');
        $('center').text('Only winning move is not to play!'); t.text('3...2....1...'); setTimeout(function() {
          l.after('<iframe width="420" height="315" src="//www.youtube.com/embed/q6iY9DHOeCg?modestbranding=0&rel=0&autoplay=1&controls=0&showinfo=1&autohide=1" frameborder="0" allowfullscreen></iframe>');
        }, 1000);
        break;
      default:
        if (g == 1 && v.length > 5) {
          l.after('<li>WHAT A STRANGE GAME.');
          t.text('');
        }
        if (g == 0 && v.length > 3) {
          l.after('<li>Hey! Essa sua resposta é muito complexa apenas responda com,<br> sim / não');
          t.text('');
        }
        break;
    }
  });
  
  let randomTextInterval;
  let randomText = "";
  
  function generateRandomText() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let result = "";
    for (let i = 0; i < 30; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    return result;
  }
  
  function startRandomText() {
    randomTextInterval = setInterval(function() {
      randomText = generateRandomText();
      $('li').text(randomText);
    }, 100);
  }
  
  function startBlinking() {
    let blinkCount = 0;
    const blinkInterval = setInterval(function() {
      $('body').toggleClass('blink-background');
      blinkCount++;
  
      if (blinkCount >= 4) {
        clearInterval(blinkInterval);
        $('body').removeClass('blink-background');
        startCountdown();
      }
    }, 500);
  }
  
  function startCountdown() {
    countdownInterval = setInterval(function() {
      $('li').text(countdownValue);
      countdownValue--;
      if (countdownValue < 0) {
        clearInterval(countdownInterval);
      
        window.location.href = "index1.html";
      }
    }, 1000);
  }
  
  function startCountdownToRedirect() {
    let countdownValueRedirect = 3;
    const countdownIntervalRedirect = setInterval(function() {
      $('li').text(countdownValueRedirect);
      countdownValueRedirect--;
      if (countdownValueRedirect < 0) {
        clearInterval(countdownIntervalRedirect);
     
        window.location.href = "index1.html";
      }
    }, 1000);
  }
  
  setInterval(function() {
    $('.blink').toggleClass("blinker");
    i++;
    if (i == 6)
      clearInterval(b);
  }, 400);
  
  $(window).on('load', addNoise);
  
  function addNoise() {
    $('.loader').text('');
    $('.noise-wrapper').css('opacity', 1);
  }
  
  const messages = [
    "Parabéns por chegar até aqui, mas huh apartir de agora as coisas vão ficar um pouco mais complexas. Gostaria de jogar um jogo?",
  ];
  
  const typingContainer = document.getElementById("typing-container");
  
  function typeMessage(message, index, delay) {
    if (index < message.length) {
      typingContainer.textContent = message.substring(0, index + 1);
      setTimeout(() => {
        typeMessage(message, index + 1, delay);
      }, delay);
    }
  }
  
  function startTyping() {
    typingContainer.textContent = "";
    messages.forEach((message, index) => {
      setTimeout(() => {
        typeMessage(message, 0, 50);
      }, index * 4000);
    });
  }
  
  $('span').click();
  startTyping();
  