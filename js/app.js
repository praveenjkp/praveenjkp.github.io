const lis = document.querySelectorAll("ul li")
        lis.forEach(element => {
           element.addEventListener('mousedown', function(event) {
               event.preventDefault()
               const value = element.innerText.trim()
               const $result = document.querySelector(".div-result")
               const resultText = $result.innerText.trim()

                if(resultText == 0 || resultText=="undefined" || resultText=="Infinity"){
                    $result.innerText = ''
                }

               if (value.toLowerCase() == "c"){
                    $result.innerText =0
                    return true
               } 
               if(value == '='){
                    let solution = eval($result.innerText.trim())
                    $result.innerText = solution
                    return true
               }
               $result.append(value)
           })
        });