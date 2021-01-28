function myTank(veicle, hp, armor, caliber, penetration, dmg){
    
    let proje = document.getElementById('projectile').value
    let angle = document.getElementById('angle').value
    let distance = document.getElementById('distance').value
    
    document.getElementById('myVeicle').innerText = `Tank: ${veicle}`
    document.getElementById('myArmor').innerText = `Armor: ${armor}mm`
    document.getElementById('myHp').innerText = `Hp: ${hp}`
    document.getElementById('myProje').innerText = `Projectile: ${proje}°`
    document.getElementById('myCaliber').innerText = `Caliber: ${caliber}mm`
    document.getElementById('myPen').innerText = `Penetration:${penetration}mm`
    document.getElementById('myDmg').innerText = `Damage: ${dmg}Hp`
    document.getElementById('myAngle').innerText = `Shot Angle: ${angle}°`
    document.getElementById('myDistance').innerText = `Distance: ${distance}0m`
}

function enTank(veicle, hp, armor, caliber, penetration, dmg){
    
    let enProje = document.getElementById('enProjectile').value
    let enAngle = document.getElementById('enAngle').value
    let enDistance = document.getElementById('enDistance').value
    
    document.getElementById('enVeicle').innerText = `Tank: ${veicle}`
    document.getElementById('enArmor').innerText = `Armor: ${armor}mm`
    document.getElementById('enHp').innerText = `Hp: ${hp}`
    document.getElementById('enProje').innerText = `Projectile: ${enProje}°`
    document.getElementById('enCaliber').innerText = `Caliber: ${caliber}mm`
    document.getElementById('enPen').innerText = `Penetration:${penetration}mm`
    document.getElementById('enDmg').innerText = `Damage: ${dmg}Hp`
    document.getElementById('enAngle1').innerText = `Shot Angle: ${enAngle}°`
    document.getElementById('enDistance1').innerText = `Distance: ${enDistance}0m`
}