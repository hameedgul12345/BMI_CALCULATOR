function calculateBMI() {
  var wg = document.getElementById("wg");
  var hg = document.getElementById("hg");
  var bmi_status = document.getElementById("bmi_status");
  var bmi_h2 = document.getElementById("bmi_h2");

  console.log(Number(hg.value));
  console.log(Number(wg.value));
  if (Number(wg.value) <= 0 || Number(hg.value) <= 0) {
    return alert("Please Provide a valid Weight Or Height");
  }

  var meter = Number(hg.value) * 0.3048;
  var BMI = Number(wg.value) / (meter * meter);
  console.log(BMI);

  if (BMI < 18.5) {
    bmi_status.textContent = "Underweight";
    bmi_h2.textContent = BMI;
    console.log("Underweight");
  } else if (18.5 <= BMI && BMI < 24.9) {
    bmi_status.textContent = "Normal weight";
    bmi_h2.textContent = BMI;
    console.log("Normal weight");
  } else if (25 <= BMI && BMI < 29.9) {
    bmi_status.textContent = "Overweight";
    bmi_h2.textContent = BMI;
    console.log("Overweight");
  } else {
    bmi_h2.textContent = BMI;
    bmi_status.textContent = "Obesity"
    console.log("Obesity");
  }
}
