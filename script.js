$(document).ready(function () {


var letters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

var categories;         // Array of topics
var chosenCategory;     // Selected catagory
var getHint ;          // Word getHint
var word ;              // Selected word
var guess ;             // guess
var guesses = [ ];      // Stored guesses
var lives ;             // Lives
var counter ;           // Count correct guesses
var space;              // Number of spaces in word '-'
var gamesPlayed;        //Number of games played
var gameScore;          //Number of games won

// Get elements
var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("scatagory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");



// create letters ul
var buttons = function () {
	myButtons = document.getElementById('buttons');
	letters = document.createElement('ul');

	for (var i = 0; i < letters.length; i++) {
		letters.id = 'letters';
		list = document.createElement('li');
		list.id = 'letter'
		list.innerHTML = letters[i];


		letters.id = 'letters';
		list = document.createElement('li');
		list.id = 'letter';
		check();
		myButtons.appendChild(letterBtn);
		letters.appendChild(list);
	
	}

}

  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is TV Shows";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Action Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Animated Films";
    }
  }

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

			guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
		}
		function setColor(btn, color){
			var count=1;
			var property = document.getElementById(btn);
			if (count == 0){
					property.style.backgroundColor = "#FFFFFF"
					count=1;        
			}
			else{
					property.style.backgroundColor = "#7FFF00"
					count=0;
			}
	
	}
  }
  
	// Show lives

	var gamesPlayed = 0;
	var gameScore = 0;
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
			showLives.innerHTML = "Game Over";
			gamesPlayed = gamesPlayed++;
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
				showLives.innerHTML = "You Win!";
				gamesPlayed = (gamesPlayed++);
				gameScore = (gameScore++);
				
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    context = myStickman.getContext('2d');
    context.beginPath();
    context.strokeStyle = "#fff";
    context.lineWidth = 2;
  };
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(60, 25, 10, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function($pathFromx, $pathFromy, $pathTox, $pathToy) {
    
    context.moveTo($pathFromx, $pathFromy);
    context.lineTo($pathTox, $pathToy);
    context.stroke(); 
}

   frame1 = function() {
     draw (0, 150, 150, 150);
   };
   
   frame2 = function() {
     draw (10, 0, 10, 600);
   };
  
   frame3 = function() {
     draw (0, 5, 70, 5);
   };
  
   frame4 = function() {
     draw (60, 5, 60, 15);
   };
  
   torso = function() {
     draw (60, 36, 60, 70);
   };
  
   rightArm = function() {
     draw (60, 46, 100, 50);
   };
  
   leftArm = function() {
     draw (60, 46, 20, 50);
   };
  
   rightLeg = function() {
     draw (60, 70, 100, 100);
   };
  
   leftLeg = function() {
     draw (60, 70, 20, 100);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm,  torso,  head, frame4, frame3, frame2, frame1]; 


  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
	// Play
	play = function () {
  categories = [
		['I LOVE LUCY', 'FRIENDS', 'SEINFIELD','CHEERS', 'MASH', 'SEX AND THE CITY', 'DEXTER', 'JUSTIFIED','THIS IS US', 'PUNKY BREWSTER', 'LOONEY TUNES', 'MELROSE PLACE', 'GOLDEN GIRLS', 'LAW AND ORDER', 'WHOS LINE IS IT ANYWAY', 'BEWITCHED', 'JEOPARDY', 'WHEEL OF FORTUNE', 'WHO WANTS TO BE A MILLIONAIRE'],
		['MAD MAX FURY ROAD', 'DUNKIRK', 'METROPOLIS', 'WONDER WOMAN', 'KING KONG', 'STAR WARS','LOGAN','SEVEN SAMURAI', 'BABY DRIVER', 'THE TREASURE OF THE SIERRA MADRE','THE DARK KNIGHT', 'WAR FOR THE PLANET OF THE APES', 'SPIDERMAN', 'HARRY POTTER AND THE DEATHLY HALLOWS', 'CAPTIAN AMERICA CIVIL WAR','MISSION IMPOSSIBLE', 'IRON MAN', 'SKYFALL'],
			['SNOW WHITE','CINDERELLA','MULAN','FROZEN', 'FINDING NEMO', 'THE LITTLE MERMAID', 'UP','TOY STORY', 'THE SECRET OF NIMH','ALL DOGS GO TO HEAVEN', 'LAND BEFORE TIME', 'AN AMERICAN TAIL', 'PETER RABBIT','THE LION KING', 'BRAVE','COCO',]
	];

	chosenCategory = categories[Math.floor(Math.random() * categories.length)];
	word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
	word = word.replace(/\s/g, "-");
	console.log(word);
	buttons();

	guesses = [ ];
	lives = 10;
	counter = 0;
	space = 0;
	result();
	comments();
	selectCat();
	canvas();
}

play();

// Hint

	hint.onclick = function() {

		hints = [
			['You got some splaining to do', 'the Coffee shop', 'Soup Nazi', 'Where everybody knows your name', 'WWII show', 'The girl who will live in her shoes', 'A cut above the rest', 'Set in Harlan County', 'Multi-generational tear jerker', 'Mismatched outfits and pig tails', 'Saturday mornings as a kid','Prime time soap opera drama', 'Senior living', 'Crime Drama', 'Improv', 'Housewife in the 60s','What is...','Hangman on TV', 'Id like to phone a friend'],
			['Wasteland Scavengers','WWII Rescue mission','A futuristic city divided','Marvel Character','Empire State Building','A galactic war','Actor is saying goodbye to his character','Look into Japenese Warfare','Direxted by Edgar Wright','One of the first films to be filmed outside of the USA','DC Comics','Cesar fights for world domination','With power comes great responsibility','The boy who lived','Super soldier','Turns out it is possible','not gold, not silver','Shaken not stirred'],
			['Fruit is bad','What am I going to wear','A girl saves the day','Wanna build a snowman?','Im lost','Gadgets and gizmos','Balloons','Cowboy vs spaceman','Mom trying to save her son','The hard life of strays','dinosaurs','Imigrating to America','Trying to get along with the new neighbors','Finding out who you were meant to be','Crazy Haired girl','Day of the Dead']
		];
			
		var catagoryIndex = categories.indexOf(chosenCategory);
		var hintIndex = chosenCategory.indexOf(word);
		showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
	};

 // Reset

	document.getElementById('reset').onclick = function() {
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = "";
		context.clearRect(0, 0, 400, 400);
		play();
	}
});







	

