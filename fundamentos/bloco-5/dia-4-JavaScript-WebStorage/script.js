// window.onload = function () {
    let main = document.querySelector('.lorem-ipsum');
    let backGrounColor = document.querySelector('.background');
    let color = document.querySelector('.color');
    let fontSize = document.getElementById('font-size');
    let lineSpacing = document.getElementById('line-spacing');
    let fontFamily = document.getElementById('font-family')

    function alteraBackground() {
        let colorRef = backGrounColor.children;
        for (let index = 0; index < colorRef.length; index += 1) {

            colorRef[index].addEventListener('dblclick', function () {
                if (colorRef[index].className !== '') {
                    if (main.className.length > colorRef[index].className.length) {
                        main.classList.add(colorRef[index].className);
                    }
                } else
                    alert('Isto não é uma cor')
            }

            )
            colorRef[index].addEventListener('click', function () {
                if (colorRef[index].className !== '') {
                    if (main.className.length > colorRef[index].className.length) {
                        main.classList.remove(colorRef[index].className);
                    }
                } else
                    alert('Isto não é uma cor')
            }

            )

        }
    }

    alteraBackground()

    function alteraCor() {
        let colorRef = color.children[1].children;
        for (let index = 0; index < colorRef.length; index += 1){
             
            colorRef[index].addEventListener('dblclick', function() {
                if (main.className.length > colorRef[index].className.length) {
                    main.classList.add(colorRef[index].className)
                }
            }
            )  
            colorRef[index].addEventListener('click', function() {
                if (main.className.length > colorRef[index].className.length) {
                    main.classList.remove(colorRef[index].className)
                }
            }
            ) 
        }

            
            
    }
alteraCor();


// }