const characters = [
    "A","B","C","D","E","F","G","H",
    "I","J","K","L","M","N","O","P",
    "Q","R","S","T","U","V","W","X",
    "Y","Z","a","b","c","d","e","f",
    "g","h","i","j","k","l","m","n",
    "o","p","q","r","s","t","u","v",
    "w","x","y","z", "0", "1", "2", 
    "3", "4", "5", "6", "7", "8", "9",
    "~","`","!","@","#","$","%","^",
    "&","*","(",")","_","-","+","=",
    "{","[","}","]",",","|",":",";",
    "<",">",".","?",
"/"];

let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
let buttonEl = document.getElementById("password-btn")


function generatePassword() {
    return characters[Math.floor(Math.random() * characters.length)]
}

buttonEl.addEventListener("click", function() {
    password1El.textContent = ""
    password2El.textContent = ""
    for(let i =0; i<10; i++) {
        password1El.textContent += generatePassword()
    }
    for(let i =0; i<10; i++) {
        password2El.textContent += generatePassword()
    }
})




