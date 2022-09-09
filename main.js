// Triangle Perimeter Assignment Start Code

document.getElementById("calcBtn").addEventListener("click", btnClick);

function btnClick() {
  let xA = document.getElementById("xA").value;
  let yA = document.getElementById("yA").value;
  let xB = document.getElementById("xB").value;
  let yB = document.getElementById("yB").value;
  let xC = document.getElementById("xC").value;
  let yC = document.getElementById("yC").value;

  document.getElementById("abOutput").innerHTML = calcLength(xA, yA, xB, yB);
  document.getElementById("acOutput").innerHTML = calcLength(xA, yA, xC, yC);
  document.getElementById("bcOutput").innerHTML = calcLength(xB, yB, xC, yC);
  console.log(calcPerim());
}

function calcLength(x1, y1, x2, y2) {
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

function calcPerim() {
  return (
    parseFloat(calcLength(xA, yA, xB, yB)) +
    parseFloat(calcLength(xA, yA, xC, yC)) +
    parseFloat(calcLength(xB, yB, xC, yC))
  );
}
