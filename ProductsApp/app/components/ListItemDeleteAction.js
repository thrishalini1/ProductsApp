// import React from 'react';
// import { View, StyleSheet } from 'react-native';

// import colors from '../config/colors';

// function ListItemDeleteAction(props) {
//     return (
//         <View style={styles.container}></View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.danger,
//         width: 70.
//     }       
// })

// export default ListItemDeleteAction;


// // 2nd
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import {MaterialCommunityIcons} from '@expo/vector-icons';

// import colors from '../config/colors';

// function ListItemDeleteAction(props) {
//     return (
//         <View style={styles.container}>
//             <MaterialCommunityIcons
//             name="trash-can"
//             size={35}
//             color={colors.white}
//          />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.danger,
//         width: 70,
//         justifyContent: "center",
//         alignItems: "center",
//     },      
// })

// export default ListItemDeleteAction;

// 3rd
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons
            name="trash-can"
            size={35}
            color={colors.white}
         />
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        justifyContent: "center",
        alignItems: "center",
    },      
})

export default ListItemDeleteAction;