let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
/* console.log ('Bem-vinda, ' + info.personagem); */

info.recorrente = "Sim";
/* console.log(info); */
/* for(let key in info){
    console.log(key);
  } */
/* for (let valores in info){
    console.log(info[valores]);
  } */

let segundo = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};
function infoPersonagem(objeto1, objeto2) {
 for (let valor in objeto1) {
     if (objeto1[valor] === 'Sim' && objeto2[valor] === 'Sim'){
         return console.log ('Ambos recorrentes')
     }
    console.log(objeto1[valor] + ' e ' + objeto2[valor])
    return ''
  }
  
}
console.log(infoPersonagem(info, segundo));