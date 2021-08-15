const SKIN_COLOUR = "#f7ebd5";
const DRESS_COLOUR = "pink";
const CUFF_COLOUR = "white";

// let isSpinning = false;
let isSpinning = true;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  onDragStart: function () {
    isSpinning = false;
  },
  // rotate: { x: Zdog.TAU / 9 },
  // y is just which frame of the animation it starts at
});

let skirt = new Zdog.Cone({
  addTo: illo,
  diameter: 60,
  length: 50,
  stroke: 20,
  color: DRESS_COLOUR,
  translate: { x: -30, y: -10, z: 0 },
  rotate: { x: Zdog.TAU / 3, y: Zdog.TAU / -9 },
});

let top = skirt.copyGraph({
  diameter: 40,
  length: 70,
  translate: { x: 0, y: -80, z: -50 },
  rotate: { x: Zdog.TAU / -6 },
});

let head = new Zdog.Shape({
  addTo: top,
  stroke: 50,
  color: SKIN_COLOUR,
  translate: { x: 0, y: 0, z: -40 },
});

let glassesRim = new Zdog.Ellipse({
  addTo: head,
  diameter: 25,
  stroke: 3,
  color: "gold",
  translate: { x: 25, y: -20, z: -5 },
  rotate: { y: Zdog.TAU / 5 },
});

glassesRim.copyGraph({
  translate: { x: 25, y: 20, z: -5 },
});
let glassesBridge = new Zdog.Shape({
  addTo: glassesRim,
  path: [{ x: 10 }, { y: 0 }],
  translate: { x: 0, y: 15, z: 0 },
  color: "gold",
  stroke: 3,
  rotate: { z: Zdog.TAU / 4 },
});

let hair = new Zdog.Shape({
  addTo: head,
  stroke: 65,
  color: "black",
  translate: { x: -5, y: 0, z: -10 },
});

// let hair = new Zdog.Hemisphere({
//   addTo: head,
//   diameter: 70,
//   stroke: 5,
//   color: "red",
//   backface: "red",
//   translate: { x: -5, y: 0, z: -10 },
//   rotate: { y: Zdog.TAU / 4 },
// });

let hairTop = hair.copyGraph({
  rotate: { y: Zdog.TAU / -2 },
});

let bun = new Zdog.Shape({
  addTo: hair,
  stroke: 35,
  color: "black",
  translate: { x: -20, y: 0, z: -30 },
});

let sleevePuff = new Zdog.Shape({
  addTo: top,
  stroke: 40,
  color: DRESS_COLOUR,
  translate: { x: 0, y: 30, z: 0 },
});

let sleeveCuff = new Zdog.Ellipse({
  addTo: sleevePuff,
  diameter: 15,
  stroke: 20,
  color: CUFF_COLOUR,
  translate: { x: 0, y: 0, z: 15 },
});

sleevePuff.copyGraph({
  translate: { x: 0, y: -30, z: 0 },
});

let arm = new Zdog.Shape({
  addTo: top,
  path: [{ x: 10 }, { y: 0 }],
  translate: { x: 0, y: 30, z: 35 },
  color: SKIN_COLOUR,
  stroke: 20,
  rotate: { y: Zdog.TAU / -4 },
});

let forearm = new Zdog.Shape({
  addTo: arm,
  path: [{ x: 30 }, { y: 0 }],
  translate: { x: 0, y: 0, z: 0 },
  color: SKIN_COLOUR,
  stroke: 20,
  rotate: { y: Zdog.TAU / 4 },
});

arm.copyGraph({
  translate: { x: 0, y: -30, z: 35 },
});

let leg = new Zdog.Shape({
  addTo: skirt,
  path: [{ x: 20 }, { y: 0 }],
  translate: { x: 10, y: 10, z: -10 },
  color: SKIN_COLOUR,
  stroke: 20,
  rotate: { y: Zdog.TAU / -4 },
});

let calf = new Zdog.Shape({
  addTo: leg,
  path: [{ x: 20 }, { y: 0 }],
  translate: { x: 30, y: 0, z: 0 },
  color: SKIN_COLOUR,
  stroke: 20,
  rotate: { y: Zdog.TAU / -8 },
});

leg.copyGraph({
  translate: { x: -15, y: -15, z: -10 },
});

illo.updateRenderGraph();

function animate() {
  if (isSpinning) {
    illo.rotate.y += 0.03;
  }
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
