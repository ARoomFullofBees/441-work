/* Variables*/

let body = document.body;
let el = document.createElement("div");
let elChild = document.createElement("h1");
let elChild2 = document.createElement('p');
let elChild3 = document.createElement('P');
let textEl = document.querySelector(".welcome");
let textEl2 = document.querySelector(".wheretoswim");
let textEl3 = document.querySelector(".sirendeath");
let textEl4 = document.querySelector(".nymphdeath");
let textEl5 = document.querySelector(".fairydeath");
let btEl = document.querySelector('#B1');
let btEl2 = document.querySelector('#B2');
let btEl3 = document.querySelector('#B3');
let btEl4 = document.querySelector('#B4');
let divEl1 = document.querySelector(".storageDiv");
let formEl1 = document.querySelector(".nameForm");




/*Event Listeners*/

btEl.addEventListener("click", showHideText);
btEl2.addEventListener("click", showHideText2);
btEl3.addEventListener("click", showHideText3);
btEl4.addEventListener("click", showHideText4);

/*Input*/
function insertText() {
  let textIn;
  textIn = document.querySelector("#textIn1").value;

  let textToAdd = document.createTextNode("Hello " + textIn + ", Welcome! Oh, where are my manners? You must be famished! Will you partake of the fruit?");

  let newP = document.createElement("P");

  newP.appendChild(textToAdd);

  let storage = document.querySelector("#storageDiv");

  storage.appendChild(newP);
}

document.querySelector("#runButton").addEventListener('click', insertText);

/*Functions*/

function showHideText() {
  if (textEl.hidden) {
    btEl.hidden = true;
    btEl3.hidden = true;
    textEl3.hidden = true;
    textEl5.hidden = false;
    textEl4.hidden = true;
    btEl3.hidden = true;
    btEl4.hidden = true;
    textEl.hidden = true;
    formEl1.hidden = true;
    divEl1.hidden = true;
    textEl2.hidden = true;
    btEl2.hidden = true;
    el.hidden = true;

    body.style.background = "url('./images/Fruit.jpg')";
    alert("Fairies have stolen your soul!");

  } else {

    btEl3.hidden = true;
    textEl.hidden = true;
    btEl4.hidden = true;
    formEl1.hidden = false;
    divEl1.hidden = false;
    textEl3.hidden = true;
    btEl2.hidden = false;
    el.hidden = false;

    body.style.background = "url('./images/Fruit.jpg')";
    body.style.backgroundPosition = "center";
    body.style.background = "url('./images/Fairies.jpg')";
  }
}

function showHideText2() {
  if (textEl2.hidden) {

    btEl4.innerText = "Take to the Sea!"

    btEl2.hidden = true;
    btEl3.hidden = false;
    btEl4.hidden = false;
    textEl2.hidden = false;
    textEl5.hidden = true;
    formEl1.hidden = true;
    divEl1.hidden = true;
    textEl3.hidden = true;
    textEl.hidden = true;
    btEl.hidden = true;
    el.hidden = true;

    body.style.background = "url('images/Fruit.jpg')";

  } else {
    btEl2.innerText = "I just ate";
    btEl2.hidden = false;
    textEl2.hidden = true;
    btEl4.hidden = true;
    btEl3.hidden = true;
    formEl1.hidden = true;
    divEl1.hidden = true;
    textEl3.hidden = false;
    btEl.hidden = true;
    el.hidden = true;
    body.style.background = "url('./images/Fruit.jpg')";
    body.style.backgroundPosition = "center";
  }
}

function showHideText3() {
  if (textEl.hidden) {


    textEl5.hidden = true;
    textEl4.hidden = false;
    btEl3.hidden = true;
    btEl.hidden = true;
    btEl2.hidden = true;
    textEl.hidden = true;
    formEl1.hidden = true;
    divEl1.hidden = true;
    textEl3.hidden = true;
    textEl2.hidden = true;
    btEl4.hidden = true;
    el.hidden = true;


    body.style.background = "url('./images/N.jpg')";
    alert("You were drowned by nymphs!");


  } else {
    btEl3.innerText = "Nap in the fairy ring";

    textEl4.hidden = true;
    btEl.hidden = true;
    btEl2.hidden = true;
    textEl.hidden = true;
    formEl1.hidden = true;
    divEl1.hidden = true;
    textEl3.hidden = true;
    btEl4.hidden = true;
    el.hidden = true;

    body.style.background = "url('./images/Siren.jpg')";
  }
}

function showHideText4() {
  if (textEl.hidden) {

    btEl3.hidden = true;
    btEl.hidden = true;
    btEl4.hidden = true
    textEl.hidden = false;
    formEl1.hidden = true;
    divEl1.hidden = true;
    textEl3.hidden = false;
    textEl2.hidden = true;
    textEl5.hidden = true;
    btEl3.hidden = true;
    el.hidden = true;

    body.style.background = "url('./images/Fairies.jpg')";
    alert("A siren stole your breath!");


  } else {
    btEl4.innerText = "Sleep in a fairy ring";

    btEl2.hidden = true;
    btEl4.hidden = true;
    btEl3.hidden = true;
    btEl.hidden = true;
    textEl.hidden = true;
    formEl1.hidden = true;
    divEl1.hidden = true;
    textEl3.hidden = true;
    btEl3.hidden = true;
    el.hidden = true;

    body.style.background = "url('./images/fruit.jpg')";
    body.style.backgroundPosition = "center";
  }
}

/*Body Style*/

body.style.padding = "0 em";
body.style.margin = "0 em";
body.style.background = "url('./images/fruit.jpg')";
body.style.backgroundPosition = "center";