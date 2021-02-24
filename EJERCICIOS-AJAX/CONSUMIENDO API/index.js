(function () {
    const $LI = document.querySelectorAll(".menu li")
    const $BODY = document.querySelector(".body")


    async function llenarDatos(){
        let FETCH = await fetch('https://jsonplaceholder.typicode.com/posts')
        let JSON = await FETCH.json()
        
        
        for (let index = 0; index < 5; index++) {
            $LI[index].dataset.title = JSON[index].title
            $LI[index].dataset.body = JSON[index].body
            $LI[index].dataset.id = JSON[index].id
        }  
    } 
    document.addEventListener("DOMContentLoaded", llenarDatos())    
    document.addEventListener("click", function(e) {
        if(e.target.matches(".menu li")){
            
            $BODY.querySelector(".title").textContent = e.target.dataset.title
            $BODY.querySelector(".description").textContent = e.target.dataset.body
            
        }
    })
})()