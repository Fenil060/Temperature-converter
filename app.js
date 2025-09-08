function convertTemperature() {
  const inputValue = document.getElementById("tempInput").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("result");

  const value = parseFloat(inputValue);

  if (isNaN(value)) {
    resultDiv.className = "alert alert-danger mt-3 text-center";
    resultDiv.textContent = "❌ Please enter a valid number.";
    return;
  }

  // Step 1: Convert input to Celsius
  let celsius;
  if (fromUnit === "Celsius") {
    celsius = value;
  } else if (fromUnit === "Fahrenheit") {
    celsius = (value - 32) * (5 / 9);
  } else if (fromUnit === "Kelvin") {
    celsius = value - 273.15;
  }

  // Step 2: Convert Celsius to target unit
  let output;
  if (toUnit === "Celsius") {
    output = `${celsius.toFixed(2)} °C`;
  } else if (toUnit === "Fahrenheit") {
    output = `${((celsius * 9) / 5 + 32).toFixed(2)} °F`;
  } else if (toUnit === "Kelvin") {
    output = `${(celsius + 273.15).toFixed(2)} K`;
  }

  resultDiv.className = "alert alert-success mt-3 text-center";
  resultDiv.textContent = `✅ ${value} ${fromUnit} = ${output}`;
}

function swapUnits() {
  const from = document.getElementById("fromUnit");
  const to = document.getElementById("toUnit");

  const temp = from.value;
  from.value = to.value;
  to.value = temp;
}
