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
  let prod = n1 * n2;
  Output.value = prod
}

function division() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  let quo = n1 / n2;
  Output.value = quo
  if (n1 % n2 != 0) {
    alert(`The Entered Number have Remainder which is ${n1%n2} but the Quotient given is the Perfect Quotient(up to a range)`)
  }
}

function power() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  let power = n1 ** n2
  Output.value = power
}

function lcm() {
  function lcm_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
    return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
  }

  function gcd_two_numbers(x, y) {
    x = Math.abs(x);
    y = Math.abs(y);
    while (y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  Output.value = lcm_two_numbers(n1, n2)

}

function percentage() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  Percentage  = (n1/n2)*100
  Output.value = Percentage
}
function remainder() {
  let n1 = Number(document.getElementById("n1").value);
  let n2 = Number(document.getElementById("n2").value);
  let Output = document.getElementById("Output");
  Remainder  = n1%n2
  Output.value = Remainder
}
