// import React from 'react';
// import { Text } from 'react-native';

// function AppText(props) {
//     return (
//         <Text>{props.children}</Text>
//     );
// }

// export default AppText;



// // 2nd
// import React from 'react';
// import { Text } from 'react-native';

// function AppText({children}) {
//     return (
//         <Text>{children}</Text>
//     );
// }

// export default AppText;


// //3rd
// import React from 'react';
// import { Text, StyleSheet, Platform } from 'react-native';

// function AppText({children}) {
//     return (
//         <Text style={styles.text}>{children}</Text>
//     );
// }

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 18,
//         fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
//     }   
// })

// export default AppText;


// // 4TH
// import React from 'react';
// import { Text, StyleSheet, Platform } from 'react-native';

// function AppText({children}) {
//     return (
//         <Text style={styles.text}>{children}</Text>
//     );
// }

// const styles = StyleSheet.create({
//     text: {
//         // spread Platform object and connect with color
//         // SELECT METHOD RETURNS AN OBJECT, WE SPREAD THAT
//         // OBJECT TO COPY ITS PROPERTIES INTO THIS OBJECT.
//         color: "tomato",
//         ...Platform.select({
//             ios: {
//                 fontSize: 20,
//                 fontFamily: "Avenir"
//             },
//             android: {
//                 fontSize: 18,
//                 fontFamily: "Roboto"
//             },
//         }),
//     },  
// });

// export default AppText;


// 6TH
// import React from 'react';
// import { Text, StyleSheet, Platform } from 'react-native';

// function AppText({children, style}) {
//     return (
//         <Text style={[styles.text, style]}>{children}</Text>
//     );
// }

// const styles = StyleSheet.create({
//     // text: {
//     //     // spread Platform object and connect with color
//     //     // SELECT METHOD RETURNS AN OBJECT, WE SPREAD THAT
//     //     // OBJECT TO COPY ITS PROPERTIES INTO THIS OBJECT.
//     //     color: "tomato",
//     //     ...Platform.select({
//     //         ios: {
//     //             fontSize: 20,
//     //             fontFamily: "Avenir"
//     //         },
//     //         android: {
//     //             fontSize: 18,
//     //             fontFamily: "Roboto"
//     //         },
//     //     }),
//     // },  
//         text: {
//         fontSize: 18,
//         fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
//     }  
// });

// export default AppText;


// 7th
// import React from 'react';
// import { Text } from 'react-native';

// import defaultStyles from '../config/styles';

// function AppText({children, style}) {
//     return (
//         // <Text style={[styles.text, style]}>{children}</Text>
//         <Text style={[defaultStyles.text, style]}>{children}</Text>
//     );
// }
// export default AppText; 


// 8th
import React from 'react';
import { Text } from 'react-native';

import defaultStyles from '../config/styles';

function AppText({children, style, ...otherProps}) {
    return (
        <Text style={[defaultStyles.text, style]} {...otherProps}>
            {children}
        </Text>
    );
}
export default AppText; 