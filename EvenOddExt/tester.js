numberTest();

function numberTest () {
  var testButton = document.getElementById("test");
  testButton.onclick = function() {
    evenOdd();
  };
}

function evenOdd() {
  var input = document.getElementById("userInput").value;
  if (isNaN(input)) {
    document.getElementById("result").innerHTML = input + " is not a number. Please enter a number";
  } else {
    if (input % 2 === 0) {
      document.getElementById("result").innerHTML = input + " is an EVEN number";
    } else {
      document.getElementById("result").innerHTML = input + " is an ODD number";
    }
  }
}