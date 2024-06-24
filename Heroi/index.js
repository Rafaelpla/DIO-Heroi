let heroi  = ["Rafael", 6587, "Rank"]

if(heroi[1] < 1000){
    heroi[2] = "Ferro"
}else if(heroi[1] < 2000){
    heroi[2] = "Bronze"
}else if(heroi[1] < 5000){
    heroi[2] = "Prata"
}else if(heroi[1] < 6000){
    heroi[2] = "Ouro"
}else if(heroi[1] < 8000){
    heroi[2] = "Platina"
}else if(heroi[1] < 9000){
    heroi[2] = "Ascendente"
}else if(heroi[1] < 10000){
    heroi[2] = "Imortal"
}else{
    heroi[2] = "Radiante"
}

console.log("O Herói de nome " + heroi[0] + " está no nível de " + heroi[2])
