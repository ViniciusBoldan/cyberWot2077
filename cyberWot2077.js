let shots = 1
function myTank(){
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

/*um jeito de fazer exatamente oq ue tu quer: 
Voce faz duas funçõs, quase iguais, mas uma define os dados do tanque aliado, e outra do inimigo.
As duas vão escrever os dados do tanque no display, mais ou menos como ja fazer.
Embaixo do display fica o botão 'disparo', que faz a magica acontecer.
Agora eé simples. o botão de disparo, pega os valores do display, e coloca nas variaveis que fazem os calculos.
*/