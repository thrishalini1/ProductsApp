// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import colors from '../config/colors'

// function AppButton({title}) {
//     return (
//       <View style={styles.button}>
//           <Text style={styles.text}>{title}</Text>
//       </View>
//     );
// }
// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: colors.primary,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 15,
//         width: '100%'
//     },
//     text: {
//         // color: '#fff',
//         color: colors.white,
//         fontSize: 18,
//         textTransform: 'uppercase',
//         fontWeight: 'bold',
//     }
// })
// export default AppButton;


// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// import colors from '../config/colors'

// function AppButton({title}) {
//     return (
//         <TouchableOpacity>
//         <View style={styles.button}>
//             <Text style={styles.text}>{title}</Text>
//         </View>      
//        </TouchableOpacity>
//     );
// }
// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: colors.primary,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 15,
//         width: '100%'
//     },
//     text: {
//         color: colors.white,
//         fontSize: 18,
//         textTransform: 'uppercase',
//         fontWeight: 'bold',
//     }
// })
// export default AppButton;



// import React from 'react';
// import { Text, StyleSheet, TouchableOpacity } from 'react-native';

// import colors from '../config/colors'

// function AppButton({title, onPress}) {
//     return (
//         <TouchableOpacity style={styles.button} onPress={onPress}>
//             <Text style={styles.text}>{title}</Text>
//        </TouchableOpacity>
//     );
// }
// const styles = StyleSheet.create({
//     button: {
//         backgroundColor: colors.primary,
//         borderRadius: 25,
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 15,
//         width: '100%'
//     },
//     text: {
//         color: colors.white,
//         fontSize: 18,
//         textTransform: 'uppercase',
//         fontWeight: 'bold',
//     }
// })
// export default AppButton;


import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

import colors from '../config/colors'

function AppButton({title, onPress, color = "primary"}) {
    return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color] }]}
        onPress={onPress}>     
     <Text style={styles.text}>{title}</Text>
     </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})
export default AppButton;