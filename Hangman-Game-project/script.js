window.onload = function () {

    var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
          'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
          'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    var categories;
    var chosenCategory;
    var getHint ;
    var word ;
    var guess ;
    var geusses = [ ];
    var lives ;
    var counter ;
    var space;
  
    var showLives = document.getElementById("mylives");
    var showCatagory = document.getElementById("scatagory");
    var getHint = document.getElementById("hint");
    var showClue = document.getElementById("clue");
  
    var buttons = function () {
      myButtons = document.getElementById('buttons');
      letters = document.createElement('ul');
  
      for (var i = 0; i < alphabet.length; i++) {
        letters.id = 'alphabet';
        list = document.createElement('li');
        list.id = 'letter';
        list.innerHTML = alphabet[i];
        check();
        myButtons.appendChild(letters);
        letters.appendChild(list);
      }
    }
      
    var selectCat = function () {
      if (chosenCategory === categories[0]) {
        catagoryName.innerHTML = "The Chosen Category Is Premier League Football Teams";
      } else if (chosenCategory === categories[1]) {
        catagoryName.innerHTML = "The Chosen Category Is Films";
      } else if (chosenCategory === categories[2]) {
        catagoryName.innerHTML = "The Chosen Category Is Cities";
      }
    }
  
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
  
        geusses.push(guess);
        wordHolder.appendChild(correct);
        correct.appendChild(guess);
      }
    }
    
     comments = function () {
      showLives.innerHTML = "You have " + lives + " lives";
      if (lives < 1) {
        showLives.innerHTML = "Game Over";
      }
      for (var i = 0; i < geusses.length; i++) {
        if (counter + space === geusses.length) {
          showLives.innerHTML = "You Win!";
        }
      }
    }
  
    var animate = function () {
      var drawMe = lives ;
      drawArray[drawMe]();
    }

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
  
     check = function () {
      list.onclick = function () {
        var geuss = (this.innerHTML);
        this.setAttribute("class", "active");
        this.onclick = null;
        for (var i = 0; i < word.length; i++) {
          if (word[i] === geuss) {
            geusses[i].innerHTML = geuss;
            counter += 1;
          } 
        }
        var j = (word.indexOf(geuss));
        if (j === -1) {
          lives -= 1;
          comments();
          animate();
        } else {
          comments();
        }
      }
    }
    
    play = function () {
      categories = [
        ["EVERTON", "LIVERPOOL", "SWANSEA", "CHELSEA", "HULL", "MANCHESTER-CITY", "NEWCASTLE-UNITED"],
        ["ALIEN", "DIRTY-HARRY", "GLADIATOR", "FINDING-NEMO", "JAWS"],
        ["MANCHESTER", "MILAN", "MADRID", "AMSTERDAM", "PRAGUE"]
          
      ];
  
      chosenCategory = categories[Math.floor(Math.random() * categories.length)];
      word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
      word = word.replace(/\s/g, "-");
      console.log(word);
      buttons();
  
      geusses = [ ];
      lives = 10;
      counter = 0;
      space = 0;
      result();
      comments();
      selectCat();
      canvas();
    }
  
    play();
    
      hint.onclick = function() {
  
        hints = [
            [
                "Home to Goodison Park, this team has a rich football history based in Merseyside.",
                "Known for Anfield and the famous 'You'll Never Walk Alone' anthem, this Merseyside club is a football giant.",
                "This Welsh team made history as the first from Wales to enter the Premier League.",
                "Owned by a Russian billionaire.",
                "Once managed by Phil Brown.",
                "2013 FA Cup runners up.",
                "Gazza's first club."
            ],
            [
                "A groundbreaking science-fiction horror film directed by Ridley Scott, featuring a terrifying extraterrestrial creature.",
                "A 1971 American action film starring Clint Eastwood as a tough and unorthodox cop.",
                "This historical drama directed by Ridley Scott showcases a general seeking revenge in ancient Rome.",
                "An animated adventure featuring a clownfish named Marlin on a quest to find his son, Nemo.",
                "A classic thriller directed by Steven Spielberg, revolving around a giant great white shark."
            ],
            [
                "A vibrant city in the UK known for its rich industrial history and iconic football clubs.",
                "Home to AC and Inter, this Italian city is a global fashion and design capital.",
                "The lively Spanish capital, famous for its cultural attractions, football rivalry, and vibrant nightlife.",
                "Known for its picturesque canals and historic architecture, this Dutch city is a popular tourist destination.",
                "The capital of the Czech Republic, renowned for its stunning medieval architecture and cultural heritage."
            ]
        ];        
  
      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
    };
  
    document.getElementById('reset').onclick = function() {
      correct.parentNode.removeChild(correct);
      letters.parentNode.removeChild(letters);
      showClue.innerHTML = "";
      context.clearRect(0, 0, 400, 400);
      play();
    }
  }
  
  
  