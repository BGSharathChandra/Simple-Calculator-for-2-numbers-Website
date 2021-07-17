function addition() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  let sum = n1 + n2;
  Output.value = sum
}

function subtraction() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  let diff = n1 - n2;
  Output.value = diff
}

function multiplication() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  let prod = n1 + n2;
  Output.value = prod
}

function division() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  let quo = n1 / n2;
  Output.value = quo
  if (n1%n2!=0) {
    alert(`The Entered Number have Remainder which is ${n1%n2} but the Quotient given is the Perfect Quotient(up to a range)`)
  }
}
