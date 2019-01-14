var ecclipseY = 150;
var value = 0; //storing int for startMenu
var pageint = 0; //stores int for which page you are on.
var startpage = false;
var chooseScreen = false;
var personpage = false;
var placepage = false;
var locateper = false;
var displayWidth = 800;
var displayHeight = 600;
//var startInt = 0; //int for startMenu
//var homePageInt = 0; //int for homePage
var s = 100; // stores the size of the icon
var x = 100;
var y = 100
var icon = [];// stores the icons to be loaded.
var LOGOimg; // stores the logo image file.

var button_choose;
var button_Locate;

var backbutton;
var button_1;
var b1;
var button_2;
var b2;
var button_3;
var b3;
var button_4;
var b4;
var button_5;
var b5;
var button_6;
var b6;
var button_7;
var b7;
var button_8;
var b8;
//stores the button information.


function preload() { //pre caches data into specific contaniers this helps minimize loading times.
LOGOimg = createImg('LOGO.jpg');
LOGOimg.hide();
startpage = true;
	icon[0] = createImg('Person_DAD.jpg');
  icon[1] = createImg('Person_Child_Son.jpg');
  icon[2] = createImg('Person_MUM.jpg');
  icon[3] = createImg('Work_Icon.jpg');
  icon[4] = createImg('WalkingTheDog_Icon.jpg');
  icon[5] = createImg('School_Icon.jpg');
  icon[6] = createImg('Shopping_Icon.jpg');
  icon[7] = createImg('Appointment_Icon.jpg');

  for(var l = 0; l < icon.length; l++)
  {
    icon[l].hide();
  }
}


function setup() {
    var displayWidth = 800;
    var displayHeight = 600;
  var url = 'mongodb://<dbuser>:<dbpassword>@ds048279.mlab.com:48279/nate_test'
	loadJSON(url, drawData); //mongodb://<dbuser>:<dbpassword>@ds255754.mlab.com:55754/dat602_mlab
  button_choose = createButton('choose');
  button_Locate = createButton('Locate');
  backbutton = createButton('Back');
  button_1 = createButton('Person_1Dad');
  button_2 = createButton('Person_2Mom');
	button_3 = createButton('Person_3Child-1');
  button_4 = createButton('Work');
	button_5 = createButton('School');
	button_6 = createButton('Shopping');
  button_7 = createButton('Appointment');
  button_8 = createButton('WalkingTheDog');
  button_choose.hide();
  button_Locate.hide();
  backbutton.hide();
  button_1.hide();
  button_2.hide();
  button_3.hide();
  button_4.hide();
  button_5.hide();
  button_6.hide();
  button_7.hide();
  button_8.hide();


}

function draw() {

  var centerX = createCanvas(800, 600);
  //places frame rate in bottom right corner

  fill(0);// Sets fill colour to black.



  if (startpage === true)
  {
    startScreen();
  }

  if (chooseScreen === true)
   {
      MainMenu();
   }

  if (personpage === true)
  {
    secondScreen();
    backbutton.show();
    button_1.show();
    button_2.show();
    button_3.show();
  }

  if(placepage === true)
  {
    backbutton.show();
    button_1.hide();
    button_2.hide();
    button_3.hide();
    button_4.show();
    button_5.show();
    button_6.show();
    button_7.show();
    button_8.show();
    ThirdScreen();
  }
  if (locateper === true)
  {
    locate();
  }
    rect(25, 25, 50, 50);
}


function mousePressed()
{

    startpage = false;
    chooseScreen = true;

}
function ChoosePage(){

    chooseScreen = false;
    personpage = true;
  	button_choose.hide();
  	button_Locate.hide();

  }
function locatePage(){

    chooseScreen = false;
    locateper = true;

  }
function page1(){
  	b1 = 1;
    personpage = false;
    placepage = true;

  }
function page2(){
  	b2 = 1;
    personpage = false;
    placepage = true;

  }
function page3(){
  	b3 = 1;
    personpage = false;
    placepage = true;

  }
function confirm1(){
  	b4 = 1;
    chooseScreen = true;
  	placepage = false;
  }
function confirm2(){
  	b5 = 1;
    chooseScreen = true;
  	placepage = false;
  }
function confirm3(){
  	b6 = 1;
    chooseScreen = true;
  	placepage = false;
  }
function confirm4(){
  	b7 = 1;
    chooseScreen = true;
  	placepage = false;
  }
function confirm5(){
  	b8 = 1;
    chooseScreen = true;
  	placepage = false;
  }

function startScreen() {
    background(1,150,200);
    textSize(50);
    //text('Welcome to AISHA', 200, 300); // original text logo location.
    image(LOGOimg, 175, 220); // dispays the logo at given location.
    textSize(20);
    //var startBtn = document.getElementById('startBtn');

}

function MainMenu(){
  background(1,150,200);
  backbutton.hide();
  button_1.hide();
  button_2.hide();
  button_3.hide();
  button_4.hide();
  button_5.hide();
  button_6.hide();
  button_7.hide();
  button_8.hide();
  	image(LOGOimg, 175, 10); // dispays the logo at given location.
  	fill(50, 50, 50);
    strokeWeight(2);
    stroke(10)
   // ellipse(300, 150, 100, 100);
  	button_Locate.show();
  	button_choose.show();
		button_choose.position(100, 205);
		button_choose.mousePressed(ChoosePage);


	  button_Locate.position(250, 205);
 		button_Locate.mousePressed(locatePage);

  	var fps = parseInt(frameRate(), 10);
    textSize(20);
    text('frameRate: ' + fps, 10, 590);
}

