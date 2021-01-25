let shots = 1
function myTank(hp,armor, calibre, penAP, penAPCR, dmg){

    let projetil = Number(document.getElementById('projetil').value)
    let bliInimiga = Number(document.getElementById('bliInimiga').value)
    let angDisparo = Number(document.getElementById('angDisparo').value)
    let distancia = Number(document.getElementById('distancia').value)

    let blindagemRelativa= bliInimiga / Math.cos(angDisparo*(projetil* 1.4*calibre)/bliInimiga)

    if(blindagemRelativa < 0){
         blindagemRelativa = Math.abs(blindagemRelativa)
    }

    console.log(`${shots++}° Disparo`)
    console.log(`Blindagem Relativa: ${blindagemRelativa}`)

    let alea = Math.round(Math.random()*90)+16 - distancia

    if(alea <= 49){
        if(alea > 39 || alea < 50){
            console.log(`Essa foi pro pouco`)
        }else{
            console.log(`Não acertamos o inimigo. ${alea}% de chances de acerto`)
        }
    }else{
        console.log(`${alea}% De chances de acerto. Acertamos o Inimigo`)

        if(blindagemRelativa < penAPCR){
            let newHP = hp - dmg
        console.log(`Penetramos a blindagem inimiga. Hp do inimigo: ${newHP}/${hp}`)
    }else{
        console.log(`Não penetramso a blindagem inimiga`)
    }
}
}