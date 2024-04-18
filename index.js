const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let firstPasswordEl = document.getElementById("first-password-el");
let secondPasswordEl = document.getElementById("second-password-el");

function generatePasswords() {
  let firstPassword = "";
  let secondPassword = "";

  for (let i = 0; i < 15; i++) {
    let index1 = Math.floor(Math.random() * characters.length);
    let index2 = Math.floor(Math.random() * characters.length);
    let charForFirstPass = characters[index1];
    let charForSecondPass = characters[index2];
    firstPassword += charForFirstPass;
    secondPassword += charForSecondPass;
  }

  firstPasswordEl.innerText = firstPassword;
  secondPasswordEl.innerText = secondPassword;
}

firstPasswordEl.addEventListener("click", () => {
  copyOnClick(1);
});

secondPasswordEl.addEventListener("click", () => {
  copyOnClick(2);
});

function copyOnClick(number) {
  let val;
  if (number === 1) {
    val = firstPasswordEl.innerText;
  } else if (number === 2) {
    val = secondPasswordEl.innerText;
  }
  navigator.clipboard.writeText(val);
  alert("Password coppied to clipboard!");
}
