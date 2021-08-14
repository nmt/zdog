const skinColour = "#f7ebd5";

let isSpinning = true;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  onDragStart: function () {
    isSpinning = false;
  },
  rotate: { x: Zdog.TAU / 1 },
});

let skirt = new Zdog.Cone({
  addTo: illo,
  diameter: 60,
  length: 50,
  stroke: 20,
  color: "black",
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
  color: skinColour,
  translate: { x: 0, y: 0, z: -40 },
});

let sleevePuff = new Zdog.Shape({
  addTo: top,
  stroke: 40,
  color: "black",
  translate: { x: 0, y: 30, z: 0 },
});

let sleeveCuff = new Zdog.Ellipse({
  addTo: sleevePuff,
  diameter: 15,
  stroke: 20,
  color: "grey",
  translate: { x: 0, y: 0, z: 15 },
});

sleevePuff.copyGraph({
  translate: { x: 0, y: -30, z: 0 },
});

let arm = new Zdog.Shape({
  addTo: top,
  path: [{ x: 10 }, { y: 0 }],
  translate: { x: 0, y: 30, z: 35 },
  color: skinColour,
  stroke: 20,
  rotate: { y: Zdog.TAU / -4 },
});

let forearm = new Zdog.Shape({
  addTo: arm,
  path: [{ x: 30 }, { y: 0 }],
  translate: { x: 0, y: 0, z: 0 },
  color: skinColour,
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
  color: skinColour,
  stroke: 20,
  rotate: { y: Zdog.TAU / -4 },
});

let calf = new Zdog.Shape({
  addTo: leg,
  path: [{ x: 20 }, { y: 0 }],
  translate: { x: 30, y: 0, z: 0 },
  color: skinColour,
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
