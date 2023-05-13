document.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.loader').style.display = 'none';

  var largura = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const header = document.getElementById("header")
  const shadow = document.getElementById("shadow")

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
  }else {
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

})