const characters= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordrnd1El = document.getElementById("passwordrnd1");
let passwordrnd2El = document.getElementById("passwordrnd2");
const mybuttonEl=document.getElementById("mybutton-el")
mybuttonEl.addEventListener("click", function() { 
let passwordLength = 15
	function generateChar() {
	let randomChar = Math.floor(Math.random() * characters.length)
	return characters[randomChar]
	
        }
	function generatePassword() {
		let randomPassword = ""
		for (let i = 0; i < passwordLength; i++) {
			randomPassword += generateChar()
		}
		
  		return randomPassword
	}

const passwordEl=generatePassword()
console.log("Password: ", passwordEl)
passwordrnd1El.textContent=passwordEl
})



	
	
 






 
	

