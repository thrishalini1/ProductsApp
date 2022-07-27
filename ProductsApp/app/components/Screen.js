// import React from 'react';
// import Constants from 'expo-constants';
// import { SafeAreaView, StyleSheet } from 'react-native';

// function Screen({props}) {
//     return (
//         <SafeAreaView style={styles.screen}>
//             {props.children}
//         </SafeAreaView>
//     );
// }
// const styles = StyleSheet.create({
//     screen: {
//         paddingTop: Constants.statusBarHeight
//     }
// })
// export default Screen;


// import React from 'react';
// import Constants from 'expo-constants';
// import { SafeAreaView, StyleSheet } from 'react-native';

// function Screen({children}) {
//     return (
//         <SafeAreaView style={styles.screen}>
//             {children}
//         </SafeAreaView>
//     );
// }
// const styles = StyleSheet.create({
//     screen: {
//         paddingTop: Constants.statusBarHeight
//     }
// })
// export default Screen;

// // 3rd
// import React from 'react';
// import Constants from 'expo-constants';
// import { SafeAreaView, StyleSheet } from 'react-native';

// function Screen({children}) {
//     return (
//         <SafeAreaView style={styles.screen}>
//             {children}
//         </SafeAreaView>
//     );
// }
// const styles = StyleSheet.create({
//     screen: {
//         paddingTop: Constants.statusBarHeight,
//         // backgroundColor: 'yellow'
//         flex: 1
//     }
// })
// export default Screen;


// // 4th
// import React from 'react';
// import Constants from 'expo-constants';
// import { SafeAreaView, StyleSheet } from 'react-native';

// function Screen({children, style}) {
//     return (
//         <SafeAreaView style={[styles.screen, style]}>
//             {children}
//         </SafeAreaView>
//     );
// }
// const styles = StyleSheet.create({
//     screen: {
//         paddingTop: Constants.statusBarHeight,
//         flex: 1
//     }
// })
// export default Screen;

// 5th
// import React from "react";
// import Constants from "expo-constants";
// import { StyleSheet, SafeAreaView, View } from "react-native";

// function Screen({ children, style }) {
//   return (
//     <SafeAreaView style={[styles.screen, style]}>
//       <View style={style}>{children}</View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     paddingTop: Constants.statusBarHeight,
//     flex: 1,
//   },
// });

// export default Screen;

// 6th
import React from "react";
import Constants from "expo-constants";
import { StyleSheet, SafeAreaView, View } from "react-native";

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});

export default Screen;
