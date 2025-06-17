const balloon = document.getElementById("balloon");
const colors = ["red", "green", "blue"];
let colorIndex = 0;
let size = 200;

function nextColor() {
  colorIndex = (colorIndex + 1) % colors.length;
  return colors[colorIndex];
}

function prevColor() {
  colorIndex = (colorIndex - 1 + colors.length) % colors.length;
  return colors[colorIndex];
}

balloon.addEventListener("click", () => {
  size += 10;

  if (size > 420) {
    size = 200;
    colorIndex = 0;
    balloon.style.backgroundColor = colors[colorIndex];
  } else {
    balloon.style.backgroundColor = nextColor();
  }

  balloon.style.width = size + "px";
  balloon.style.height = size + "px";
});

balloon.addEventListener("mouseleave", () => {
  if (size > 200) {
    size -= 5;
    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = prevColor();
  }
});
