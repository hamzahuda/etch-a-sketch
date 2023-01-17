const grid = document.getElementById("grid");
const slider = document.querySelector("#slider");
const sliderLabel = document.querySelector("#slidercontainer > label");
const colorPicker = document.getElementById("colorpicker");

let color = "#000000";
colorPicker.addEventListener("input", function () {
  color = this.value;
});

setGrid(16);

slider.oninput = function () {
  sliderLabel.innerText = `${this.value} ⨉ ${this.value}`;
  setGrid(this.value);
};

function setGrid(length) {
  grid.replaceChildren();
  const pixel = document.createElement("div");
  pixel.setAttribute("class", "pixel");

  pixel.style.width = `${570 / length}px`;
  pixel.style.height = `${570 / length}px`;
  for (i = 0; i < length * length; i++) {
    const clone = pixel.cloneNode(true);
    clone.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = color;
    });
    grid.appendChild(clone);
  }
}
