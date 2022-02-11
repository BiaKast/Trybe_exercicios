let styleBody = (document.getElementById("container").style.backgroundColor =
  "#cdeccc");
let styleH1 = document.querySelectorAll("#header-container");
for (let index = 0; index < styleH1.length; index += 1) {
  styleH1[index].style.backgroundColor = "#45936c";
}

let section1 = document.querySelectorAll(".emergency-tasks div");
for (let index = 0; index < section1.length; index += 1) {
  section1[index].style.backgroundColor += "#cb6f84";
}
let styleSection1H3 = document.querySelectorAll(".emergency-tasks div h3");
for (let index = 0; index < styleSection1H3.length; index += 1) {
  styleSection1H3[index].style.backgroundColor += "#8d1042";
}

let section2 = document.querySelectorAll(".no-emergency-tasks div");
for (let index = 0; index < section2.length; index += 1) {
  section2[index].style.backgroundColor += "#f2c94e";
}
let styleSection2H3 = document.querySelectorAll(".no-emergency-tasks div h3");
for (let index = 0; index < styleSection2H3.length; index += 1) {
  styleSection2H3[index].style.backgroundColor += "#261c21";
}

let styleFooter = document.querySelectorAll("#footer-container div");
for (let index = 0; index < styleFooter.length; index += 1) {
  styleFooter[index].style.backgroundColor = "#45936c";
}
