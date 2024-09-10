
export function kutyakKiir(lista){
    let txt =`<div class="row">`
    for(let i = 0; i<lista.lenght; i++){
        txt += `<div class="col lg-4">
                        <div class="card" style="width: 18rem;">
                        <div class="card-body">
                        <h5 class="card-title">${lista[i].nev}</h5>
                        <p class="card-text">${lista[i].kor}</p>
                        <p class="card-text">${lista[i].nem}</p>
                        <a href="#" class="btn btn-primary">Kiválaszt</a>
                        </div>
                    </div>
                </div>`
    }
    return txt
}