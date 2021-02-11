(function () {
    
    async function galeria() {
        
        const $CARD = document.querySelector(".cards-global")
        const $FRAGMENTO = document.createDocumentFragment()

        try { 
            const FETCH = await fetch("https://jsonplaceholder.typicode.com/photos")
            const JSON = await FETCH.json()

            for (let index = 0; index < 200; index++) {
                const $IMG = document.createElement("img")
                const $DIV = document.createElement("div")
                $IMG.src = JSON[index].thumbnailUrl
                $DIV.appendChild($IMG)
                
                $DIV.classList.add("card")
                $FRAGMENTO.appendChild($DIV)
            }

        $CARD.appendChild($FRAGMENTO)


        } catch (error) {
            
        }

    }
    galeria()
    

})()