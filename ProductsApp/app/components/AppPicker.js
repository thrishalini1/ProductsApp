// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import defaultStyles from '../config/styles';
// import AppText from './AppText';

// function AppPicker({ icon, placeholder,  ...otherProps }) {
//     return (
//         <View style={styles.container}>
//            { icon && <MaterialCommunityIcons name={icon} 
//                 size={20} 
//                 color={defaultStyles.colors.medium} 
//                 style={styles.icon}   /> 
//             }
//           <AppText >{placeholder}</AppText>   
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: defaultStyles.colors.light,
//         borderRadius: 25,
//         flexDirection: "row",
//         width: '100%',
//         padding: 15,
//         marginVertical: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },   
// })
// export default AppPicker;


// 2nd
// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import defaultStyles from '../config/styles';
// import AppText from './AppText';

// function AppPicker({ icon, placeholder,  ...otherProps }) {
//     return (
//         <View style={styles.container}>
//            { icon && <MaterialCommunityIcons name={icon} 
//                 size={20} 
//                 color={defaultStyles.colors.medium} 
//                 style={styles.icon}   /> 
//             }
//           <AppText style={styles.text}>{placeholder}</AppText>
//           <MaterialCommunityIcons 
//                 name="chevron-down" 
//                 size={20} 
//                 color={defaultStyles.colors.medium} 

//             />    
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: defaultStyles.colors.light,
//         borderRadius: 25,
//         flexDirection: "row",
//         width: '100%',
//         padding: 15,
//         marginVertical: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
//     text: {
//         flex: 1,
//     },

// })
// export default AppPicker;



// 3rd
// import React, {useState} from 'react';
// import { View, TouchableWithoutFeedback, StyleSheet, Modal, Button } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import defaultStyles from '../config/styles';
// import AppText from './AppText';
// import Screen from './Screen'

// function AppPicker({ icon, placeholder,  ...otherProps }) {
//     const [modalVisible, setMoalVisible] = useState(false);

//     return (
//     // <React.Fragment>
//     <>
//         <TouchableWithoutFeedback onPress={ () => setMoalVisible(true)}>
//         <View style={styles.container}>
//            { icon && <MaterialCommunityIcons name={icon} 
//                 size={20} 
//                 color={defaultStyles.colors.medium} 
//                 style={styles.icon}   /> 
//             }
//           <AppText style={styles.text}>{placeholder}</AppText>
//           <MaterialCommunityIcons 
//                 name="chevron-down" 
//                 size={20} 
//                 color={defaultStyles.colors.medium} 

//             />    
//         </View>
//         </TouchableWithoutFeedback>
//         <Modal visible={modalVisible} animationType="slide">
//             <Screen>
//                 <Button title="Close" onPress={ () => setMoalVisible(false)} />
//             </Screen>
//         </Modal>
//     {/* </React.Fragment> */}
//     </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: defaultStyles.colors.light,
//         borderRadius: 25,
//         flexDirection: "row",
//         width: '100%',
//         padding: 15,
//         marginVertical: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
//     text: {
//         flex: 1,
//     },

// })
// export default AppPicker;


// 4th
// import React, {useState} from 'react';
// import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';

// import defaultStyles from '../config/styles';
// import AppText from './AppText';
// import Screen from './Screen'
// import PickerItem from './PickerItem';

// function AppPicker({ icon, items, placeholder,  ...otherProps }) {
//     const [modalVisible, setModalVisible] = useState(false);

//     return (
//     <>
//         <TouchableWithoutFeedback onPress={ () => setModalVisible(true)}>
//         <View style={styles.container}>
//            { icon && <MaterialCommunityIcons name={icon} 
//                 size={20} 
//                 color={defaultStyles.colors.medium} 
//                 style={styles.icon}   /> 
//             }
//           <AppText style={styles.text}>{placeholder}</AppText>
//           <MaterialCommunityIcons 
//                 name="chevron-down" 
//                 size={20} 
//                 color={defaultStyles.colors.medium}      
//             />    
//         </View>
//         </TouchableWithoutFeedback>
//         <Modal visible={modalVisible} animationType="slide">
//         <Screen>
//             <Button title="Close" onPress={ () => setModalVisible(false)} />
//                 <FlatList 
//                     data={items}
//                     keyExtractor={item => item.value.toString()}
//                     renderItem={({ item }) => 
//                         <PickerItem 
//                         label={item.label}
//                         onPress={() => console.log(item)} 
//                     /> 
//                     }
//                 />
//          </Screen>
//         </Modal>
//     </>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: defaultStyles.colors.light,
//         borderRadius: 25,
//         flexDirection: "row",
//         width: '100%',
//         padding: 15,
//         marginVertical: 10,
//     },
//     icon: {
//         marginRight: 10,
//     },
//     text: {
//         flex: 1,
//     },

// })
// export default AppPicker;


// 5th
// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Modal,
//   Button,
//   FlatList,
// } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./AppText";
// import Screen from "./Screen";
// import defaultStyles from "../config/styles";
// import PickerItem from "./PickerItem";

