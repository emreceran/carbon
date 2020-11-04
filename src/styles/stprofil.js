import {StyleSheet} from 'react-native'
import { moderateScale, scale, verticalScale } from '../../scale'

const styles = StyleSheet.create({

    container: {
      flex: 1,
        
      backgroundColor: "#fafbff",
      paddingTop: Platform.OS === 'android' ? 25 : 0,
      justifyContent: "center",
      alignItems: "center",
      },
})

export default styles;