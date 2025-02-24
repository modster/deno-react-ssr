import { ComposableMap } from "react-simple-maps"

// Composable map props
// Name	Type	Default
// width	Number	800
// height	Number	400
// projection	String | Function	geoEqualEarth
// projectionConfig	Object	{}

<ComposableMap
    projection="geoAzimuthalEqualArea"
    projectionConfig={{
        rotate: [-10.0, -53.0, 0],
        scale: 1200,
    }}
>
    <ZoomableGroup center={[0, 3]}>...</ZoomableGroup>
</ComposableMap>
