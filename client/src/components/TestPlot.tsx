import * as Plot from "@observablehq/plot"

import { useEffect, useStore } from 'react'
import { usePlotStore } from '../store/PlotStore.tsx'





export default function TestPlot({ children }) {


    return Plot.plot({
        marks: [
            Plot.barY([1, 2, 3, 2, 1])
        ]
    })
}