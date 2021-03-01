import "./styles.css";
const rota = [
  {
    source: "JPN",
    destination: "PHL"
  },
  {
    source: "BRA",
    destination: "UAE"
  },
  {
    source: "USA",
    destination: "BRA"
  },
  {
    source: "UAE",
    destination: "JPN"
  }
];

let begin = rota[0]["source"];
let newArr = [];
let v = 0;

for (let i = 0; i < rota.length; i++) {
  if (rota[i]["destination"] === begin) {
    begin = rota[i]["source"];
    while (v < rota.length) {
      if (begin === rota[v]["destination"]) {
        begin = rota[v]["source"];
        v = 0;
      } else {
        v += 1;
      }
    }
  }
}
v = 0;
for (let i = 0; i < rota.length; i++) {
  if (rota[i]["source"] === begin) {
    //bra
    newArr.push(begin);
    begin = rota[i]["destination"];
    newArr.push(begin);
    while (v < rota.length) {
      if (begin === rota[v]["source"]) {
        begin = rota[v]["destination"];
        newArr.push(begin);
        v = 0;
      } else {
        v += 1;
      }
    }
  }
}

console.log(newArr);

document.getElementById("app").innerHTML = ` `;
