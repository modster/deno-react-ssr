---
title: "Orthographic Radial Gradient"
---
```js
/**
 * @link    https://observablehq.com/@d3/orthographic-shading?collection=@d3/d3-geo
 * @param   {*} context 
 * @param   {*} path 
 * @param   {*} gradient 
 * @returns  
 */
export const geoOrthographicRadialGradient = (context, path, gradient) => {
    const projection = d3.geoOrthographic().clipAngle(90)
    if (!gradient) {
        const cx = width * 0.75
        const cy = height * 0.25
        const cr = Math.min(width, height) / 2
        gradient = context.createRadialGradient(cx, cy, 0, cx, cy, cr)
        gradient.addColorStop(0.05, "#ffd")
        gradient.addColorStop(1.00, "#ba9")
    }
    projection.rotate([0, -45])
    const sphere = { type: "Sphere" }
    const graticule = d3.geoGraticule()()

    context.beginPath()
    path(sphere)
    context.fillStyle = gradient
    context.fill()
    context.beginPath()

    path(graticule)
    context.strokeStyle = "#123"
    context.globalAlpha = 0.5
    context.stroke()
    context.beginPath()

    path(sphere)
    context.lineWidth = 2
    context.stroke()
    return gradient
}
```
# {title}
## wip