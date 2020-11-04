import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgCross(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" {...props}>
      <Path
        fill="#333D47"
        d="M19.493 17.046a1.726 1.726 0 010 2.446 1.729 1.729 0 01-2.448 0L10 12.447l-7.045 7.045A1.729 1.729 0 010 18.27c0-.46.182-.9.507-1.223L7.552 10 .507 2.956A1.731 1.731 0 012.955.506L10 7.551 17.045.506a1.731 1.731 0 112.448 2.45l-7.045 7.045 7.045 7.045z"
      />
    </Svg>
  )
}

export default SvgCross