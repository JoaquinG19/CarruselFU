addEventListener('DOMContentLoaded', () => {
    const contadores = document.querySelectorAll('.contador_cantidad');
    const velocidad = 5000;
    const animarContadores = () => {
        for (const contador of contadores) {
            const actulizar_contador = () => {
                let cantidad_maxima = +contador.dataset.cantidadTotal,
                valor_actual = +contador.innerHTML,
                incremento = cantidad_maxima/velocidad
                if(valor_actual < cantidad_maxima){
                    contador.innerText = Math.ceil(valor_actual + incremento)
                    setTimeout(actulizar_contador, 5)

                }else{
                    contador.innerText = cantidad_maxima        
                }
            }
            actulizar_contador()
            
        }
        
    }
    const mostrarContadores = elementos => {
        elementos.forEach(elemento => {
            if(elemento.isIntersecting){
                elemento.target.classList.add('animar')
                elemento.target.classList.remove('ocultar')
                setTimeout(animarContadores, 300)


            }
        });
    }
    const observer = new IntersectionObserver(mostrarContadores, {
        threshold: 0.75 //0 a 1
    })
    const elementosHTML =  document.querySelectorAll('.cards')
    elementosHTML.forEach(elementoHTML => {
        observer.observe(elementoHTML)
    })

});