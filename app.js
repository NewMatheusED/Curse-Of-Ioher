document.addEventListener('DOMContentLoaded', function() {
  var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const header = document.getElementById("header")
  const shadow = document.getElementById("shadow")

  //---------------------------------------------------------------

  document.querySelector('.loader').style.display = 'none';

  AOS.init();

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
      mainImg.style.filter = 'brightness(60%)';
      particles.style.opacity = '0';
      particles.style.pointerEvents = 'none';
    }
  }

  setEfects();


  document.addEventListener('scroll', function() {
    setEfects();
  });

  window.addEventListener('resize', function() {
    setEfects();
  })

  //---------------------------------------------------------------

  function randomizeSparkles() {
    var particulas = document.querySelectorAll('.point');
    var container = document.querySelector('.sparkles');
  
      for (var i = 0; i < particulas.length; i++) {
        var particula = particulas[i];
        
        var posicaoX = Math.random() * container.clientWidth; // Coordenada X aleatória dentro do contêiner
        var randomNumber = Math.random() * 1.5
        
        particula.style.left = posicaoX + 'px';
        particula.style.animationDelay = randomNumber + 's'
    }
  }
  randomizeSparkles();

  window.addEventListener('resize', function() {
    randomizeSparkles();
  })

  //-------------------------------------------------------------

  document.querySelectorAll('ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      if(largura < 1000 ) {
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
      shadow.style.height = '375px'
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

  particlesJS.load('particles-js', 'particlesjs-config.json', function() {});

  //---------------------------------------------------------------

  //div de acessibilidade *animação*

  //---------------------------------------------------------------

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey('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');
  
  const msg = {
    to: 'matheus081105@gmail.com',
    from: 'matheus081105@outlook.com',
    subject: 'Mensagem do Ioher',
    text: mensagem,
  };

  sgMail.send(msg)
  .then(() => {
    console.log('E-mail enviado com sucesso!');
    // Adicione aqui o código adicional que você deseja executar
  })
  .catch((error) => {
    console.error('Erro ao enviar o e-mail:', error);
    // Adicione aqui o código adicional para tratar o erro, se necessário
  });

}) //Finalização do código