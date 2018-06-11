$(document).ready(function () {


	var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '-']

	var categories;         // Array of topics
	var chosenCategory;     // Selected category
	var getHint;          // Word getHint
	var word;              // Selected word
	var guess;             // guess
	var guesses = [];      // Stored guesses
	var lives;             // Lives
	var counter;           // Count correct guesses
	var space;              // Number of spaces in word '-'
	var gamesPlayed;        //Number of games played
	var gameScore;          //Number of games won

	// Get elements
	var showLives = document.getElementById("mylives");
	var showcategory = document.getElementById("category");
	var getHint = document.getElementById("hint");
	var showClue = document.getElementById("clue");



	// create letters ul
	var buttons = function () {
		myButtons = document.getElementById('buttons');
		letters = document.createElement('ul');

		for (var i = 0; i < alphabet.length; i++) {
			letters.id = 'alphabet';
			list = document.createElement('button');
			list.id = 'letter'
			list.innerHTML = alphabet[i];
			check();
			myButtons.appendChild(letters);
			letters.appendChild(list);

		}

	}

	// Select category
	var selectCat = function () {
		if (chosenCategory === categories[0]) {
			categoryName.innerHTML = "The Chosen Category Is TV Shows";
		} else if (chosenCategory === categories[1]) {
			categoryName.innerHTML = "The Chosen Category Is Action Films";
		} else if (chosenCategory === categories[2]) {
			categoryName.innerHTML = "The Chosen Category Is Animated Films";
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
			{
			guess.innerHTML = "_";
			}

			guesses.push(guess);
			wordHolder.appendChild(correct);
			correct.appendChild(guess);
		}
		// set color of buttons dependent on current state
		function setColor(btn, color) {
			var count = 1;
			var property = document.getElementById(btn);
			if (count == 0) {
				property.style.backgroundColor = "#FFFFFF"
				count = 1;
			}
			else {
				property.style.backgroundColor = "#7FFF00"
				count = 0;
			}
		}
	}

	// Show lives
	gamesPlayed = 0;
	gameScore = 0;
	comments = function () {
		showLives.innerHTML = "You have " + lives + " guesses left";
		if (lives < 1) {
			showLives.innerHTML = "Game Over";
			gamesPlayed++;
		}
		for (var i = 0; i < guesses.length; i++) {
			if (counter + space === guesses.length) {
				showLives.innerHTML = "You Win!";
				gamesPlayed++;
				gameScore++;

			}
		}
	}

	// Animate man
	var animate = function () {
		var drawMe = lives;
		drawArray[drawMe]();
	}


	// Hangman
	canvas = function () {

		myStickman = document.getElementById("stickman");
		context = myStickman.getContext('2d');
		context.beginPath();
		context.strokeStyle = "#000";
		context.lineWidth = 2;
	};

	head = function () {
		myStickman = document.getElementById("stickman");
		context = myStickman.getContext('2d');
		context.beginPath();
		context.arc(100, 47, 10, 0, Math.PI * 2, true);
		context.stroke();
	}

	draw = function ($pathFromx, $pathFromy, $pathTox, $pathToy) {

		context.moveTo($pathFromx, $pathFromy);
		context.lineTo($pathTox, $pathToy);
		context.stroke();
	}

	frame1 = function () {
		draw(60, 100, 150, 100);
	};

	frame2 = function () {
		draw(60, 32, 60, 100);
	};

	frame3 = function () {
		draw(100, 32, 60, 32);
	};

	frame4 = function () {
		draw(100, 32, 100, 37);
	};

	torso = function () {
		draw(100, 82, 100, 58);
	};

	rightArm = function () {
		draw(90, 65, 100, 61);
	};

	leftArm = function () {
		draw(110, 65, 100, 61);
	};

	rightLeg = function () {
		draw(100, 82, 85, 94);
	};

	leftLeg = function () {
		draw(100, 82, 115, 94);
	};

	drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, frame4, frame3, frame2, frame1];


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
			['I-LOVE-LUCY', 'FRIENDS', 'SEINFIELD', 'CHEERS', 'MASH', 'SEX-AND-THE-CITY', 'DEXTER', 'JUSTIFIED', 'THIS-IS-US', 'PUNKY-BREWSTER', 'LOONEY-TUNES', 'MELROSE-PLACE', 'GOLDEN-GIRLS', 'LAW-AND-ORDER', 'WHOS-LINE-IS-IT-ANYWAY', 'BEWITCHED', 'JEOPARDY', 'WHEEL-OF-FORTUNE', 'WHO-WANTS-TO-BE-A-MILLIONAIRE'],
			['MAD-MAX-FURY-ROAD', 'DUNKIRK', 'METROPOLIS', 'WONDER-WOMAN', 'KING-KONG', 'STAR-WARS', 'LOGAN', 'SEVEN-SAMURAI', 'BABY-DRIVER', 'THE-TREASURE-OF-THE-SIERRA-MADRE', 'THE-DARK-KNIGHT', 'WAR-FOR-THE-PLANET-OF-THE-APES', 'SPIDERMAN', 'HARRY-POTTER-AND-THE-DEATHLY-HALLOWS', 'CAPTIAN-AMERICA-CIVIL-WAR', 'MISSION-IMPOSSIBLE', 'IRON-MAN', 'SKYFALL'],
			['SNOW-WHITE', 'CINDERELLA', 'MULAN', 'FROZEN', 'FINDING-NEMO', 'THE-LITTLE-MERMAID', 'UP', 'TOY-STORY', 'THE-SECRET-OF-NIMH', 'ALL-DOGS-GO-TO-HEAVEN', 'LAND-BEFORE-TIME', 'AN-AMERICAN-TAIL', 'PETER-RABBIT', 'THE-LION-KING', 'BRAVE', 'COCO']
		];

		chosenCategory = categories[Math.floor(Math.random() * categories.length)];
		word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
		// word = word.replace(/\s/g, "-");
		console.log(word);
		console.log(chosenCategory.indexOf(word))
		buttons();

		guesses = [];
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

	hint.onclick = function () {

		hints = [
			['You got some splaining to do', 'the Coffee shop', 'Soup Nazi', 'Where everybody knows your name', 'WWII show', 'The girl who will live in her shoes', 'A cut above the rest', 'Set in Harlan County', 'Multi-generational tear jerker', 'Mismatched outfits and pig tails', 'Saturday mornings as a kid', 'Prime time soap opera drama', 'Senior living', 'Crime Drama', 'Improv', 'Housewife in the 60s', 'What is...', 'Hangman on TV', 'Id like to phone a friend'],
			['Wasteland Scavengers', 'WWII Rescue mission', 'A futuristic city divided', 'Marvel Character', 'Empire State Building', 'A galactic war', 'Actor is saying goodbye to his character', 'Look into Japenese Warfare', 'Directed by Edgar Wright', 'One of the first films to be filmed outside of the USA', 'DC Comics', 'Cesar fights for world domination', 'With power comes great responsibility', 'The boy who lived', 'Super soldier', 'Turns out it is possible', 'not gold, not silver', 'Shaken not stirred'],
			['Fruit is bad', 'What am I going to wear', 'A girl saves the day', 'Wanna build a snowman?', 'Im lost', 'Gadgets and gizmos', 'Balloons', 'Cowboy vs spaceman', 'Mom trying to save her son', 'The hard life of strays', 'dinosaurs', 'Imigrating to America', 'Trying to get along with the new neighbors', 'Finding out who you were meant to be', 'Crazy Haired girl', 'Day of the Dead']
		];

		var categoryIndex = categories.indexOf(chosenCategory);
		console.log(categoryIndex);
		var hintIndex = chosenCategory.indexOf(word);
		console.log(hintIndex);
		showClue.innerHTML = "Clue: - " + hints[categoryIndex][hintIndex];
		console.log(hints);
	};

	// Reset Game

	document.getElementById('reset').onclick = function () {
		correct.parentNode.removeChild(correct);
		letters.parentNode.removeChild(letters);
		showClue.innerHTML = "";
		context.clearRect(0, 0, 400, 400);
		play();
	}
}); //document load









