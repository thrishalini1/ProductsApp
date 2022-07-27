// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// 2nd
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>SAI RAM!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// 3rd
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>SAI RAM!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//   },
// });


// 4th
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>SAI RAM!</Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//   },
// });

// 5TH
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native. Really really long text. 
//           Now i want to make this even longer and 
//           see what happens
//       </Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//   },
// });

// // 6th
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={1}>Hello React Native. Really really long text. 
//           Now i want to make this even longer and 
//           see what happens
//       </Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//   },
// });

// // 7th
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={1}  onPress={() => console.log("Text clicked")}>
//           Hello React Native. Really really long text. 
//           Now i want to make this even longer and 
//           see what happens
//       </Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//   },
// });


// // 8th
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

// export default function App() {

//   const handlePress = () => console.log("Text Pressed")

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text numberOfLines={1}  onPress={handlePress}>
//           Hello React Native. Really really long text. 
//           Now i want to make this even longer and 
//           see what happens
//       </Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'dodgerblue',
//   },
// })

// // 9th
// import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>
//       <Image source = {require('./assets/icon.png')} />    
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// 10th
// import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

// export default function App() {
//   console.log(require("./assets/icon.png")); // 2 is the reference to our image
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>
//       <Image source = {require('./assets/icon.png')} />    
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// 11th (Network images)
// import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

// export default function App() {
//   console.log(require("./assets/splash.png"));
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>    
//       <Image 
//         source = {{ 
//          width: 200,
//          height: 300, 
//          uri: "https://picsum.photos/200/300"}} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// // 12TH
// import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

// export default function App() {
//   console.log(require("./assets/splash.png"));
//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>    
//       <Image 
//         // blurRadius={10}
//         fadeDuration={1000} //it will only work for android 
//         source = {{ 
//          width: 200,
//          height: 300, 
//          uri: "https://picsum.photos/200/300"}} />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// // 13TH
// import { StyleSheet, Text, TouchableWithoutFeedback, View, Image, SafeAreaView } from "react-native";

// export default function App() {

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>
//       <TouchableWithoutFeedback onPress={ () => console.log("Image Tapped") }>
//       <Image 
//         source = {{ 
//          width: 200,
//          height: 300, 
//           uri: "https://picsum.photos/200/300"}} 
//         />
//       </TouchableWithoutFeedback>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });


// // 14TH
// import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from "react-native";

// export default function App() {

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>
//       <TouchableOpacity onPress={ () => console.log("Image Tapped") }>
//       <Image 
//         source = {{ 
//          width: 200,
//          height: 300, 
//           uri: "https://picsum.photos/200/300"}} 
//         />
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// 15th
// import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from "react-native";

// export default function App() {

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>
//       <TouchableHighlight onPress={ () => console.log("Image Tapped") }>
//       <Image 
//         source = {{ 
//          width: 200,
//          height: 300, 
//           uri: "https://picsum.photos/200/300"}} 
//         />
//       </TouchableHighlight>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// 16th
// import { StyleSheet, Text, View, Image, SafeAreaView, TouchableHighlight } from "react-native";

// export default function App() {

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>
//       <TouchableHighlight onPress={ () => console.log("Image Tapped") }>
//       <Image 
//         source = {{ 
//          width: 200,
//          height: 300, 
//         uri: "https://picsum.photos/200/300"}} 
//         />
//       </TouchableHighlight>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// 17th
// import { StyleSheet, Text, TouchableNativeFeedback, View, Image, SafeAreaView } from "react-native";

// export default function App() {

//   return (
//     <SafeAreaView style={styles.container}>
//       <Text>Hello React Native</Text>
//       <TouchableNativeFeedback onPress={() => console.log("Image Colored")}>
//         <View style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}>
//         </View>
//       </TouchableNativeFeedback>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// 18th
// import { StyleSheet, SafeAreaView, Button } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Button 
//       color="orange"
//       title="Click Me" 
//       onPress={ () => console.log("Button Pressed") } />
//     </SafeAreaView>
//   );
// } 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// 19th
// import { StyleSheet, SafeAreaView, Button } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Button 
//       color="orange"
//       title="Click Me" 
//       onPress={ () => alert('Button Tapped')} />
//     </SafeAreaView>
//   );
// } 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// // 20TH
// import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Button 
//       color="orange"
//       title="Click Me" 
//       onPress={ () => Alert.alert("My Tiltle", "My Message",
//                 [{ text: "Yes", onPress: () => console.log("Yes")},
//                 {text: "No", onPress: () => console.log("No")},
//                 ])
//             }
//         />
//     </SafeAreaView>
//   );
// } 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// // 21ST
// import { StyleSheet, SafeAreaView, Alert, Button } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Button 
//       color="orange"
//       title="Click Me" 
//       onPress={ () => Alert.prompt("My Tiltle", "My Message", 
//                     text => console.log(text))
//             }
//        />
//     </SafeAreaView>
//   );
// } 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

