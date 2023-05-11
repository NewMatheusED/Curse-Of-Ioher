const header = document.getElementById("header")
const shadow = document.getElementById("shadow")

document.addEventListener("mousemove", function(event) {
      var posicaoTopoTela = event.clientY || event.pageY;
      console.log(posicaoTopoTela)
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