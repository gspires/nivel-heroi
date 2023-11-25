

function enviar(){
    
    var heroi = document.getElementById('heroi').value
    var xp = document.getElementById('xp').value

    var result = ''

    if(xp<1000){
        result = 'O Herói de nome é '+ heroi + ' está no nível de  Ferro'
    }else if (xp>1000 && xp<=2000) {
        result = 'O Herói de nome é '+ heroi + ' está no nível de  Bronze'
    }else if (xp>2000 && xp<=5000) {
        result = 'O Herói de nome é '+ heroi + ' está no nível de  Prata'
    }else if (xp>5000 && xp<=7000) {
        result = 'O Herói de nome é '+ heroi + ' está no nível de  Ouro'
    }else if (xp>7000 && xp<=8000) {
        result = 'O Herói de nome é '+ heroi + ' está no nível de  platina'
    }else if (xp>8000 && xp<=9000) {
        result = 'O Herói de nome é '+ heroi + ' está no nível de  Ascendente'
    }else if (xp>9000 && xp<=10000) {
        result = 'O Herói de nome é '+ heroi + ' está no nível de  Imortal'
    }else if (xp>10000) {
        result = 'O Herói de nome é '+ heroi + ' está no nível de  Radianete'
    }
    document.getElementById("result").innerHTML = result
}