// // 22ND
// import { StyleSheet, SafeAreaView, Button } from "react-native";

// export default function App() {
//   return (
//     // instead of javascript object , we will pass inline object
//     <SafeAreaView style={{backgroundColor: "orange"}}>
//       <Button 
//       title="Click Me" 
//       onPress={ () => console.log("Button tapped")}/>
//     </SafeAreaView>
//     );
//   }

// // 23rd
// import { StyleSheet, SafeAreaView, Button } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={containerStyle}>
//       <Button 
//       title="Click Me" 
//       onPress={ () => console.log("Button tapped")}/>
//     </SafeAreaView>
//     );
//   }

// const containerStyle = { backgroundColor: "orange"}



// // 24th
// // the object on the right (containerStyle) overrides the 
// // object of the left (styles.container)
// import { StyleSheet, SafeAreaView, Button } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={[styles.container, containerStyle]}>
//       <Button 
//       title="Click Me" 
//       onPress={ () => console.log("Button tapped")}/>
//     </SafeAreaView>
//     );
//   }

// const containerStyle = { backgroundColor: "orange"}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   });

// // 25TH
// // DELETE THE ALIGNITEMS AND JUSTIFY CONTENT, 
// // WE CAN SEE THAT SAFEAREAVIEW ONLY WORKS  WITH IOS
// import { StyleSheet, SafeAreaView, Button } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Button 
//       title="Click Me" 
//       onPress={ () => console.log("Button tapped")}/>
//     </SafeAreaView>
//     );
//   }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//     },
//   });

// // 26th
// // To push down the "click me" in android modbile, 
// // we have to use the platform specific module CALLED Platform
// import { StyleSheet, SafeAreaView, Button, StatusBar, Platform } from "react-native";

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <Button 
//       title="Click Me" 
//       onPress={ () => console.log("Button tapped")}/>
//     </SafeAreaView>
//   );
// } 

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     // paddingTop: Platform.OS === "android" ? 20 : 0,

//     // to find out the top space , we will use the statusbar API
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//   },
// });


// // 27th
// import { StyleSheet, SafeAreaView, View } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View 
//         style={{
//             backgroundColor: "dodgerblue",
//             width: 150,
//             height: 70,
//         }}
//         ></View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   });


// 28TH
// import { StyleSheet, SafeAreaView, View } from 'react-native';

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View 
//         style={{
//             backgroundColor: "dodgerblue",
//             width: "50%",
//             height: 70,
//         }}
//         ></View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: "#fff",
//       alignItems: "center",
//       justifyContent: "center",
//     },
//   });

// 29TH
// import { StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';

// export default function App() {

//     console.log(Dimensions.get("screen"));

//     return (
//         <SafeAreaView style={styles.container}>
//             <View
//                 style={{
//                     backgroundColor: "dodgerblue",
//                     width: "50%",
//                     height: 70,
//                 }}
//             ></View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//         alignItems: "center",
//         justifyContent: "center",
//     },
// });

// // 30th
// import { StyleSheet, SafeAreaView, Dimensions, View } from 'react-native';

// export default function App() {

//     console.log(Dimensions.get("screen"));

//     return (
//         <SafeAreaView style={styles.container}>
//             <View
//                 style={{
//                     backgroundColor: "dodgerblue",
//                     width: "100%",
//                     height: "30%",
//                 }}
//             ></View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
// });

// // 31st
// import { StyleSheet, SafeAreaView, View } from 'react-native';
// import { useDimensions } from '@react-native-community/hooks'

// export default function App() {

//     console.log(useDimensions());

//     return (
//         <SafeAreaView style={styles.container}>
//             <View
//                 style={{
//                     backgroundColor: "dodgerblue",
//                     width: "100%",
//                     height: "30%",
//                 }}
//             ></View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
// });

// // 32ND
// import { StyleSheet, SafeAreaView, View } from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

