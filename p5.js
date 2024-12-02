// Teachable Machine
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/TeachableMachine/3-teachable-audio
// https://editor.p5js.org/codingtrain/sketches/e3nrNMG7A


// Storing the label
let label = "waiting...";

// Classifier and model url
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/QG2k23ijV/';

// STEP 1: Load the model!
function preload() {
  classifier = ml5.soundClassifier(modelURL + 'model.json');
}

function setup() {
  createCanvas(640, 520);

  // STEP 2: Start classifying (will listen to mic by default)
  classifyAudio();
}

// STEP 2 classify!
function classifyAudio() {
  classifier.classify(gotResults);
}

function draw() {
  background(100);

  // STEP 4: Draw the label
  // textSize(32);
  textAlign(CENTER, CENTER);
  // fill(255);
  // text(label, width/2, height - 16);

  // Background noise is headphones
  let emoji = "🎧";
  // Pick an emoji based on label
  if (label == "F") {
    emoji = "Ⓕ";
  } else if (label == "Gb") {
    emoji = "Ⓖⓑ";
  } else if (label == "G") {
    emoji = "Ⓖ";
  } else if (label == "Ab") {
    emoji = "Ⓐⓑ";
  } else if (label == "A") {
    emoji = "Ⓐ";
  } else if (label == "Bb") {
    emoji = "Ⓑⓑ";
  } else if (label == "B") {
    emoji = "Ⓑ";
  } else if (label == "C") {
    emoji = "Ⓒ";
  } else if (label == "Db") {
    emoji = "Ⓓⓑ"; 
  } else if (label == "D") {
    emoji = "Ⓓ"
  } else if (label == "Eb") {
    emoji = "Ⓔⓑ"
  } else if (label == "E") {
    emoji = "Ⓔ"
  }
  // Draw the emoji
  textSize(256);
  text(emoji, width / 2, height / 2);
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  // Store the label
  label = results[0].label;
}
