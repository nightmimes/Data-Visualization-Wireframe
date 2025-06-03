// vars for data viz
let table; // variable for csv data
let researchPercentages = []; // var for research data
let surveyPercentages = []; // var for survey data
let barWidth = 50; // total width
let barHeight = 490; // total height
let researchX = 230; // x coord of research bar
let surveyX = researchX - 150; // x coord of survey bar
let barsY = 5; // y coord of both bars
let cornerRadius = 10; // rounded corners

let pinkC;
let blueC;
let PurpleC;

function preload() { // load csv data
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(360, 500);
  
  pinkC = color(212, 113, 109);
  blueC = color(82, 151, 213);
  purpleC = color(132, 88, 200);
  
  readData(); // read csv data
}

function draw() {
  background(255);
  drawBars();
}

function readData() {
  for (let i = 0; i < table.getRowCount(); i++) { // read data and get numbers in csv rows
    let row = table.getRow(i);
    researchPercentages.push(row.getNum('research'));
    surveyPercentages.push(row.getNum('survey'));
  }
}

function drawBars() {
  // noFill();
  stroke(0);
  strokeWeight(3);

  barsY = 5; // resets y coord for after each loop
  // Draw research bar
  for (let i = 0; i < researchPercentages.length; i++) { // for the total number indeces under research
    let percentage = researchPercentages[i]; // var for research indeces
    let barLength = barHeight * (percentage / 100); // calculates lengths in each rect inside research bar
    
    if (i === 0) { // before all indeces
      fill(pinkC);
      rect(researchX, barsY, barWidth, barLength, cornerRadius, cornerRadius, 0, 0); // create first rect inside research bar
    } else if (i === researchPercentages.length - 1) { // start from before the last index
      fill(blueC);
      rect(researchX, barsY, barWidth, barLength, 0, 0, cornerRadius, cornerRadius); // create last rect inside research bar
    } else { // otherwise
      fill(purpleC);
      rect(researchX, barsY, barWidth, barLength); // create rect in the middle
    }
    barsY += barLength; // add length of index to y axis of research bar
  }

  barsY = 5; // resets y coord for after each loop
  // Draw survey bar

  for (let i = 0; i < surveyPercentages.length; i++) { // for the total number indeces under survey
    let percentage = surveyPercentages[i]; // var for research indeces
    let barLength = barHeight * (percentage / 100); // calculates lengths in each rect inside survey bar
    
    if (i === 0) { // before all indeces
      fill(pinkC);
      rect(surveyX, barsY, barWidth, barLength, cornerRadius, cornerRadius, 0, 0); // create first rect inside survey bar
    } else if (i === surveyPercentages.length - 1) { // start from before the last index
      fill(blueC);
      rect(surveyX, barsY, barWidth, barLength, 0, 0, cornerRadius, cornerRadius);// create last rect inside survey bar
    } else {
      fill(purpleC);
      rect(surveyX, barsY, barWidth, barLength); // create rect in the middle
    }
    barsY += barLength; // add length of index to y axis of survey bar
  }
}