// export default function App() {

//     console.log(useDeviceOrientation());

//     return (
//         <SafeAreaView style={styles.container}>
//             <View
//                 style={{
//                     backgroundColor: "dodgerblue",
//                     width: "100%",
//                     height: "30%",
//                 }}
//             ></View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
// });


// 33rd
// import { StyleSheet, SafeAreaView, View } from 'react-native';
// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks'

// export default function App() {

//     const { landscape } = useDeviceOrientation();

//     return (
//         <SafeAreaView style={styles.container}>
//             <View
//                 style={{
//                     backgroundColor: "dodgerblue",
//                     width: "100%",
//                     height: landscape ? "100%" : "30%",
//                 }}
//             ></View>
//         </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
// });

// 34TH
// FLEXBOX
// import React from "react";
// import { View } from "react-native";

// export default function App() {
//     return (
//         <View style={ { 
//             backgroundColor: "dodgerblue",
//             // backgroundColor: "#fff",

//             flex: 1,
//              // flex: 0.5,
//         }}></View>
//     );
// }

// 35TH
// import React from "react";
// import { View } from "react-native";

// export default function App() {
//     return (
//         <View style={ { // Parent View, container
//             backgroundColor: "#fff",
//             flex: 1,
//         }}>
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "dodgerblue",
//                 flex: 1,
//             }}
//             />        
//         </View>
//     );
// }

// 36TH
// press shift+option+down (MAC) SHIFT+ALT+DOWN (WINDOWS) arrow to duplicate selected area

// import React from "react";
// import { View } from "react-native";

// export default function App() {
//     return (
//         <View style={ { // Parent View, container
//             backgroundColor: "#fff",
//             flex: 1,
//         }}>
//             <View style={{ // it takes the available space
//                 backgroundColor: "dodgerblue",
//                 // flex: 1,
//                 flex: 2,
//             }}
//             />        
//             <View style={{ // it takes the available space
//                 backgroundColor: "gold",
//                 flex: 1,
//             }}
//             />        
//             <View style={{ // it takes the available space
//                 backgroundColor: "tomato",
//                 flex: 1,
//             }}
//             />        
//         </View>
//     );
// }

// 37TH
// Flexbox works default with portrait mode
// import React from "react";
// import { View } from "react-native";

// export default function App() {
//     return (
//         <View style={ { // Parent View, container
//             backgroundColor: "#fff",
//             flex: 1,
//             // flexDirection: "row",
//             // flexDirection: "row-reverse",
//             // flexDirection: "column-reverse",

//         }}>
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "dodgerblue",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "gold",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "tomato",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//         </View>
//     );
// }


// 38TH
//Flexbox - justify content, alignitems and alignSelf
// import React from "react";
// import { View } from "react-native";

// export default function App() {
//     return (
//         <View style={ { // Parent View, container
//             backgroundColor: "#fff",
//             flex: 1,

//             // flexDirection: "row", // horizontal access
//             // justifyContent: "center" //main(primary access)

//             // flexDirection: "column", // vertical access
//             // justifyContent: "center" //main(primary access)

//             // flexDirection: "row", // HORIZONTAL access
//             // justifyContent: "flex-end" //main(primary access)

//             // flexDirection: "row", // HORIZONTAL access
//             // justifyContent: "flex-start" //main (primary access)

//             // There are three distributed properties
//             // space-around, space-evenly, space-between

//             // flexDirection: "row", 
//             // justifyContent: "space-around" 

//             // flexDirection: "row", 
//             // justifyContent: "space-evenly",

//             // flexDirection: "row", 
//             // justifyContent: "space-between", 

//             flexDirection: "row", // horizontal access
//             justifyContent: "center",//main(primary access) 
//             alignItems: "center" // secondary AXIS (VERTICAL)
//         }}>
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "dodgerblue",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "gold",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "tomato",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//         </View>
//     );
// }


// // 39TH
// // use of "baseline" in alignItems. change the height
// import React from "react";
// import { View } from "react-native";

// export default function App() {
//     return (
//         <View style={ { // Parent View, container
//             backgroundColor: "#fff",
//             flex: 1,

//             flexDirection: "row", // horizontal access
//             justifyContent: "center",//main(primary access)
//             // alignItems: "baseline" // secondary

//             // alignItems: "flex-end" 

//             // alignItems: "flex-start" 

//             // alignItems: "stretch" // to see the output, change the height
//                         // of the views, it stretches the entire default value

