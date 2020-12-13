  
    let header = document.querySelector(".header")

    const letters = header.innerText.split('')

    let html = ""

    letters.forEach(letter => {
        let classes = ' '
        if(letter !== ' '){
            classes = 'letter js-letter'
        }
        html = `${html} <span class='${classes}'>${letter}</span>`
    });

    header.innerHTML = html

    const jsletter = document.querySelectorAll(".js-letter")
    jsletter.forEach(node => {
        node.addEventListener('mouseover', function(event){
            console.log(this.innerText)
            this.classList.add("active")
        })
        node.addEventListener('mouseout', function(event){
            console.log(`${this.innerText} out`)
            this.classList.remove("active")
        })
    });

    

