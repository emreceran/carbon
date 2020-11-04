import * as React from "react"
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  G,
  Path,
  Ellipse,
} from "react-native-svg"

function Svgconfetti(props) {
  return (
    <Svg width={78} height={78} viewBox="0 0 78 78" {...props}>
      <Defs>
        <LinearGradient
          id="prefix__a"
          x1="11.788%"
          x2="92.829%"
          y1="10.631%"
          y2="96.579%"
        >
          <Stop offset="0%" stopColor="#5F80EE" />
          <Stop offset="100%" stopColor="#4F60E5" />
        </LinearGradient>
        <LinearGradient
          id="prefix__b"
          x1="12.188%"
          x2="92.829%"
          y1="11.07%"
          y2="96.563%"
        >
          <Stop offset="0%" stopColor="#4363CC" />
          <Stop offset="100%" stopColor="#3545C3" />
        </LinearGradient>
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Path
          fill="url(#prefix__a)"
          d="M48.613 57.72L4.915 77.126a4.89 4.89 0 01-3.467-1.422A4.91 4.91 0 010 72.24l19.503-43.462 29.11 28.943zm-8.288-20.71c8.085 8.05 12.127 17.078 9.025 20.167-3.102 3.089-12.185-.932-20.279-8.98-8.094-8.047-12.127-17.076-9.025-20.165 3.102-3.089 12.185.929 20.28 8.977v.001z"
        />
        <Path
          fill="#8CA6FF"
          d="M11.699 74.111c1.696-.687 8.449-3.677 8.837-3.914-7.94-5.845-10.702-12.454-12.466-15.93-.35.804-3.189 7.239-4.71 10.46.969 2.252 4.965 7.596 8.339 9.384zm17.006-7.553c1.696-.686 8.71-3.794 9.108-4.03-10.915-8.595-18.249-19.662-18.588-33.184-.349.802-5.46 12.387-6.983 15.609 2.54 7.6 11.315 18.273 16.463 21.605z"
        />
        <Path
          fill="url(#prefix__b)"
          d="M40.325 37.009c8.085 8.048 12.127 17.077 9.025 20.166-3.102 3.089-12.185-.932-20.279-8.98-8.094-8.047-12.127-17.076-9.025-20.165 3.102-3.089 12.185.93 20.28 8.979z"
        />
        <Path
          fill="#000"
          d="M47.825 58.12L4.81 77.218a4.901 4.901 0 01-3.335-1.298c8.056-8.079 38.968-38.239 39.24-38.459.586.477 12.944 13.172 8.923 19.477l-1.13.875-.683.307z"
          opacity={0.05}
        />
        <Path
          fill="#C4D3D9"
          d="M34.17 23.004c11.826-10.662-.708-11.907-1.212-22.916 0 0 .813-.088 2.603-.088.731 9.747 13.616 12.884.347 24.922"
        />
        <Path
          fill="#383F47"
          d="M74.756 45.185c-9.038-12.303-11.882-1.01-22.849-2.08 0 0 .018-.756.248-2.394 9.746.688 14.51-10.664 24.724 3.15"
        />
        <Path
          fill="#F2F1F3"
          d="M51.671 29.223c13.314 5.142 6.704-12.56 24.302-23.36 0 0 .471.67 1.34 2.235-16.97 10.117-9.515 29.345-26.476 23.576"
        />
        <Ellipse cx={28.31} cy={16.21} fill="#F5FCFF" rx={2.409} ry={2.414} />
        <Ellipse cx={44.305} cy={4.128} fill="#5F80EE" rx={2.409} ry={2.414} />
        <Ellipse cx={47.799} cy={20.974} fill="#333D47" rx={2.394} ry={2.399} />
        <Path
          fill="#FFF"
          d="M60.837 4.468l-1.968 3.926 3.024 3.175a.37.37 0 01.068.427.401.401 0 01-.397.202l-4.362-.623-2.123 3.842a.375.375 0 01-.698-.116l-.737-4.311-4.333-.803a.368.368 0 01-.3-.311.36.36 0 01.194-.389l3.906-2.04-.552-4.338a.372.372 0 01.203-.388.387.387 0 01.436.067l3.15 3.05 3.985-1.88a.378.378 0 01.504.51zm1.202 45.542l.882 2.941a.252.252 0 01-.097.287.273.273 0 01-.31 0l-2.53-1.768-2.56 1.736a.255.255 0 01-.3 0 .244.244 0 01-.097-.292l.912-2.932-2.453-1.872a.262.262 0 01-.097-.291.268.268 0 01.252-.181l3.102-.043 1.028-2.893a.274.274 0 01.252-.175c.113 0 .214.072.252.179l.998 2.906 3.102.081c.11.003.208.075.242.181.041.11 0 .232-.097.295l-2.481 1.84z"
        />
        <Ellipse cx={71.161} cy={30.84} fill="#FFF" rx={2.394} ry={2.399} />
        <Ellipse cx={72.445} cy={57.553} fill="#5F80EE" rx={2.409} ry={2.414} />
      </G>
    </Svg>
  )
}

export default Svgconfetti