//             // alignItems: "center",
//         }}>
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "dodgerblue",

//                 width: 100,
//                 height: 300, 

//                 // comment out when you use alignItems: "stretch"
//                 // height: 300,

//                 // alignSelf: "flex-start" // TRY WITH ALIGNITEMS: "CENTER"
//             }}
//             />        
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "gold",
//                 width: 100,
//                 height: 200,
//             }}
//             />        
//             <View style={{ // it takes the avaialable space
//                 backgroundColor: "tomato",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//         </View>
//     );
// }

// // 40TH
// // FlexWrap and alignContent
// // when we add additionAL greenyellow view, blue view get shrunk and
// // green view get fit on the screen. 
// // it adjusts with the first (blue) and last ( green yellow)
// // if the items are overflow acros the main axis, one or more items get 
// // shrunked and other items are get fixed.
// // check, if we give flexWrap: "wrap" in container, 
// import React from "react";
// import { View } from "react-native";

// export default function App() {
//     return (
//         <View style={ { // Parent View, container
//             backgroundColor: "#fff",
//             flex: 1,

//             flexDirection: "row", // horizontal access
//             justifyContent: "center",//main(primary access)
//             alignItems: "center",

//             // flexWrap: "wrap", // change the height to 300 in 
//                                 // dodgerblue view to see the reuslt

//             // alignContent: "center",
//             // alignContent will only work with wrapping
//         }}>
//             <View style={{ 
//                 backgroundColor: "dodgerblue",
//                 width: 100,
//                 height: 100,
//                 // height: 300,

//             }}
//             />        
//             <View style={{ 
//                 backgroundColor: "gold",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//             <View style={{ 
//                 backgroundColor: "tomato",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//             <View style={{ 
//                 backgroundColor: "gray",
//                 width: 100,
//                 height: 100,
//             }}
//             />   
//             <View style={{ 
//                 backgroundColor: "greenyellow",
//                 width: 100,
//                 height: 100,
//             }}
//             />        
//         </View>
//     );
// }


// // 41st
// // Flexwrap - flexBais, flexGrow and FlexShrink
// // There are three other properties of flex
// // go to blue view and change these properties

// import React from "react";
// import { View } from "react-native";

// export default function App() {
//   return (
//       <View style={ { // Parent View, container
//           backgroundColor: "#fff",
//           flex: 1,
//           flexDirection: "row", // horizontal access
//           justifyContent: "center",//main(primary access)
//           alignItems: "center",
//       }}>
//           <View style={{ 
//               backgroundColor: "dodgerblue",

//               // // if you comment out the width, no change in it. so flexbasis can map width or height
//               // flexBasis: 100,
//               // // width: 100,
//               // height: 100,

//               // // it is same as changing the flex property as flex: 1
//               // flexBasis: 100,
//               // flexGrow: 1,
//               // // flex: 1,
//               // // width: 100,
//               // height: 100

//               // flexShrink is the opposite of flexGrow
//               // if we give flex: -1, it is same as flexShrink
//               width: 400,
//               //flexShrink: 1,
//               flex: -1,
//               height: 100,
//               // height: 300,

//           }}
//           />        
//           <View style={{ 
//               backgroundColor: "gold",
//               width: 100,
//               height: 100,
//           }}
//           />        
//           <View style={{ 
//               backgroundColor: "tomato",
//               width: 100,
//               height: 100,
//           }}
//           />              
//       </View>
//   );
// }

// // 42ND
// // absolute and relative positioning 
// // gold view moves 20 pixel top or bottom without changing the layout
// // in react native all components by default relative without change the layout. 
// // if we change the position to  abosolute, the relative to its parents get 
// // affected 

// import React from "react";
// import { View } from "react-native";

// export default function App() {
//   return (
//       <View style={ { // Parent View, container
//           backgroundColor: "#fff",
//           flex: 1,
//           flexDirection: "row", // horizontal access
//           justifyContent: "center",//main(primary access)
//           alignItems: "center",
//       }}>
//           <View style={{ 
//               backgroundColor: "dodgerblue",
//               width: 100, 
//               height: 100,              
//           }}
//           />        
//           <View style={{ 
//               backgroundColor: "gold",
//               width: 100,
//               height: 100,

//               // top: 20

//               // top: -20

//               // bottom: 20

//               // left: 20

//               // right: 20,

//               // by default all components is position set to relative 