function secondScreen() {
    background(1, 150, 200);
  	button_Locate.hide();
  	button_choose.hide();
  	button_4.hide();
    button_5.hide();
    button_6.hide();
    button_7.hide();
    button_8.hide();
 	  personbuttons();
    textSize(50);
 	  text('Who are you', 250, 50);
    strokeWeight(2); /*Stroke weight for all shapes */

		image(icon[0], 100, 100,s,s);
  	image(icon[1], 400, 100,s,s);
 		image(icon[2], 250, 100,s,s);

    //Circle 1
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    /* x,y,shape width,shape height */
    //ellipse(150 , 150, 100, 100);

    //Circle 2
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10)
   // ellipse(300, 150, 100, 100);


    //Circle 3
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    //ellipse(450, 150, 100, 100);

    //Circle 4
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    ellipse(600, 150, 100, 100);

    var centerX = (displayWidth / 2);

  	var fps = parseInt(frameRate(), 10);
    textSize(20);
    text('frameRate: ' + fps, 10, 590);
}

function ThirdScreen() {
  	placesbuttons();
    button_Locate.hide();
  	button_choose.hide();
    background(1, 150, 200);
    textSize(50);
    text('where are you going', 180, 50);
    //strokeWeight(2); /*Stroke weight for all shapes */
    //Circle 1
    fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    /* x,y,shape width,shape height */
    ellipse(150, 150, 100, 100);

  	image(icon[3], 100, 100,s,s);
  	image(icon[4], 100, 250,s,s);
 		image(icon[5], 250, 100,s,s);
	  image(icon[6], 400, 100,s,s);
 		image(icon[7], 250, 250,s,s);

  	var fps = parseInt(frameRate(), 10);
    textSize(20);
    text('frameRate: ' + fps, 10, 590);
}

function locate()
{
  	button_choose.hide();
  	button_Locate.hide();
  	button_1.hide();
    button_2.hide();
    button_3.hide();
  	button_4.hide();
    button_5.hide();
    button_6.hide();
    button_7.hide();
    button_8.hide();
  background(1, 150, 200);
    textSize(50);
    text('Person is located', 180, 50);
  	fill(50, 50, 50);
    strokeWeight(2);
    stroke(10);
    /* x,y,shape width,shape height */
   // ellipse(150, 150, 100, 100);
  if (b1 === 1)
      {
    			image(icon[0], 200, 100,s,s);
      }
  if (b2 === 1)
      {
    			image(icon[1], 500, 100,s,s);
      }
  if (b3 === 1)
      {
    			image(icon[2], 350, 100,s,s);
      }
  if (b4 === 1)
      {
    			image(icon[3], 150, 300,s,s);
      }
  if (b5 === 1)
      {
    			image(icon[5], 200, 300,s,s);
      }
  if (b6 === 1)
      {
    			image(icon[6], 250, 300,s,s);
      }
  if (b7 === 1)
      {
    			image(icon[7], 300, 300,s,s);
      }
   if (b8 === 1)
      {
    			image(icon[4], 350, 300,s,s);
      }
  var fps = parseInt(frameRate(), 10);
    textSize(20);
    text('frameRate: ' + fps, 10, 590);
}

function personbuttons() {
 /* This function set the location for the buttons on the person select
screen and how they react to inputs.
*/
 	  button_1.position(100, 205);
		button_1.mousePressed(page1);


	  button_2.position(250, 205);
 		button_2.mousePressed(page3);

	  button_3.position(400, 205);
		button_3.mousePressed(page2);

		backbutton.position(700, 500);
		backbutton.mousePressed(bbutton);

}

function placesbuttons() {
/* This function set the location for the buttons on the locations
select screen and how they react to inputs.
*/
 	  button_4.position(100, 205);
		button_4.mousePressed(confirm1);


	  button_5.position(250, 205);
 		button_5.mousePressed(confirm2);


	  button_6.position(400, 205);
		button_6.mousePressed(confirm3);

  	button_7.position(250, 355);
		button_7.mousePressed(confirm4);

  	button_8.position(100, 355);
		button_8.mousePressed(confirm5);

	  backbutton.position(700, 500);
		backbutton.mousePressed(bbutton);
}

function bbutton()	{

    startpage = true;
  	placepage = false;

}
function drawData(data) {
  console.log(data); // inspect the JSON
  background(0);

  //Run all elements of the database and visualize them (separate for value1, 2, 3)
  for (var i = 0; i < data.length; i++) {
    fill(0, 255, 255, 200);
    ellipse(random(width), random(height), data[i].value1, data[i].value1);

    fill(255, 0, 255, 200);
    ellipse(random(width), random(height), data[i].value2, data[i].value2);

    fill(255, 255, 0, 200);
    ellipse(random(width), random(height), data[i].value3, data[i].value3);
  }
}
