import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Svgback(props) {
  return (
    <Svg width={24} height={20} viewBox="0 0 24 20" {...props}>
      <Path
        fill="#333D47"
        d="M11.227 17.147a1.669 1.669 0 01-.006 2.366 1.684 1.684 0 01-2.375-.006L.49 11.172a1.665 1.665 0 010-2.36L8.85.475a1.684 1.684 0 012.357.012c.65.645.66 1.69.02 2.353L5.728 8.32h16.593c.927 0 1.678.749 1.678 1.672 0 .923-.751 1.671-1.678 1.671H5.73l5.498 5.483z"
      />
    </Svg>
  )
}

export default Svgback