//             //   position: "absolute",
//             //   top: 20,
//             //   left: 20
//             }}
//           />        
//           <View style={{ 
//               backgroundColor: "tomato",
//               width: 100,
//               height: 100,
//           }}
//           />        
//       </View>
//   );
// }

// 43rd
// import React from 'react';
// import WelcomeScreen from './app/screens/WelcomeScreen';

// export default function App() {
//   return (
//     <WelcomeScreen />
//   );
// }

// 44th
// import React from 'react';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';

// export default function App() {
//   return (
//     <ViewImageScreen />
//   );
// }

// 45th
// import React from 'react';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import WelcomeScreen from './app/screens/WelcomeScreen';

// export default function App() {
//   return (
//     <ViewImageScreen />
//   );
// }

// // 46th
// import { View } from "react-native";
// export default function App() {
//   return (
//     <View style={{ 
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//     <View 
//     style={{
//       backgroundColor: "dodgerblue",
//       width: 100,
//       height: 100,
//     }} ></View>
//     </View>
//   );
// }

// // 47th
// import { View } from "react-native";
// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,
//           borderWidth: 10,
//           borderColor: "royalblue",
//           borderRadius: 10,
//           borderTopWidth: 20,
//           borderTopLeftRadius: 50,
//         }}></View>
//     </View>
//   );
// }


// // 48th ( 3 - Shadows)
// import { View } from "react-native";
// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,
//           // for iOS, to apply shadow , we have to use three properties.
//           shadowColor: "grey", // we can set it to any color
//           //shadowOffset: { width: 10, height: 10},
//           //shadowOffset: { width: 0, height: 10},
//           //shadowOffset: { width:-10, height: 10},

//           shadowOffset: { width: 0, height: 10},
//           shadowOpacity: 1,
//           shadowRadius: 10, // we can make it show softer
//           // for Android, we do not have much control over shadow, 
//           // we can only apply elevation. 
//           elevation: 20,
//         }}></View>
//     </View>
//   );
// }


// // 49th ( 4 - PADDINGS AND MARGINS)
// import { View } from "react-native";
// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,

//           // padding: 20,
//           // paddingHorizontal: 10,
//           // paddingLeft: 30, // PADDING LEFT OVERRIDES THE HORIZONTAL PADDING
//         }} >
//         <View style={{
//           backgroundColor: "gold",
//           width: 50,
//           height: 50.
//           // it is starting from edges of the blue box, 
//           // there is no space in the box
//         }}>
//         </View>
//       </View>
//     </View>
//   );
// }


// // 50th ( 4 - PADDINGS AND MARGINS)
// import { View } from "react-native";
// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <View
//         style={{
//           backgroundColor: "dodgerblue",
//           width: 100,
//           height: 100,

//           padding: 20,
//           paddingHorizontal: 10,
//           paddingLeft: 30, // PADDING LEFT OVERRIDES THE HORIZONTAL PADDING
//         }} >
//         <View style={{
//           backgroundColor: "gold",
//           width: 50,
//           height: 50.
//           // it is starting from edges of the blue box, 
//           // there is no space in the box
//         }}>
//         </View>
//       </View>
//       <View style={{
//         backgroundColor: "tomato",
//         width: 100,
//         height: 100,
//         // there is no space between bluebox and tomato box, 
//         // so we will apply the margin.
//         margin: 20,
//       }}
//       ></View>
//     </View>
//   );
// }

// // 51st ( 5- Styling Text)
// import { View, Text } from "react-native";
// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <Text>I Love React Native</Text>
//     </View>
//   );
// }


// // 52nd ( 5- Styling Text)
// import { View, Text } from "react-native";
// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <Text 
//         style = {{
//           fontFamily: "Courier",
//           // in Android "Courier" font will nor work out. so we will use "Roboto",
//           fontSize: 30 }}
//       >
//         I Love React Native! </Text>
//     </View>
//   );


// // 53rd ( 5- Styling Text)
// import { View, Text } from "react-native";
// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <Text 
//         style = {{
//           fontSize: 30,
//           fontStyle: "italic",
//           fontWeight: "600",
//           color: "tomato",
//           textTransform: "capitalize",
            // textDecorationLine: "line-through", 
//         }}
//       >
//         I Love React Native! </Text>
//     </View>
//   );
// }

