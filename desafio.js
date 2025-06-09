let nomeDoHeroi = "aragorn"
let nivel = undefined
let nivelAnterior = undefined

for (let xp = 0; xp <= 11100; xp += 1000) {
    if (xp <= 1000) {
        nivel = "ferro"
    } else if (xp <= 2000) {
        nivel = "bronze"
    } else if (xp <= 5000) {
        nivel = "prata"
    } else if (xp <= 7000) {
        nivel = "ouro"
    } else if (xp <= 8000) {
        nivel = "platina"
    } else if (xp <= 9000) {
        nivel = "ascendente"
    } else if (xp <= 10000) {
        nivel = "imortal"
    } else {
        nivel = "radiante"
    }

    if (nivel !== nivelAnterior) {
    console.log(`O herói de nome ${nomeDoHeroi} está no nível ${nivel} - ${xp}xp`);
    nivelAnterior = nivel
}
}


