const lesson1 = {
  nome: "lesson1",
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  nome: "lesson2",
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  nome: "lesson3",
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const adicionarChave = (objeto, key, valor) => {
  objeto[key] = valor;
  return objeto;
};
let key = "turno";
const valor = "tarde";
console.log(adicionarChave(lesson2, key, valor));

const tamanhoObjeto = (objeto) => {
  const tamanho = Object.keys(objeto).length;
  return tamanho;
};
console.log(tamanhoObjeto(lesson1))

const listarChaves = (objeto) => {
  const arrayDeChaves = Object.keys(objeto);
  let listaDeChaves = `${objeto.nome}`;
  for (let index = 1; index < arrayDeChaves.length; index += 1) {
    listaDeChaves += `
    -${arrayDeChaves[index]}
    `;
  }
  return listaDeChaves;
};
console.log(listarChaves(lesson1));
let allLessons = {};
const cloneDasAulas = () => {
  const recebe = Object.assign(allLessons, { lesson1, lesson2, lesson3 });
  return recebe;
};
console.log(cloneDasAulas());

const totalDeAlunos = (objeto) => {
  const funcao = Object.keys(cloneDasAulas());
  let sum = 0;
  funcao.forEach((element) => {
    sum += objeto[element].numeroEstudantes;
  });
  return sum;
};
console.log(totalDeAlunos(allLessons));

const localizarPosicao = (objeto, number) => {
  let posicao;
  let array = Object.keys(objeto);
  console.log(array);
  if (number > array.length || number <= 0) {
    throw new Error(`valor não encontrado, utilize valores de 1 a ${array.length}!`);
  }
  for (let index = 1; index <= array.length; index += 1) {
    try {
      if (index == number) {
        return posicao = `Output: ${objeto[array[index-1]]}`;
      }
    } catch (e) {
      posicao = `Error: ${e.message}`;
    }
  }
  return posicao;
};
console.log(localizarPosicao(lesson3 , 2));

const chaveValor = (objeto , chave , valor) => {
  const osDois = Object.entries(objeto);
  console.table(osDois)
  for (const index in osDois) {
    if (osDois[index][0] == chave && osDois[index][1] == valor) {
      return true;
    }
  }
  return false;
}
console.log(chaveValor(lesson2 , "" , ""));