// 6. - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }

const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

const studentAverage = () => {
  return grades.map((element) =>
    element.reduce((acc, curr, index, array) => {
      return index === element.length - 1
        ? (acc = (acc + curr) / array.length)
        : (acc = curr + acc);
    })
  );
};

const objeto = studentAverage().map((element,index) => {
  obj = {}
    obj["name"] = students[index];
    obj["average"] = studentAverage()[index];
    return obj;
  });
console.log(objeto);

const expected = [
  { name: "Pedro Henrique", average: 7.8 },
  { name: "Miguel", average: 9.2 },
  { name: "Maria Clara", average: 8.8 },
];
