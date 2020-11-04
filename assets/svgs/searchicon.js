import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgSearch(props) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" {...props}>
      <Path
        fill="#B5BDD9"
        d="M10.01 10.01a4.536 4.536 0 10-6.417-6.415 4.536 4.536 0 006.417 6.415zm.738 2.336A6.805 6.805 0 011.992 1.992a6.804 6.804 0 0110.354 8.756l.07.064 3.206 3.207a1.133 1.133 0 11-1.603 1.603l-3.207-3.207a1.282 1.282 0 01-.064-.069z"
      />
    </Svg>
  )
}

export default SvgSearch;