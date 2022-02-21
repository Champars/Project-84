var Canvas = document.getElementById("myCanvas");
ctx = Canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
    imgtag = new Image(); //defining a variable with a new image
    imgtag.onload = uploadimg; // setting a function, onloading this variable
    imgtag.src = img_image; // load image
}

function uploadimg() {

    ctx.drawImage(imgtag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if ((keyPressed >= 65 && keyPressed <= 95) || (keyPressed >= 97 && keyPressed <= 122)) {
        aplhabetkey();
        document.getElementById("d1").innerHTML = "You pressed an Alphabet Key";
        console.log("You pressed an Alphabet Key");
    } else if (keyPressed >= '48' && keyPressed <= '57') {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed a Number Key";
        console.log("You pressed a Number Key");
    } else if (keyPressed >= '37' && keyPressed <= '40') {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed an Arrow Key";
        console.log("You pressed an Arrow Key");
    } else if (keyPressed == '17' || keyPressed == '18' || keyPressed == '27') {
        specialkey();
        document.getElementById("d1").innerHTML = "You pressed a Special Key";
        console.log("You pressed a Special Key");
    } else {
        otherkey();
        document.getElementById("d1").innerHTML = "You pressed another  Key";
        console.log("You pressed another Key");
    }
}

function aplhabetkey() {
    img_image = "Alpkey.png";
    add();
}

function numberkey() {
    img_image = "numkey.png";
    add();
}

function arrowkey() {
    img_image = "Arrkey.png";
    add();
}

function specialkey() {
    img_image = "spkey.png";
    add();
}

function otherkey() {
    img_image = "otherkey.png";
    add();
}