// function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <>
//       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
//         <View style={styles.container}>
//           {icon && (
//             <MaterialCommunityIcons
//               name={icon}
//               size={20}
//               color={defaultStyles.colors.medium}
//               style={styles.icon}
//             />
//           )}
//           <AppText style={styles.text}>
//             {selectedItem ? selectedItem.label : placeholder}
//           </AppText>
//           <MaterialCommunityIcons
//             name="chevron-down"
//             size={20}
//             color={defaultStyles.colors.medium}
//           />
//         </View>
//       </TouchableWithoutFeedback>
//       <Modal visible={modalVisible} animationType="slide">
//         <Screen>
//           <Button title="Close" onPress={() => setModalVisible(false)} />
//           <FlatList
//             data={items}
//             keyExtractor={(item) => item.value.toString()}
//             renderItem={({ item }) => (
//               <PickerItem
//                 label={item.label}
//                 onPress={() => {
//                   setModalVisible(false);
//                   onSelectItem(item);
//                 }}
//               />
//             )}
//           />
//         </Screen>
//       </Modal>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: defaultStyles.colors.light,
//     borderRadius: 25,
//     flexDirection: "row",
//     width: "100%",
//     padding: 15,
//     marginVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   text: {
//     flex: 1,
//   },
// });

// export default AppPicker;


// 6th
// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Modal,
//   Button,
//   FlatList,
// } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./AppText";
// import Screen from "./Screen";
// import defaultStyles from "../config/styles";
// import PickerItem from "./PickerItem";

// function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem }) {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <>
//       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
//         <View style={styles.container}>
//           {icon && (
//             <MaterialCommunityIcons
//               name={icon}
//               size={20}
//               color={defaultStyles.colors.medium}
//               style={styles.icon}
//             />
//           )}
//           {selectedItem ? (
//             <AppText style={styles.text}>{selectedItem.label}</AppText>
//           ) : (
//             <AppText style={styles.placeholder}>{placeholder}</AppText>
//           )}

//           <MaterialCommunityIcons
//             name="chevron-down"
//             size={20}
//             color={defaultStyles.colors.medium}
//           />
//         </View>
//       </TouchableWithoutFeedback>
//       <Modal visible={modalVisible} animationType="slide">
//         <Screen>
//           <Button title="Close" onPress={() => setModalVisible(false)} />
//           <FlatList
//             data={items}
//             keyExtractor={(item) => item.value.toString()}
//             renderItem={({ item }) => (
//               <PickerItem
//                 label={item.label}
//                 onPress={() => {
//                   setModalVisible(false);
//                   onSelectItem(item);
//                 }}
//               />
//             )}
//           />
//         </Screen>
//       </Modal>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: defaultStyles.colors.light,
//     borderRadius: 25,
//     flexDirection: "row",
//     width: "100%",
//     padding: 15,
//     marginVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   placeholder: {
//     color: defaultStyles.colors.medium,
//     flex: 1,
//   },
//   text: {
//     flex: 1,
//   },
// });

// export default AppPicker;


// 7th
// import React, { useState } from "react";
// import {
//   View,
//   StyleSheet,
//   TouchableWithoutFeedback,
//   Modal,
//   Button,
//   FlatList,
// } from "react-native";
// import { MaterialCommunityIcons } from "@expo/vector-icons";

// import AppText from "./AppText";
// import Screen from "./Screen";
// import defaultStyles from "../config/styles";
// import PickerItem from "./PickerItem";

// function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem, width="100%" }) {
//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <>
//       <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
//         <View style={[styles.container, {width}]}>
//           {icon && (
//             <MaterialCommunityIcons
//               name={icon}
//               size={20}
//               color={defaultStyles.colors.medium}
//               style={styles.icon}
//             />
//           )}
//           {selectedItem ? (
//             <AppText style={styles.text}>{selectedItem.label}</AppText>
//           ) : (
//             <AppText style={styles.placeholder}>{placeholder}</AppText>
//           )}

//           <MaterialCommunityIcons
//             name="chevron-down"
//             size={20}
//             color={defaultStyles.colors.medium}
//           />
//         </View>
//       </TouchableWithoutFeedback>
//       <Modal visible={modalVisible} animationType="slide">
//         <Screen>
//           <Button title="Close" onPress={() => setModalVisible(false)} />
//           <FlatList
//             data={items}
//             keyExtractor={(item) => item.value.toString()}
//             renderItem={({ item }) => (
//               <PickerItem
//                 label={item.label}
//                 onPress={() => {
//                   setModalVisible(false);
//                   onSelectItem(item);
//                 }}
//               />
//             )}
//           />
//         </Screen>
//       </Modal>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: defaultStyles.colors.light,
//     borderRadius: 25,
//     flexDirection: "row",
//     // width: "100%",
//     padding: 15,
//     marginVertical: 10,
//   },
//   icon: {
//     marginRight: 10,
//   },
//   placeholder: {
//     color: defaultStyles.colors.medium,
//     flex: 1,
//   },
//   text: {
//     flex: 1,
//   },
// });

// export default AppPicker;


// 8th
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText";
import Screen from "./Screen";
import defaultStyles from "../config/styles";
import PickerItem from "./PickerItem";

function AppPicker({ 
      icon, 
      items, 
      numberOfColumns = 1, 
      onSelectItem, 
      PickerItemComponent = PickerItem, 
      placeholder, 
      selectedItem, 
      width = "100%" 
    }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          {selectedItem ? (
            <AppText style={styles.text}>{selectedItem.label}</AppText>
          ) : (
            <AppText style={styles.placeholder}>{placeholder}</AppText>
          )}

          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            numColumns={numberOfColumns}
            renderItem={({ item }) => (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    // width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: defaultStyles.colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;

