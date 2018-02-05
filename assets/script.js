window.onload = function () {


var alphabet = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M']

var categories;         // Array of topics
var chosenCategory;     // Selected catagory
var getHint ;          // Word getHint
var word ;              // Selected word
var guess ;             // Geuss
var guesses = [ ];      // Stored guesses
var lives ;             // Lives
var counter ;           // Count correct guesses
var space;              // Number of spaces in word '-'

// Get elements
var showLives = document.getElementById("mylives");
var showCatagory = document.getElementById("scatagory");
var getHint = document.getElementById("hint");
var showClue = document.getElementById("clue");



// create alphabet ul
var buttons = function () {
	myButtons = document.getElementById('buttons');
	letters = document.createElement('ul');

	for (var i = 0; i < alphabet.length; i++) {

		letters.id = 'alphabet';
		list = document.createElement('li');
		list.id = 'letter';
		letterBtn.addClass("letter-button letter letter-button-color");
		letterBtn.attr("data-letter", alphabet[i]);
		letterBtn.text(letters[i]);

		list.innerHTML = alphabet[i];
		check();
		myButtons.appendChild(letterBtn);
		letters.appendChild(list);
	}
	$('input[type="buttons"]').click(function(){
		$(this).addClass('grey');
});
}


  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
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
   comments = function () {
    showLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
			showLives.innerHTML = "Game Over"
			;
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
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
        ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
        ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
        ["manchester", "milan", "madrid", "amsterdam", "prague"]
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
        ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
        ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
        ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
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
}



	

var shows = ['I LOVE LUCY', 'FRIENDS', 'SEINFIELD','CHEERS', 'MASH', 'SEX AND THE CITY', 'DEXTER', 'JUSTIFIED','THIS IS US', 'PUNKY BREWSTER', 'LOONEY TUNES', 'MELROSE PLACE', 'GOLDEN GIRLS', 'LAW AND ORDER', 'WHOS LINE IS IT ANYWAY', 'BEWITCHED', 'JEOPARDY', 'WHEEL OF FORTUNE', 'WHO WANTS TO BE A MILLIONAIRE']

var action = ['MAD MAX FURY ROAD', 'DUNKIRK', 'METROPOLIS', 'COCO', 'WONDER WOMAN', 'KING KONG', 'STAR WARS', 'LOGAN', 'SEVEN SAMURAI', 'BABY DRIVER', 'THE TREASURE OF THE SIERRA MADRE','THE DARK KNIGHT', 'WAR FOR THE PLANET OF THE APES', 'SPIDERMAN', 'HARRY POTTER AND THE DEATHLY HALLOWS', 'CAPTIAN AMERICA CIVIL WAR','MISSION IMPOSSIBLE', 'IRON MAN', 'SKYFALL']

function chooseGenre () {

}