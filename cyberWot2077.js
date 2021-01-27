let shots = 1
function myTank(veicle, hp, armor, calibre, penAP, penAPCR, dmg){
    document.getElementById('myVeicle').innerText = ` Tanque:  ${veicle}`
    document.getElementById('enVeicle').innerText = ` Tanque:  ${veicle}`
    document.getElementById('myHp').innerText = `Hp: ${hp}`
    document.getElementById('myCaliber').innerText = `Calibre: ${calibre}mm`
    document.getElementById('enCaliber').innerText = `Calibre: ${calibre}mm`
    document.getElementById('myPen').innerText = `Penetração ${penAP}mm`
    document.getElementById('enPen').innerText = `Penetração ${penAP}mm`

    let projetil = Number(document.getElementById('projetil').value)
    let bliInimiga = Number(document.getElementById('bliInimiga').value)
    let angDisparo = Number(document.getElementById('angDisparo').value)
    let distancia = Number(document.getElementById('distancia').value)

    let blindagemRelativa= armor / Math.cos(angDisparo*(projetil* 1.4*calibre)/armor)

    if(blindagemRelativa < 0){
         blindagemRelativa = Math.abs(blindagemRelativa)
    }

    document.getElementById('tiros').innerText = `${shots++}° DIsparo`
    document.getElementById('bliRelativa').innerText = `Blindagem Relativa: ${blindagemRelativa}`

    let alea = Math.round(Math.random()*90)+16 - distancia
    document.getElementById('chances').innerText = `Chances de acerto: ${alea}%`

    if(alea <= 49){
            document.getElementById('frase').innerText =`Essa foi pro pouco`
    }else{
        document.getElementById('frase').innerText = `Acertamos o Inimigo`

        if(blindagemRelativa < penAP){

        document.getElementById('penOrNot').innerText = `Penetramos a blindagem inimiga`
        document.getElementById('enHp').innerText = `Hp do inimigo: ${hp-dmg}`
    }else{
        document.getElementById('penOrNot').innerText = `Não penetramso a blindagem inimiga`
    }
}
}