let cnv, x, y, width = 500, height = 500, actCol, oldX = -1, oldY = -1, uiCol, r = 0, g = 0, b = 0, slider, draged = false;
let colorPicker, cPick, brush = 0, brushSice = 2, brushes = 2, randCol = 0, colorrun = 0;

function setup() {
  cPick = false;
  actCol = color(200, 20, 20);
  uiCol = color(20, 20, 200);
  cnv = createCanvas(width, height);
  background(25);
  
  colorPicker = createColorPicker(actCol);
  colorPicker.position(0, height);
}

function draw() {
  let c = color(30, 30, 130);
  fill(c);
  if(mouseIsPressed){
        
        let doit = true;
       
    if(doit){
      
        if(randCol === 0){
          stroke(colorPicker.color());
          fill(colorPicker.color());
        }else if(randCol === 1){
          stroke(random(0, 255), random(0, 255), random(0, 255));
          fill(random(0, 255), random(0, 255), random(0, 255));
        }else if(randCol === 2){
          colorrun++;
          r = Math.round(Math.sin(colorrun / 180 * Math.PI) * 127 + 128);
          g = Math.round(Math.sin(colorrun / 180 * Math.PI + (2/3 * Math.PI)) * 127 + 128);
          b = Math.round(Math.sin(colorrun / 180 * Math.PI + (4/3 * Math.PI)) * 127 + 128);
          fill(r, g, b);
          stroke(r, g, b);
        }
      if(brush === 0){
        strokeWeight(brushSice);
        
        //rect(mouseX - 10, mouseY - 10, 20, 20);
        if(oldX != -1 && mouseIsPressed){
          line(oldX, oldY, mouseX, mouseY);
        }
      }else if(brush === 1){
        strokeWeight(0);
        circle(mouseX + random(-5 * brushSice, 5 * brushSice), mouseY + random(-5 * brushSice, 5 * brushSice), brushSice + random(0, 5 * brushSice));
      }else if(brush === 2){
        strokeWeight(0);
        triangle(mouseX + random(-5 * brushSice, 5 * brushSice), mouseY + random(-5 * brushSice, 5 * brushSice), mouseX + random(-5 * brushSice, 5 * brushSice), mouseY + random(-5 * brushSice, 5 * brushSice), mouseX + random(-5 * brushSice, 5 * brushSice), mouseY + random(-5 * brushSice, 5 * brushSice));
      }
        
    }
      
  }
    
    if(!keyIsDown(SHIFT)){
      oldX = mouseX;
      oldY = mouseY;
    }    
  
  
  
  
}

function mouseClicked(){
  if(mouseY > 0 && mouseY < colorPicker.height){
    let br = Math.round((mouseX - colorPicker.width) / colorPicker.width - 0.5);
    if(br >= 0 && br <= brushes){
      console.log("Brush set to: " + br);
      brush = br;
    }
  }
  if(mouseX > colorPicker.width * 5 && mouseX < colorPicker.width * 6 && mouseY > 0 && mouseY < colorPicker.height){
    randCol++;
    if(randCol > 2){
      randCol = 0;
    }
  }
 
}

function mouseReleased(){
  colorPicker.position(0, height);
}

function mousePressed(){
   if(oldX == -1){
    console.log("SETTING")
    oldX = mouseX;
    oldY = mouseY;
  }
}

function keyTyped(){
   if (key === 's') {
    save('P5Save.png');
  }
  if(key === '+'){
    if(brushSice < 10){
      brushSice++;
    }
  }
  if(key === '-' && brushSice > 1){
    brushSice--;
  }
  if(key === 'l'){
    brush = 0;
  }
  if(key === 'c'){
    brush = 1;
  }
  if(key === 't'){
    brush = 2;
  }
  if(key === 'f'){
    randCol++;
    if(randCol === 3){
      randCol = 0;
    }
  }
}

function mouseDragged(){
  colorPicker.position(0, height);
  x = mouseX;
  y = mouseY;
}