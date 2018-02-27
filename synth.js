var sounds = [];
var wormVari = [];
var wormLat = [];
var images = ['assets/img/1.gif', 'assets/img/3.gif', 'assets/img/4.gif', 'assets/img/5.gif', 'assets/img/7.gif', 'assets/img/8.gif', 'assets/img/9.gif', 'assets/img/10.gif']

var kickInterval = 1500;
var lastSound = 0;
var z=0;


var spawnInterval = 2 * 1000;	// 2s
var lastSpawn = 0; // keep track of the last time we spawned an object


// load in all the music sounds!
function preload() {

	sounds[0] = loadSound("assets/lose2.mp3");
	sounds[1] = loadSound("assets/drum/kick1.wav");
	sounds[2] = loadSound("assets/drum/snare1.wav");
	sounds[3] = loadSound("assets/drum/pop3.wav");
	sounds[4] = loadSound("assets/drum/clap.wav");

}

function setup() {
	createCanvas(windowWidth, windowHeight);
	sounds[0].loop();



}


function draw() {


	//#textDiv{background-color:#000;z-index:-1;position: fixed;}
	//document.getElementById("h1");

	Mousetrap.bind("q", function(){
	speakSpell("OW!")
	//showText("yo")
	placeRandomImage(images[getRandomInt(0,images.length-1)]) })

	Mousetrap.bind("w", function(){
	speakSpell("Bam chika pow pow!")
	placeRandomImage(images[getRandomInt(0,images.length-1)]) })

	Mousetrap.bind("e", function(){
	speakSpell("ouchie")
	placeRandomImage(images[getRandomInt(0,images.length-1)]) })

	Mousetrap.bind("r", function(){
	speakSpell("faanci")
	placeRandomImage(images[getRandomInt(0,images.length-1)]) })

	Mousetrap.bind("t", function(){
	speakSpell("kill me please")
	placeRandomImage(images[getRandomInt(0,images.length-1)]) })

	Mousetrap.bind("y", function(){
	speakSpell("huehue")
	placeRandomImage(images[getRandomInt(0,images.length-1)])

	})

	function speakSpell(words) {
	responsiveVoice.speak(words)

	$('h1').text(words)
	$('body')
	}

	function showText (text){
    document.getElementById('#textDiv').innerHTML = '<h1></h1>'


}



	//For instruction
	textSize(18);
	fill("black");
	text("Press A, S, D, F for beats", 10, 30);

	textSize(18);
	fill("white");
	text("Press Q, W, E, R, T, Y to place dancers", windowWidth-500, 30);
	

	
	//Automatically start this sound on background
 	
	// time to spawn?
	if(millis() > lastSpawn + spawnInterval) {
		lastSpawn = millis();
 
		// add a new object
		wormVari.push(new wormFunc());
		wormLat.push(new Latworm());
	}
 
	// call EACH and EVERY object methods 
	// This creates the flow 
	for(var i = 0; i < wormVari.length; i++) {
		wormVari[i].method1();
	}

	for(var i = 0; i < wormLat.length; i++) {
		wormLat[i].method2();
	}


}

// $('img').fadeIn(function(placeRandomImage){
// 	('img').delay(2000).fadeout();
// })




function placeRandomImage(image){
		var x = getRandomInt(0,80)
		var y = getRandomInt(0,85)
		//turns x and y from numbers into text
		x = x.toString() + "%"
		y = y.toString() + "%"
		//the code below will remove all of the chosen element, in this case svg, and put in a new one. 
		//$('img').remove()
		//dont be too concerned with the svg itself
		$('body').append('<img width="auto" src="'+image+'" style="position: absolute; left:'+x+'; top:'+y+'; z-index:'+z+'">')
		z = z+1;
		//you could also just move an existing SVG round with something like
		//$('img').css({left: x, top: y})
		//$(this).addClass("removeAfterX");
}


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function keyPressed() {
	// for specific keys play and do specific thing
	if(key == 'A') {
		background(random(255), random(255), random(255));
		sounds[1].play();
		

		//spawn 10 wormVari (Horizontal lines)
		for(var i = 0; i <10; i++) {
			wormVari.push(new wormFunc());

			

		}

	}

	if(key == 'S') {
		background(random(255), random(255), random(255));
		sounds[2].play();
		//spawn 10 Latworm (Vertical Lines)
		for(var i = 0; i <10; i++) {
			wormLat.push(new Latworm());
		}
	}

		if(key == 'D') {
		background(random(255), random(255), random(255));
		sounds[3].play();
		

		//spawn 10 wormVari (Horizontal lines)
		for(var i = 0; i <10; i++) {
			wormVari.push(new wormFunc());

			

		}

	}

		if(key == 'F') {
		background(random(255), random(255), random(255));
		sounds[4].play();
		

		//spawn 10 wormVari (Horizontal lines)
		for(var i = 0; i <10; i++) {
			wormVari.push(new wormFunc());

			

		}

	}
}


function wormFunc() {
 
	// internal variables
	this.x = random(width);
	this.y = 0;
 
	// internal function
	this.method1 = function() {
 
 		//increase the falling speed along the Y-axis, vertical lines
		this.y += 5;
		
		noStroke();
		fill(255);
		ellipse(this.x, this.y, 20, 20);
 
	}
}

function Latworm() {

	//internal variables
	this.x = 0;
	this.y = random(width);

	//internal function
	this.method2 = function() {

		//increase the falling speed along the X-axis, horzontal lines
		this.x += 5;

		noStroke();
		fill(0);
		ellipse(this.x, this.y, 20, 20);


	}

}
