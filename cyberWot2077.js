function myTank(hp,armor, calibre, penAp, penAPCR){

    
    let projetil = Number(document.getElementById('projetil').value)
    let  caliber = calibre
    let bliInimiga = Number(document.getElementById('bliInimiga').value)
    let angDisparo = Number(document.getElementById('angDisparo').value)

    let alea = Math.round(Math.random()*90)+16
    console.log(alea)
    
    if(alea <= 0){
        console.log(`${alea}% De chances de acerto. Errou disparo.`)
    }else{
        let blindagemRelativa= bliInimiga / (Math.cos(angDisparo-(projetil* 1.4*caliber)/bliInimiga))
        console.log(calibre)
        console.log(`Penetração: ${blindagemRelativa}`)
    }
}