import * as Plot from "@observablehq/plot"
import * as d3 from "d3"

export const azimuthalEquidistant = Plot.plot({
    projection: {
        type: "azimuthal-equidistant",
        rotate: [-9, -34],
        domain: circle,
        inset: 10
    },
    marks: [
        Plot.graticule(),
        Plot.geo(land, { fill: "currentColor", fillOpacity: 0.3 }),
        Plot.geo(circle, { stroke: "red", strokeWidth: 2 }),
        Plot.frame()
    ]
})


