export default function slider() {
    
// activar con click    
const $previu = document.querySelector(".previ")
const $next = document.querySelector(".next")
const $slider = document.querySelectorAll(".slider-slide")
let i=0

setInterval(() => {
    $slider[i].classList.remove("active")
    i++
    if(i >= $slider.length){
      i = 0
    }
    $slider[i].classList.add("active") 
}, 2000);




//activar con teclas
document.addEventListener("keyup", function (e) {
    if(e.keyCode === 37){
        e.preventDefault()
        // si el valor es 0
        $slider[i].classList.remove("active")
        i--
        if(i<0){
            i = $slider.length - 1
        }
        $slider[i].classList.add("active")
    }
    if(e.keyCode === 39){
        e.preventDefault()
        // si el valor es 0
        $slider[i].classList.remove("active")
        i++
        if(i >= $slider.length){
          i = 0
        }
        $slider[i].classList.add("active")
    }
})



document.addEventListener("click", function (e) {
    if(e.target === $previu){
      e.preventDefault()
        // si el valor es 0
        $slider[i].classList.remove("active")
        i--
        if(i<0){
            i = $slider.length - 1
        }
        $slider[i].classList.add("active")
    }
    if(e.target === $next){
        e.preventDefault()
          // si el valor es 0
          $slider[i].classList.remove("active")
          i++
          if(i >= $slider.length){
            i = 0
          }
          $slider[i].classList.add("active")
          
    }
})


}