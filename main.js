
const begD = () => {
  return 0;
}
const asdf = (event) => {
	return 0;
}
function beginSliding(e) {
  console.log(e.target);
  const domTarget = e.target;
  domTarget.onpointermove = slide;
  domTarget.setPointerCapture(e.pointerId);
}

function stopSliding(e) {
  slider.onpointermove = null;
  slider.releasePointerCapture(e.pointerId);
}

function slide(e) {
  slider.style.transform = `translate(${e.clientX - 70}px)`;
}

const slider = document.getElementById("slideA");
slider.onpointerdown = beginSliding;
slider.onpointerup = stopSliding;
console.log(begD())