// // 54th ( 5- Styling Text)
// import { View, Text } from "react-native";
// export default function App() {
//   return (
//     <View style={{
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <Text 
//         style = {{
//           fontSize: 30,
//           fontStyle: "italic",
//           fontWeight: "600",
//           color: "tomato",
//           textTransform: "capitalize",
//           // default text alignment is left.
//           // textAlign: "right",
//           // textAlign: "center",
//           // textAlign: "jusity",
//           lineHeight: 30,
//         }}
//       >
//           I Love React Native! This is my first react native app! Here's some more text.</Text>
//     </View>
//   );
// }


// 55th ( 6 - Encapsulating Styles)
// import { View, Text } from "react-native";
// import AppText from './app/components/AppText';

// export default function App() {
//   return (
//     <View style={{ 
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       {/* <Text>I love React Native!</Text> */}
//       <AppText>I love React Native!</AppText>
//     </View>
//   );
// }


// // 56th ( 7-icons)
// import { View, Text } from "react-native";
// import {MaterialCommunityIcons} from '@expo/vector-icons';

// export default function App() {
//   return (
//     <View style={{ 
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <MaterialCommunityIcons name="email" size={200} color="dodgerblue"/>
//     </View>
//   );
// }

// // 57th ( 8 - PLATFORM SPECIFIC CODE)
// import { View, Text } from "react-native";
// import AppText from './app/components/AppText';

// export default function App() {
//   return (
//     <View style={{ 
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//     }} >
//       <AppText>I love React Native!</AppText>
//     </View>
//   );
// }

// 58th (11 - Building the button component)
// import { View } from "react-native";
// import AppButton from './app/components/AppButton';
// export default function App() {
//   return (
//     <View style={{ 
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       }} 
//     >
//       <AppButton title="Login" onPress={() => console.log("Tapped")}/>
//     </View>
//   );
// }

// 59th (12 - improving the welcome screen)
// import React from 'react';
// import WelcomeScreen from './app/screens/WelcomeScreen';

// export default function App() {
//   return (
//     <WelcomeScreen />
//   );
// }

// 60th (building the card component)
// import React from 'react';
// import { View } from 'react-native';

// import Card from "./app/components/Card";

// export default function App() {
//   return (
//     <View style={{
//       backgroundColor: '#f8f4f4', 
//       padding: 20,
//       paddingTop: 100
//   }}>
//     <Card 
//       title="Red jacket for sale"
//       subTitle="Rs.100" 
//       // image="./app/assets/jacket.jpg" /> 
//       image={require("./app/assets/jacket.jpg")} />    
//   </View>
//   );
// }


// // 61st 
// import React from 'react';

// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';

// export default function App() {
//   return (
//     <ListingDetailsScreen />
//     );
// }

// 62ND
// import React from 'react';

// import ViewImageScreen from './app/screens/ViewImageScreen';

// export default function App() {
//   return <ViewImageScreen />;
// }

// //63rd
// import React from 'react';
// import { View } from 'react-native';
// import MessagesScreen from './app/screens/MessagesScreen';

// export default function App() {
//   return <MessagesScreen />;
// }

// // 64th
// import React from 'react';
// import Screen from './app/components/Screen'
// import Icon from './app/components/Icon';

// export default function App() {
//   return <Screen>
//     <Icon 
//       name ="email"
//       size = {50}
//       backgroundColor = "red"
//       iconColor = "white" />
//   </Screen>;
// }

// //65TH
// import React from 'react';
// import Screen from './app/components/Screen';
// import ListItem from './app/components/ListItem';

// export default function App() {
//   return <Screen>
//     <ListItem title="My title" subTitle="My subtitle" />
//   </Screen>;
// }

// // 66th
// import React from 'react';
// import Icon from './app/components/Icon';
// import Screen from './app/components/Screen';
// import ListItem from './app/components/ListItem';

// export default function App() {
//   return <Screen>
//     <ListItem 
//       title="My title" 
//       subTitle="My subtitle" 
//       ImageComponent={ <Icon name="email" />} />
//   </Screen>;
// }


// // 67th
// import React from 'react';
// import Icon from './app/components/Icon';
// import Screen from './app/components/Screen';
// import ListItem from './app/components/ListItem';

// export default function App() {
//   return <Screen>
//     <ListItem 
//       title="My title" 
//       ImageComponent={ <Icon name="email" />} />
//   </Screen>;
// }


// // 68th
// import React from 'react';

// import AccountScreen from './app/screens/AccountScreen';

