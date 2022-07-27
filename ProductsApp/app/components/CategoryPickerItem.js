// import React from "react";

// function CategoryPickerItem(props) {
//   return null;
// }

// export default CategoryPickerItem;


// 2nd
// import React from "react";
// import { View, StyleSheet, TouchableOpacity } from "react-native";

// import Icon from "./Icon";
// import AppText from "./AppText";

// function CategoryPickerItem({ item, onPress }) {
//   return (
//     <View style={styles.container}>
//       <Icon
//         backgroundColor={item.backgroundColor}
//         name={item.icon}
//         size={80}
//       />
//     <AppText>{item.label}</AppText>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {

//   }
// });

// export default CategoryPickerItem;


// 3rd
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Icon from "./Icon";
import AppText from "./AppText";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      />
    <AppText style={styles.label}>{item.label}</AppText>
  </View>
  );
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 30,
      paddingVertical: 15,
      alignItems: "center",
      width: "33%",
    },
    label: {
      marginTop: 5,
      textAlign: "center",
    },
  });
  
  export default CategoryPickerItem;



// Final
// import React from "react";
// import { View, StyleSheet, TouchableOpacity } from "react-native";

// import Icon from "./Icon";
// import Text from "./Text";

// function CategoryPickerItem({ item, onPress }) {
//   return (
    // <View style={styles.container}>
    //   <TouchableOpacity onPress={onPress}>
    //     <Icon
    //       backgroundColor={item.backgroundColor}
    //       name={item.icon}
    //       size={80}
    //     />
    //   </TouchableOpacity>
    //   <Text style={styles.label}>{item.label}</Text>
    // </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingHorizontal: 30,
//     paddingVertical: 15,
//     alignItems: "center",
//     width: "33%",
//   },
//   label: {
//     marginTop: 5,
//     textAlign: "center",
//   },
// });

// export default CategoryPickerItem;
