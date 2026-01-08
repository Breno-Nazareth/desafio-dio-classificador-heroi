//Desafio Classificador de nível de Herói

let nickName = "Breno"
let exp = 6248
let level = ""

if (exp <= 1000) {
    level = ("Ferro")
} else if (exp >= 1001 && exp <= 2000){
    level = ("Bronze")
} else if (exp >= 2001 && exp <= 5000){
    level = ("Prata")
} else if (exp >= 5001 && exp <= 7000){
  level = ("Ouro")
} else if (exp >= 7001 && exp <= 8000){
  level = ("Platina")
} else if (exp >= 8001 && exp <= 9000){
  level = ("Ascendente")
} else if (exp >= 9001 && exp <= 10000){
  level =  ("Imortal")
} else if (exp >= 10001){
  level = ("Radiante")
}

console.log("O Herói de nome " + nickName + " está no nível de " + level)