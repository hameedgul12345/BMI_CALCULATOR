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
  }
  