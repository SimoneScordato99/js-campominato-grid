let btnGioca = document.getElementById('btnGioca')
let difficolta = parseInt(document.getElementById('difficoltaGioco').value)


btnGioca.addEventListener('click' , function(){
    
    let difficolta = parseInt(document.getElementById('difficoltaGioco').value);
    console.log(difficolta)
    //ciclo for che stampa caselle in base al valore della difficoltà e con numero interno pari alla difficoltà
    let arrayDiv = []
    for(let i = 0 ; i < difficolta; i++){
        let container = document.querySelector('.container')
        // console.log(container)
        let newDiv = container.innerHTML += `<div id="a${i}" class="quad quad-${difficolta} newDiv">${i+1}</div>`
        arrayDiv.push(i+1)
    }
    console.log(arrayDiv)
})