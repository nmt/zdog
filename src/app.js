let illo = new Zdog.Illustration({
    element: '.zdog-canvas',
});

new Zdog.Ellipse({
    addTo: illo,
    diameter: 80,
    stroke: 20,
    color: '#0000ff',
})

illo.updateRenderGraph();
