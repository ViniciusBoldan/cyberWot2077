function myTank(veicle, hp, armor, caliber, penetration, dmg){
    
    let proje = document.getElementById('projectile').value
    let angle = document.getElementById('angle').value
    let distance = document.getElementById('distance').value
    
    document.getElementById('myVeicle').innerText = veicle
    document.getElementById('myArmor').innerText = armor
    document.getElementById('myHp').innerText = hp
    document.getElementById('myProje').innerText = proje
    document.getElementById('myCaliber').innerText = caliber
    document.getElementById('myPen').innerText = penetration
    document.getElementById('myDmg').innerText = dmg
    document.getElementById('myAngle').innerText = angle
    document.getElementById('myDistance').innerText = distance
}

function enTank(veicle, hp, armor, caliber, penetration, dmg){
    
    let enProje = document.getElementById('enProjectile').value
    let enAngle = document.getElementById('enAngle').value
    let enDistance = document.getElementById('enDistance').value
    
    document.getElementById('enVeicle').innerText = veicle
    document.getElementById('enArmor').innerText = armor
    document.getElementById('enHp').innerText = hp
    document.getElementById('enProje').innerText = enProje
    document.getElementById('enCaliber').innerText = caliber
    document.getElementById('enPen').innerText = penetration
    document.getElementById('enDmg').innerText = dmg
    document.getElementById('enAngle1').innerText = enAngle
    document.getElementById('enDistance1').innerText = enDistance
}

let shot=0
function shotIt(){
    
    document.getElementById('tiros').innerText = shot+=1
    console.log(`shots ${shot}`)

    let tank1 ={
        armor: Number(document.getElementById('myArmor').innerText),
        hp: Number(document.getElementById('myHp').innerText),
        projectile: Number(document.getElementById('projectile').value),
        caliber: Number(document.getElementById('myCaliber').innerText),
        penetration: Number(document.getElementById('myPen').innerText),
        damage: Number(document.getElementById('myDmg').innerText),
        angle: Number(document.getElementById('angle').value),
        distance: Number(document.getElementById('distance').value)
    }
    console.log(tank1)

    let tank2 ={
        armor: Number(document.getElementById('enArmor').innerText),
        hp: Number(document.getElementById('enHp').innerText),
        projectile: Number(document.getElementById('enProjectile').value),
        caliber: Number(document.getElementById('enCaliber').innerText),
        penetration: Number(document.getElementById('enPen').innerText),
        damage: Number(document.getElementById('enDmg').innerText),
        angle: Number(document.getElementById('enAngle').value),
        distance: Number(document.getElementById('enDistance').value)
    }
    console.log(tank2)

    

//My and enemy relative armor
    let myRelativeArmor = Math.round(tank1.armor / Math.cos(tank2.angle*(tank2.projectile* 1.4*tank2.caliber)/tank1.armor))
    let enRelativeArmor = Math.round(tank2.armor / Math.cos(tank1.angle*(tank1.projectile* 1.4*tank1.caliber)/tank2.armor))

//My data ang Math
    if(myRelativeArmor < 0){
         myRelativeArmor = Math.abs(myRelativeArmor)
    }
    console.log(`my relative armor ${myRelativeArmor}`)
    document.getElementById('myBliRelativa').innerText = `${myRelativeArmor}`

    let myChances = Math.round(Math.random()*90)+16 - tank1.distance
    console.log(`My chances ${myChances}%`)

    if(myChances >49){
        console.log(`my hit chances is highter than 49`)
        if(enRelativeArmor < tank1.penetration){
            console.log(`i penetrated the enemie`)
            document.getElementById('enHp').innerText = document.getElementById('enHp').innerText  - tank1.damage
                if(document.getElementById('enHp').innerText <= 0){
                    document.getElementById('myHp').innerText = 'DIED'
                }
        }
    }


//Enemie Data and Math
    if(enRelativeArmor < 0){
         enRelativeArmor = Math.abs(enRelativeArmor)
    }
    console.log(`enemie relative armor ${enRelativeArmor}`)
    document.getElementById('enBliRelativa').innerText = `${enRelativeArmor}`

    let enChances = Math.round(Math.random()*90)+16 - tank2.distance
    console.log(`Enemie chances ${enChances}%`)

    if(enChances >49){
        console.log(`enemie hit chances is highter than 49`)
        if(myRelativeArmor < tank2.penetration){
            console.log(`enemie penetrated me`)
            document.getElementById('myHp').innerText = document.getElementById('myHp').innerText  - tank2.damage
                if(document.getElementById('myHp').innerText <0){
                    document.getElementById('enHp').innerText = 'DIED'
    }
    }
    }

}