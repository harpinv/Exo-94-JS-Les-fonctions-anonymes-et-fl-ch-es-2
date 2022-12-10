let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];

/* Votre code ici bas */
//Création de nouveau tableau à partir de tableauUn
let body = document.querySelector('body');
let maFonction = () => {
    let table1 = [tableauUn[0] ** tableauUn[0], tableauUn[1] ** tableauUn[1], tableauUn[2] ** tableauUn[2], tableauUn[3] ** tableauUn[3], tableauUn[4] ** tableauUn[4]];
    let table2 = [tableauUn[0] * 10, tableauUn[1] * 10, tableauUn[2] * 10, tableauUn[3] * 10, tableauUn[4] * 10];
    let table3 = [(tableauUn[0] + 2) / 26, (tableauUn[1] + 2) / 26, (tableauUn[2] + 2) / 26, (tableauUn[3] + 2) / 26, (tableauUn[4] + 2) / 26];
    let div1 = document.createElement('div');
    div1.innerText = table1;
    body.append(div1);
    let div2 = document.createElement('div');
    div2.innerText = table2;
    body.append(div2);
    let div3 = document.createElement('div');
    div3.innerText = table3;
    body.append(div3);
}
maFonction();

//Création de filtre pour le tableau 1
let monFiltre = () => {
    let table4 = [];
    for(let i = 0; i < tableauUn.length; i++) {
        if(tableauUn[i] > 2) {
            table4.push(tableauUn[i]);
        }
    }
    let div4 = document.createElement('div');
    div4.innerText = table4;
    body.append(div4);
}
monFiltre();

let monModulo = () => {
    let table5 = [];
    for(let i = 0; i < tableauUn.length; i++) {
        if(tableauUn[i] % 2 === 0) {
            table5.push(tableauUn[i]);
        }
    }
    let div5 = document.createElement('div');
    div5.innerText = table5;
    body.append(div5);
}
monModulo();

let monMuliple = () => {
    let table6 = [];
    for(let i = 0; i < tableauUn.length; i++) {
        if(tableauUn[i] * 3 > 10) {
            table6.push(tableauUn[i]);
        }
    }
    let div6 = document.createElement('div');
    div6.innerText = table6;
    body.append(div6);
}
monMuliple();

//Création de nouveau tableau à partir de tableauUn
let maValeur = () => {
    let table7 = [tableauDeux[0].length, tableauDeux[1].length, tableauDeux[2].length, tableauDeux[3].length, tableauDeux[4].length, tableauDeux[5].length, tableauDeux[6].length];
    let table8 = ["L'élément " + tableauDeux[0] + " à une longueur de " + tableauDeux[0].length, "L'élément " + tableauDeux[1] + " à une longueur de " + tableauDeux[1].length, "L'élément " + tableauDeux[2] + " à une longueur de " + tableauDeux[2].length, "L'élément " + tableauDeux[3] + " à une longueur de " + tableauDeux[3].length, "L'élément " + tableauDeux[4] + " à une longueur de " + tableauDeux[4].length, "L'élément " + tableauDeux[5] + " à une longueur de " + tableauDeux[5].length, "L'élément " + tableauDeux[6] + " à une longueur de " + tableauDeux[6].length];
    let table9 = [tableauDeux[0] + tableauDeux[0], tableauDeux[1] + tableauDeux[1], tableauDeux[2] + tableauDeux[2], tableauDeux[3] + tableauDeux[3], tableauDeux[4] + tableauDeux[4], tableauDeux[5] + tableauDeux[5], tableauDeux[6] + tableauDeux[6]];
    let div7 = document.createElement('div');
    div7.innerText = table7;
    body.append(div7);
    let div8 = document.createElement('div');
    div8.innerText = table8;
    body.append(div8);
    let div9 = document.createElement('div');
    div9.innerText = table9;
    body.append(div9);
}
maValeur();

//Création de filtre pour le tableau 1
let maSomme = () => {
    let table10 = [];
    for(let i = 0; i < tableauDeux.length; i++) {
        if(tableauDeux[i].length > 2 + 2) {
            table10.push(tableauDeux[i]);
        }
    }
    let div10 = document.createElement('div');
    div10.innerText = table10;
    body.append(div10);
}
maSomme();

let monCalcul = () => {
    let table11 = [];
    for(let i = 0; i < tableauDeux.length; i++) {
        if(tableauDeux[i].length % 2 === 0) {
            table11.push(tableauDeux[i]);
        }
    }
    let div11 = document.createElement('div');
    div11.innerText = table11;
    body.append(div11);
}
monCalcul();

let monCasse = () => {
    let table12 = [];
    for(let i = 0; i < tableauDeux.length; i++) {
        if(tableauDeux[i].length - 3 > 10) {
            table12.push(tableauDeux[i]);
        }
    }
    let div12 = document.createElement('div');
    div12.innerText = table12;
    body.append(div12);
}
monCasse();