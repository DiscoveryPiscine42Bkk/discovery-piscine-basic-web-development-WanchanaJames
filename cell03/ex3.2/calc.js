function isPositiveInteger(value) {
  return /^\d+$/.test(value);
}

function calculate() {
  const left = document.getElementById("left").value;
  const right = document.getElementById("right").value;
  const operator = document.getElementById("operator").value;

  if (!isPositiveInteger(left) || !isPositiveInteger(right)) {
    alert("Error :(");
    return;
  }

  const leftNum = parseInt(left);
  const rightNum = parseInt(right);
  let result;

  if ((operator === "/" || operator === "%") && rightNum === 0) {
    console.log("It's over 9000!");
    alert("It's over 9000!");
    return;
  }

  switch (operator) {
    case "+":
      result = leftNum + rightNum;
      break;
    case "-":
      result = leftNum - rightNum;
      break;
    case "*":
      result = leftNum * rightNum;
      break;
    case "/":
      result = leftNum / rightNum;
      break;
    case "%":
      result = leftNum % rightNum;
      break;
  }

  console.log(result);
  alert(result);
}

document.getElementById("calcBtn").addEventListener("click", calculate);

// Every 30 seconds reminder
setInterval(() => {
  alert("Please, use me...");
}, 30000);