// export default function App() {
//   return (
//     <AccountScreen />
//   );
// }

// 69th
// import React from 'react';

// import ListingsScreen from './app/screens/ListingsScreen';

// export default function App() {
//   return (
//     <ListingsScreen />
//   );
// }

// 70th
// import React from 'react';
// import { TextInput } from 'react-native';

// import Screen from "./app/components/Screen";

// export default function App() {
//   return (
//     <Screen>
//       <TextInput /> 
//     </Screen>
//   );
// }


// 71st
// import React from 'react';
// import { TextInput } from 'react-native';

// import Screen from "./app/components/Screen";

// export default function App() {
//   return (
//     <Screen>
//       <TextInput 
//         placeholder="First Name" 
//         style={{
//           borderBottomColor: "#ccc",
//           borderBottomWidth: 1,
//         }} 
//       />  
//     </Screen>
//   );
// }


// 72nd
// import React, { useState } from 'react';
// import { TextInput, Text } from 'react-native';

// import Screen from "./app/components/Screen";

// export default function App() {
//   const [firstName, setFirstName] = useState('');
//   return (
//     <Screen>
//       <Text>{firstName}</Text>
//       <TextInput 
//         onChangeText={text => setFirstName(text)}
//         placeholder="First Name" 
//         style={{
//           borderBottomColor: "#ccc",
//           borderBottomWidth: 1,
//         }} 
//         /> 
//     </Screen>
//   );
// }


// 73rd
// import React from 'react';

// import Screen from "./app/components/Screen";
// import AppTextInput from "./app/components/AppTextInput";

// export default function App(props) {
//   return (
//     <Screen>
//       <AppTextInput />
//     </Screen>
//   );
// }


// 74th
// import React from 'react';

// import Screen from "./app/components/Screen";
// import AppTextInput from "./app/components/AppTextInput";

// export default function App() {
//   return (
//     <Screen>
//       <AppTextInput placeholder="Username" icon="email" />
//     </Screen>
//   );
// }

// 75th
// import React, { useState } from 'react';
// import { Switch } from 'react-native';

// import Screen from "./app/components/Screen";

// export default function App() {
//   const [isNew, setIsNew] = useState(false);
//   return (
//     <Screen>
//      <Switch 
//         value={isNew} 
//         onValueChange={(newValue) => setIsNew(newValue)} />
//     </Screen>
//   );
// }


// 76th
// import React, {useState} from 'react';

// import Screen from "./app/components/Screen";
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";

// export default function App() {
//   return (
//     <Screen>
//       <AppPicker icon ="apps" placeholder="Category" />
//       <AppTextInput icon="email" placeholder="Email" />
//     </Screen>
//   );
// }


// 77th
// import Screen from "./app/components/Screen";
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },  
// ];


// export default function App() {
//   return (
//     <Screen>
//       <AppPicker items={categories} icon ="apps" placeholder="Category" />
//       <AppTextInput icon="email" placeholder="Email" />
//     </Screen>
//   );
// }

// 78TH
// import React, {useState} from 'react';

// import Screen from "./app/components/Screen";
// import AppPicker from "./app/components/AppPicker";
// import AppTextInput from "./app/components/AppTextInput";

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },  
// ];

// export default function App() {
//   const [category, setCategory] = useState(categories[0]);
//   return (
//     <Screen>
//       <AppPicker 
//       selectedItem={category}
//       onSelectItem={(item) => setCategory(item)}
//       items={categories} icon ="apps" placeholder="Category" />
//       <AppTextInput icon="email" placeholder="Email" />
//     </Screen>
//   );
// }

// 79th
// import React, {useState} from 'react';

// import LoginScreen from './app/screens/LoginScreen';

// export default function App(props) {
//   return <LoginScreen />;
// }

// 80th
// import React from "react";
// import ListingEditScreen from "./app/screens/ListingEditScreen";

// export default function App() {
//   return <ListingEditScreen />;
// }

// 81st
// import React from 'react';
// import MessagesScreen from './app/screens/MessagesScreen';

// export default function App() {
//   return <MessagesScreen />;
// }

// 82nd
// import React from "react";
// import ListingEditScreen from "./app/screens/ListingEditScreen";

// export default function App() {
//   return <ListingEditScreen />;
// }
import React from 'react';
import MessagesScreen from './app/screens/MessagesScreen';
export default function App() {
return <MessagesScreen />;
}

