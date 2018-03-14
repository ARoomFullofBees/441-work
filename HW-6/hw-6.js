var myPic = new Image(816, 490);
myPic.src = "img/Miniature.jpg"

let body = document.body;
body.innerText = "";

body.style.background = "rgb(137, 74, 61)";

let elmnt = document.createElement("div");
// element children
let elmnt1 = document.createElement("h1");
let elmnt2 = document.createElement("h2");
let elmnt3 = document.createElement("p");
let elmnt4 = document.createElement("a");

elmnt1.innerText = "Miniatures";
elmnt2.innerText = "Galleries of Enormous Craftmenship"
elmnt3.innerText = "Miniature room, Carnegie Museum of Art, Pittsburgh.";
elmnt4.innerText = "Visit The Mini Time Machine";

elmnt.setAttribute("style", "text-align: center");
elmnt1.setAttribute("style","padding:0em; margin:1em; font-family: Arial Black; text-align:center; color:#F9E5E1");
elmnt2.setAttribute("style","padding:0em; margin:0; font-weight: normal; font-family: Arial; text-align:center; color:#F9E5E1");
elmnt3.setAttribute("style","padding:0em; margin:1em; font-family: Arial; text-align:center; color:#F9E5E1");
elmnt4.setAttribute("href", "https://theminitimemachine.org/");
elmnt4.setAttribute("style","padding:0em; margin:1em; font-family: Arial; text-align:center; color:#F9E5E1; border-style: solid");


myPic.setAttribute("style", "padding:0em; margin:200px");

elmnt.appendChild(elmnt1);
elmnt.appendChild(elmnt2);
elmnt.appendChild(myPic);
elmnt.appendChild(elmnt3);
elmnt.appendChild(elmnt4);

body.appendChild(elmnt);





















