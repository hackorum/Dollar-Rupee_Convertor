var input, button, dollartorupee;

function setup() {
   createCanvas(710, 400);

   input = createInput();
   input.position(20, 65);

   button = createButton('convert');
   button.position(input.x + input.width, 65);
   button.mousePressed(DollarInRupee);

   sentence = createElement('h2', 'Enter amount in dollars $:');
   sentence.position(20, 5);

   textAlign(CENTER);
   textSize(50);
}

async function DollarInRupee() {
  const dollar = input.value();
  var response = await fetch("https://api.exchangeratesapi.io/latest?base=USD");
  var responseJSON = await response.json();
  var rates = responseJSON.rates;
  var inr = rates.INR;

  sentence.html('Amount in ₹upees: ' + dollar*inr);
  input.value('');

}
