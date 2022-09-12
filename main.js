// Triangle Perimeter Assignment Start Code

// global variables

document.getElementById("calcBtn").addEventListener("click", btnClick);

function btnClick() {
  let xA = document.getElementById("xA").value;
  let yA = document.getElementById("yA").value;
  let xB = document.getElementById("xB").value;
  let yB = document.getElementById("yB").value;
  let xC = document.getElementById("xC").value;
  let yC = document.getElementById("yC").value;

  let values = calcPerim(xA, yA, xB, yB, xC, yC);

  document.getElementById("abOutput").innerHTML = values.abLength.toFixed(2);
  document.getElementById("acOutput").innerHTML = values.acLength.toFixed(2);
  document.getElementById("bcOutput").innerHTML = values.bcLength.toFixed(2);
  document.getElementById("perimOutput").innerHTML = values.perimeter.toFixed(2);
}

function dist(x1, y1, x2, y2) {
  let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
  return distance;
}

function calcPerim(x1, y1, x2, y2, x3, y3) {
  let abLength = dist(x1, y1, x2, y2),
    acLength = dist(x1, y1, x3, y3),
    bcLength = dist(x2, y2, x3, y3),
    perimeter = abLength + acLength + bcLength;
  return { abLength, acLength, bcLength, perimeter };
}
