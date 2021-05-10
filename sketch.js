function setup() {
  createCanvas(800,800);

  console.log("1)DISPLAY YOUR NAME 10 TIME IN THE CONSOLE");
  for(var i = 0; i < 10; i=i + 1){
  console.log("Shane Jobi");
}

console.log("2)DISPLAY ALL EVEN NUMBERS FROM 1 TO 20");
  for(var i = 2; i <= 20; i=i + 2){
    console.log(i);
  }
console.log("3)DISPLAY ONLY THOSE NUMBERS THAT ARE DIVISIBLE BY 5 FROM 1 TO 20");
  for(var i = 1; i<=20; i=i + 1){
    if(i%5== 0){
      console.log(i)
    }
  }
}

function draw() {
  background("black");  
    
}




