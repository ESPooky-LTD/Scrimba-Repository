let homeScoreEl = document.getElementById("home-score-el")

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreBtnTwo = document.getElementById("home-score-btn-2")
let homeScoreBtnThree = document.getElementById("home-score-btn-3")
var homeScore = 0

let awayScoreEl = document.getElementById("away-score-el")

let awayScoreBtnOne = document.getElementById("away-score-btn-1")
let awayScoreBtnTwo = document.getElementById("away-score-btn-2")
let awayScoreBtnThree = document.getElementById("away-score-btn-3")
var awayScore = 0


function increaseHomeScoreOne() {
		homeScore += 1
		homeScoreEl.textContent = homeScore
		pointsLeader()
}
function increaseHomeScoreTwo() {
	homeScore += 2
	homeScoreEl.textContent = homeScore
	pointsLeader()
}
function increaseHomeScoreThree() {
	homeScore += 3
	homeScoreEl.textContent = homeScore
	pointsLeader()
}
function increaseAwayScoreOne() {
	awayScore += 1
	awayScoreEl.textContent = awayScore
	pointsLeader()
}
function increaseAwayScoreTwo() {
	awayScore += 2
	awayScoreEl.textContent = awayScore
	pointsLeader()
}
function increaseAwayScoreThree() {
	awayScore += 3
	awayScoreEl.textContent = awayScore
	pointsLeader()
}
function pointsLeader() {
	
	if (homeScore > awayScore) {document.getElementById("home-score-el").style.color = "#f70000",
								document.getElementById("home-score-el").style.border = "1px solid #f70000",
							    document.getElementById("away-score-el").style.color = "#F94F6D",
								document.getElementById("away-score-el").style.border = "1px solid #080001" }	
		else if (homeScore < awayScore) {document.getElementById("home-score-el").style.color = "#F94F6D",
										 document.getElementById("away-score-el").style.border = "1px solid #f70000",
										 document.getElementById("away-score-el").style.color = "#f70000",
										 document.getElementById("home-score-el").style.border = "1px solid #080001"}
		else {document.getElementById("home-score-el").style.color = "#F94F6D",							 
			  document.getElementById("away-score-el").style.color = "#F94F6D",
			  document.getElementById("home-score-el").style.border = "1px solid #080001",
			  document.getElementById("away-score-el").style.border = "1px solid #080001"}
}
	
	
	
	
	
	
