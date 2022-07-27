// import React from 'react';
// import { Image } from 'react-native';

// function ViewImageScreen(props) {
//     return (
//         <Image source={require("../assets/chair.jpg")} />
//     );
// }

// export default ViewImageScreen;

// 2nd
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';

// function ViewImageScreen(props) {
//     return (
//         <Image style={styles.image} source={require("../assets/chair.jpg")} /> 
//     );
// }

// const styles = StyleSheet.create({
//     image: {
//         width: "100%",
//         height: "100%",
//     },
// })

// export default ViewImageScreen;

// // 3RD
// import React from 'react';
// import { Image, StyleSheet } from 'react-native';

// function ViewImageScreen(props) {
//     return (
//         <Image 
//             resizeMode='contain'
//             style={styles.image} 
//             source={require("../assets/chair.jpg")} 
//         /> 
//     );
// }

// const styles = StyleSheet.create({
//     image: {
//         width: "100%",
//         height: "100%",
//     },
// })

// export default ViewImageScreen;

// // 4th
// import React from 'react';
// import { Image, StyleSheet, View } from 'react-native';

// function ViewImageScreen(props) {
//     return (
//         <View style={styles.container}>
//         <Image 
//             resizeMode="contain"
//             style={styles.image} 
//             source={require("../assets/chair.jpg")} /> 
//         </View>
//      );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: "#000",
//         flex: 1,
//     },
//     image: {
//         width: "100%",
//         height: "100%",
//     },
// });

// export default ViewImageScreen;

// // 5TH
// import React from 'react';
// import { Image, StyleSheet, View } from 'react-native';

// function ViewImageScreen(props) {
//     return (
//         <View style={styles.container}>
//         <View style={styles.closeIcon}></View>
//         <View style={styles.deleteIcon}></View>     
//         <Image 
//             resizeMode="contain"
//             style={styles.image} 
//             source={require("../assets/chair.jpg")} /> 
//         </View>
//      );
// }

// const styles = StyleSheet.create({
//     closeIcon: {
//         width: 50,
//         height: 50,
//         backgroundColor: "#fc5c65",
//         position: "absolute",
//         top: 40,
//         left: 30,
//     },
//     container: {
//         backgroundColor: "#000",
//         flex: 1,
//     },
//     deleteIcon: {
//         width: 50,
//         height: 50,
//         backgroundColor: "#4ecdc4",
//         position: "absolute",
//         top: 40,
//         right: 30,
//     },
//     image: {   
//         width: "100%",
//         height: "100%",
//     },
// });

// export default ViewImageScreen;

// // 6TH
// import React from 'react';
// import { Image, StyleSheet, View } from 'react-native';

// function ViewImageScreen(props) {
//     return (
//         <View style={styles.container}>
//         <View style={styles.closeIcon}></View>
//         <View style={styles.deleteIcon}></View>     
//         <Image 
//             resizeMode="contain"
//             style={styles.image} 
//             source={require("../assets/chair.jpg")} /> 
//         </View>
//      );
// }

// const styles = StyleSheet.create({
//     closeIcon: {
//         width: 50,
//         height: 50,
//         backgroundColor: "#fc5c65",
//         position: "absolute",
//         top: 40,
//         left: 30,
//     },
//     container: {
//         backgroundColor: "#000",
//         flex: 1,
//     },
//     deleteIcon: {
//         width: 50,
//         height: 50,
//         backgroundColor: "#4ecdc4",
//         position: "absolute",
//         top: 40,
//         right: 30,
//     },
//     image: {   
//         width: "100%",
//         height: "100%",
//     },
// });

// export default ViewImageScreen;

// 7TH
// import React from 'react';
// import { Image, StyleSheet, View } from 'react-native';

// import colors from "../config/colors";

// function ViewImageScreen(props) {
//     return (
//         <View style={styles.container}>
//         <View style={styles.closeIcon}></View>
//         <View style={styles.deleteIcon}></View>     
//         <Image 
//             resizeMode="contain"
//             style={styles.image} 
//             source={require("../assets/chair.jpg")} /> 
//         </View>
//      );
// }

// const styles = StyleSheet.create({
//     closeIcon: {
//         width: 50,
//         height: 50,
//         backgroundColor: colors.primary,
//         position: "absolute",
//         top: 40,
//         left: 30,
//     },
//     container: {
//         backgroundColor: colors.black,
//         flex: 1,
//     },
//     deleteIcon: {
//         width: 50,
//         height: 50,
//         backgroundColor: colors.secondary,
//         position: "absolute",
//         top: 40,
//         right: 30,
//     },
//     image: {   
//         width: "100%",
//         height: "100%",
//     },
// });

// export default ViewImageScreen;


// 8TH
import React from 'react';
import { Image, StyleSheet, View, } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'

import colors from "../config/colors";

function ViewImageScreen(props) {
    return (
       <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={30} />
        </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>
        <Image 
            resizeMode="contain"
            style={styles.image} 
            source={require("../assets/chair.jpg")} /> 
       </View>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: colors.black,
        flex: 1,
      },
      deleteIcon: {
        // width: 50,
        // height: 50,
        // backgroundColor: colors.secondary,
        position: "absolute",
        top: 40, 
        right: 30,
      },
    image: {
        width: "100%",
        height: "100%",
      },
});

export default ViewImageScreen;