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

function preload() { // load csv data
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(360, 500);
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
  noFill();
  stroke(0);
  strokeWeight(3);

  barsY = 5; // resets y coord for after each loop
  // Draw research bar
  for (let i = 0; i < researchPercentages.length; i++) { // for the total number indeces under research
    let percentage = researchPercentages[i]; // var for research indeces
    let barLength = barHeight * (percentage / 100); // calculates lengths in each rect inside research bar
    
    if (i === 0) { // before all indeces
      rect(researchX, barsY, barWidth, barLength, cornerRadius, cornerRadius, 0, 0); // create first rect inside research bar
    } else if (i === researchPercentages.length - 1) { // start from before the last index
      rect(researchX, barsY, barWidth, barLength, 0, 0, cornerRadius, cornerRadius); // create last rect inside research bar
    } else { // otherwise
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
      rect(surveyX, barsY, barWidth, barLength, cornerRadius, cornerRadius, 0, 0); // create first rect inside survey bar
    } else if (i === surveyPercentages.length - 1) { // start from before the last index
      rect(surveyX, barsY, barWidth, barLength, 0, 0, cornerRadius, cornerRadius);// create last rect inside survey bar
    } else {
      rect(surveyX, barsY, barWidth, barLength); // create rect in the middle
    }
    barsY += barLength; // add length of index to y axis of survey bar
  }
}



/* let table;
let percentages = [];
let startY = 150;
let barWidth = 50;
let barHeight = 490;
let totalPercentage;
let currentY;
let cornerRadius = 15;

function preload() {
  table = loadTable('data.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1200, 800);
}

function draw() {
  background(255); // Clear the canvas on each frame
  colorBars();
  calculateData(); // Calculate data each frame
  drawBars(); // Draw bars each frame
  dataLabels();
}

function calculateData() {
  // Read data from the CSV file
  percentages = [];
  for (let i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    percentages.push(row.getNum('percentage'));
  }

  // Calculate parameters for drawing the bars
  totalPercentage = percentages.reduce((a, b) => a + b, 0);
  currentY = startY;
}

function drawBars() {
  // Draw the bar representing 100%
  for (let i = 0; i < percentages.length; i++) {
    let percentage = percentages[i] / totalPercentage * 100;
    let barLength = barHeight * percentage / 100;

    // Draw a rectangle with rounded corners
    noFill();
    stroke(0); // Set stroke color to black
    strokeWeight(3);
    if (i === 0) {
      rect(550, currentY, barWidth, barLength, cornerRadius, cornerRadius, 0, 0);
    } else if (i === percentages.length - 1) {
      rect(550, currentY, barWidth, barLength, 0, 0, cornerRadius, cornerRadius);
    } else {
      rect(550, currentY, barWidth, barLength);
    }

    currentY += barLength;
  }
}

function colorBars(){
  noStroke();
  
  fill(237, 128, 76);
  rect(550, 150, 50, 20, cornerRadius, cornerRadius, 0, 0);
  
  fill(212, 123, 80);
  rect(550, 170, 50, 68);
  
  fill(207, 149, 114);
  rect(550, 238, 50, 402, 0, 0, cornerRadius, cornerRadius);
}

function dataLabels(){
// noStroke();
strokeWeight(1);
stroke(0);
fill(0);
textSize(18);
text('UHD Dormitories', 400, 165);
  
textSize(20);
text('Other', 420, 200);
textSize(22);
text('UHD Housing', 380, 220);
  
textSize(28);
text('Off-Campus', 370, 300);
textSize(18);
text('(non-UHD)', 390, 320);


} */




