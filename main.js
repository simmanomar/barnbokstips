/*när man klickar på knappen läs mer så poppar en ruta fram med info om boken*/

function readMore(id) { /* 1. När man klickar på "Läs mer" så körs funktionen readmore.*/
    const innehåll = document.getElementById(id).innerHTML; /* Den hämtar då innehållet som finns i id:t.*/
    document.getElementById("popup-text").innerHTML = innehåll; /*Skriver sedan in det hämtade innehållet i elementet med id:t "popup-text".*/
    document.getElementById("popup").style.display = "flex"; /*Visar popup-rutan genom att sätta css- display till flex, så den blir synlig*/
  }

  function stängRuta() { /*Skapar en funktion för att stänga popup-rutan igen.: stängRuta */
    document.getElementById("popup").style.display = "none"; /*Gömmer rutan genom att sätta display till: none */
  }
