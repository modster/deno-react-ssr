import * as Plot from "@observablehq/plot"
// import { useStoreInContext, StoreProvider } from "./ContextStore.tsx"
import * as d3 from "d3"
import { useEffect, useRef, useState } from "react"



function CandleStick() {
    const containerRef = useRef()
    const [data, setData] = useState()

    useEffect(() => {
        d3.csv("./aapl.csv", d3.autoType).then(setData)
    }, [])

    useEffect(() => {
        if (data === undefined) return
        const plot = Plot.frame().plot({
            x: { domain: [new Date("2014-01-01"), new Date("2014-06-01")] },
            y: { domain: [68, 92], grid: true },
            color: { domain: [-1, 0, 1], range: ["red", "black", "green"] },
            marks: [
                Plot.bollingerY(data, { x: "Date", y: "Close", stroke: "none", clip: true }),
                Plot.ruleX(data, { x: "Date", y1: "Low", y2: "High", strokeWidth: 1, clip: true }),
                Plot.ruleX(data, { x: "Date", y1: "Open", y2: "Close", strokeWidth: 3, stroke: (d) => Math.sign(d.Close - d.Open), clip: true })
            ]
        })

        containerRef.current.append(plot)
        return () => plot.remove()
    }, [data])

    return <div ref={containerRef} />
}

export default function CandleStickChart() {
    return (
        <CandleStick />
    )
}

