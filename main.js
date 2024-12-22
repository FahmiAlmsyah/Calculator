let result = 0;
const display = document.querySelector("#display");
const satu = document.querySelector("#satu");
const dua = document.querySelector("#dua");
const tiga = document.querySelector("#tiga");
const empat = document.querySelector("#empat");
const lima = document.querySelector("#lima");
const enam = document.querySelector("#enam");
const tujuh = document.querySelector("#tujuh");
const delapan = document.querySelector("#delapan");
const sembilan = document.querySelector("#sembilan");
const nol = document.querySelector("#nol");
const tambah = document.querySelector("#tambah");
const kurang = document.querySelector("#kurang");
const kali = document.querySelector("#kali");
const bagi = document.querySelector("#bagi");
const hasil = document.querySelector("#hasil");
const dot = document.querySelector("#dot");
const reset = document.querySelector("#reset");

satu.addEventListener("click", function () {
  addChar("1");
});
dua.addEventListener("click", function () {
  addChar("2");
});
tiga.addEventListener("click", function () {
  addChar("3");
});
empat.addEventListener("click", function () {
  addChar("4");
});
lima.addEventListener("click", function () {
  addChar("5");
});
enam.addEventListener("click", function () {
  addChar("6");
});
tujuh.addEventListener("click", function () {
  addChar("7");
});
delapan.addEventListener("click", function () {
  addChar("8");
});
sembilan.addEventListener("click", function () {
  addChar("9");
});
nol.addEventListener("click", function () {
  addChar("0");
});

tambah.addEventListener("click", function () {
  hitung("+");
});
kurang.addEventListener("click", function () {
  hitung("-");
});
kali.addEventListener("click", function () {
  hitung("*");
});
bagi.addEventListener("click", function () {
  hitung("/");
});
dot.addEventListener("click", function () {
  addChar(".");
});

hasil.addEventListener("click", function () {
  try {
    result = eval(result).toString();
    display.innerHTML = result;
  } catch (error) {
    display.innerHTML = "Error";
    result = "0";
  }
});

function hitung(operator) {
  if (["+", "-", "*", "/"].includes(result.slice(-1))) {
    result = result.slice(0, -1) + operator;
  } else {
    result += operator;
  }
  display.innerHTML = result;
}

reset.addEventListener("click", function () {
  result = "0";
  display.innerHTML = result;
});

function addChar(char) {
  if (char === ".") {
    const currentNumber = result.split(/[\+\-\*\/]/).pop();
    if (currentNumber.includes(".")) {
      return;
    }
  }

  if (result === "0" && char !== ".") {
    result = char;
  } else {
    result += char;
  }

  display.innerHTML = result;
}
