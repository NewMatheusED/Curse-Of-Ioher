document.addEventListener('DOMContentLoaded', function() {
  var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const header = document.getElementById("header")
  const shadow = document.getElementById("shadow")

  //coisas a se fazer:
  // - Mudar layout
  // - Mudar cores
  // - Padrão de cores
  // - Aprimorar efeitos visuais
  // - Melhor trabalhar a responsividade no geral, principalmente em telas maiores

  //---------------------------------------------------------------

  document.querySelector('.loader').style.display = 'none';

  AOS.init();

  console.log(`
  _      ______ ____         ____  ______      _____ ____  _    _ ______ _____  
  | |    |  ____/ __ \       / __ \|  ____|    |_   _/ __ \| |  | |  ____|  __ \ 
  | |    | |__ | |  | |     | |  | | |__         | || |  | | |__| | |__  | |__) |
  | |    |  __|| |  | |     | |  | |  __|        | || |  | |  __  |  __| |  _  / 
  | |____| |___| |__| |     | |__| | |          _| || |__| | |  | | |____| | \ \ 
  |______|______\____/       \____/|_|         |_____\____/|_|  |_|______|_|  \_\                                                                           
          LEO(nerd)               OF                       IOHER
  `) 

  //---------------------------------------------------------------

  function setEfects() {
    var scrollY = window.scrollY;
    var sparklesElement = document.querySelector(".sparkles");
    var mainImg = document.querySelector(".mainImg");
    var particles = document.querySelector('#particles-js')
    
    if (scrollY > 1) {
      sparklesElement.style.opacity = '0';
      sparklesElement.style.pointerEvents = 'none';
      mainImg.style.filter = 'brightness(40%)';
      particles.style.opacity = '1';
      particles.style.pointerEvents = 'all';
    } else if (scrollY < 1) {
      sparklesElement.style.opacity = '1';
      sparklesElement.style.pointerEvents = 'all';
      mainImg.style.filter = 'brightness(90%)';
      particles.style.opacity = '0';
      particles.style.pointerEvents = 'none';
    }
  }

  setEfects();

  document.addEventListener('scroll', function() {
    setEfects();
  });

  //---------------------------------------------------------------

  // function randomizeSparkles() { //tá meio bugado ainda
  //   var container = document.querySelector('.sparkles');
  //   var larguraTela = container.clientWidth;
  //   var distanciaHorizontal = 60;
  //   var quantidadeParticulas = Math.floor(larguraTela / distanciaHorizontal);
  
  //   // Verifica o número atual de partículas no DOM
  //   var particlesAtuais = container.querySelectorAll('.point');
  //   var quantidadeParticulasAtuais = particlesAtuais.length;
  
  //   // Remove partículas extras, se houver
  //   if (quantidadeParticulasAtuais > quantidadeParticulas) {
  //     for (var i = quantidadeParticulasAtuais - 1; i >= quantidadeParticulas; i--) {
  //       container.removeChild(particlesAtuais[i]);
  //     }
  //     particlesAtuais = container.querySelectorAll('.point'); // Atualiza a lista de partículas
  //     quantidadeParticulasAtuais = particlesAtuais.length; // Atualiza a quantidade atual
  //   }
  
  //   // Adiciona as novas partículas, se necessário
  //   for (var i = quantidadeParticulasAtuais; i < quantidadeParticulas; i++) {
  //     var particula = document.createElement('div');
  //     particula.className = 'point';
  
  //     var posicaoX = i * distanciaHorizontal;
  //     var randomNumber = Math.random() * 1.5;
  
  //     particula.style.left = posicaoX + 'px';
  //     particula.style.animationDelay = randomNumber + 's';
  
  //     container.appendChild(particula);
  //   }
  // }
  
  // randomizeSparkles();
  
  //-------------------------------------------------------------

  document.querySelectorAll('ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      if(largura < 1000) {
        header.style.clipPath = 'polygon(0px 0px, 0px 0px, 100% 0px, 100% 0px)'
        shadow.style.transitionDelay = '0s'
        shadow.style.opacity = 0
        document.querySelector('.logo i.mobileIcon').click()
      }

      var target = link.getAttribute('href')

      var targetEl = document.querySelector(target)

      targetEl.scrollIntoView({ behavior: 'smooth' });
    })
  })
  
  //---------------------------------------------------------------

  if(largura > 1000) {


    document.addEventListener("mousemove", function(event) {
          var posicaoTopoTela = event.clientY || event.pageY;

          if(posicaoTopoTela <= 80) {
            header.style.clipPath = 'polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%)'
            shadow.style.transitionDelay = '.5s'
            shadow.style.opacity = 1
          }else if(posicaoTopoTela >= 105){
            header.style.clipPath = 'polygon(0px 0px, 0% 0px, 0% 100%, 0px 100%)'
            shadow.style.transitionDelay = '0s'
            shadow.style.opacity = 0
          }
    });
  }else{
    const button = document.querySelector('.logo i.mobileIcon')

    button.addEventListener('click', function () {
      shadow.style.height = '350px'
      if(header.classList.contains('hide')) {
        header.classList.remove('hide')
        header.classList.add('show')
        header.style.clipPath = 'polygon(0px 0px, 0px 100%, 100% 100%, 100% 0px)'
        shadow.style.transitionDelay = '.5s'
        shadow.style.opacity = 1

      }else if(header.classList.contains('show')) {
        header.classList.remove('show')
        header.classList.add('hide')
        header.style.clipPath = 'polygon(0px 0px, 0px 0px, 100% 0px, 100% 0px)'
        shadow.style.transitionDelay = '0s'
        shadow.style.opacity = 0
      }
    })
  }

  //---------------------------------------------------------------
  function dinamicLogo() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var pixelValue = 1250;
    
    var vhValue = (pixelValue / windowHeight) * 100;
    var vwValue = (pixelValue / windowWidth) * 100;
  
    document.querySelector('.mainImg img').style.maxHeight = vhValue + 'vh';
    document.querySelector('.mainImg img').style.maxWidth = vwValue + 'vw';
  }

  dinamicLogo();

  //---------------------------------------------------------------

  particlesJS.load('particles-js', 'particlesjs-config.json', function() {});

  //---------------------------------------------------------------

  function aumentarFonte() {
    var elementos = document.querySelectorAll('a, h2, p, span')
    elementos.forEach((elemento) => {
      var size = parseFloat(window.getComputedStyle(elemento).fontSize)
      elemento.style.fontSize = (size + 2) + 'px';
      console.log(size);
    })
  }

  function diminuirFonte() {
    var elementos = document.querySelectorAll('a, h2, p, span')
    elementos.forEach((elemento) => {
      var size = parseFloat(window.getComputedStyle(elemento).fontSize)
      elemento.style.fontSize = (size - 2) + 'px';
    })
  }

  //---------------------------------------------------------------

  let darkModeBtn = document.querySelector('.highContrast')

  darkModeBtn.addEventListener('click', function() {
    if(document.body.classList.contains('andre')) {
      document.body.classList.toggle('alex')
    }else{
      document.body.classList.toggle('andre')
    }
  })

  //---------------------------------------------------------------

  window.addEventListener('resize', () => {
    setEfects();
    //randomizeSparkles();
    dinamicLogo();
  })

  window.addEventListener('fullscreenchange', () => {
    setEfects();
    //randomizeSparkles();
    dinamicLogo();
  })

  window.addEventListener('webkitfullscreenchange', () => {
    setEfects();
    //randomizeSparkles();
    dinamicLogo();
  })

  window.addEventListener('mozfullscreenchange', () => {
    setEfects();
    //randomizeSparkles();
    dinamicLogo();
  })

  window.addEventListener('MSfullscreenchange', () => {
    setEfects();
    //randomizeSparkles();
    dinamicLogo();
  })

  document.querySelector('.increaseFont').addEventListener('click', aumentarFonte)
  document.querySelector('.decreaseFont').addEventListener('click', diminuirFonte)

  //---------------------------------------------------------------

}) //Finalização do código