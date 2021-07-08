var input,heading;
var val

function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);

  imput = createInput().attribute("placeholder", "Enter an alphabet");
  imput.position(200,200);


}

function draw() {
  val = imput.value();
  switch(val){
    case "a":
    console.log("vowel")
    break;

    case "e":
    console.log("vowel")
    break;

    case "i":
    console.log("vowel")
    break; 

    case "o":
    console.log("vowel")
    break;

    case "u":
    console.log("vowel")
    break;

    default:
    console.log("consonent")
  }
  
}

