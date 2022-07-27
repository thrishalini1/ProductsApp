// import { Platform } from 'react-native'; 
// import colors from './colors';

// export default {
//     text: {
//         color: colors.dark,
//         fontSize: 18,
//         fontFamily: Platform.OS === "android" ? "Roberto" : "Avenir",
//     },
// }


// 2nd
import { Platform } from 'react-native'; 
import colors from './colors';

export default {
    // colors: colors,
    colors,
    text: {
        color: colors.dark,
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roberto" : "Avenir",
    },
}