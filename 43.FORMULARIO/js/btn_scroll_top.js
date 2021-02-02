export default function btnScrollTop(btnScrollTop) {
    
    window.onscroll = function() {
        let y = window.scrollY;
        if(y>700){
            document.querySelector(btnScrollTop).classList.remove("hiden")
        }else{
            document.querySelector(btnScrollTop).classList.add("hiden")
        }
      };

    document.addEventListener("click", function (e) {
        
        if(e.target.matches(btnScrollTop)){
            window.scrollTo({
                behavior: "smooth",
                top: 0
            })
        }

    })
}