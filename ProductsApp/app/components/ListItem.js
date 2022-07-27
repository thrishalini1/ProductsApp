// import React from 'react';
// import { View, StyleSheet , Image} from 'react-native';
// import AppText from './AppText';

// function ListItem({title, subTitle, image}) {
//     return (
//         <View style={styles.container}>
//             <Image style={styles.image} source={image}/>
//             <View>
//                 <AppText>{title}</AppText>
//                 <AppText>{subTitle}</AppText>    
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row" 
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginRight: 10       
//     }
// })
// export default ListItem;

// // 2nd
// import React from 'react';
// import { View, StyleSheet , Image} from 'react-native';

// import AppText from './AppText';
// import colors from '../config/colors'

// function ListItem({title, subTitle, image}) {
//     return (
//         <View style={styles.container}>
//             <Image style={styles.image} source={image}/>
//             <View>
//                 <AppText style={styles.title}>{title}</AppText>
//                 <AppText style={styles.subTitle}>{subTitle}</AppText>    
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row" 
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginRight: 10       
//     },
//     subTitle: {
//         // color: "#6e6969",
//         color: colors.medium,
//     },
//     title: {
//         fontWeight: "500",
//     },
// })
// export default ListItem;


// // 2nd
// import React from 'react';
// import { View, StyleSheet , Image} from 'react-native';

// import AppText from './AppText';
// import colors from '../config/colors'

// function ListItem({title, subTitle, image}) {
//     return (
//         <View style={styles.container}>
//             <Image style={styles.image} source={image}/>
//             <View>
//                 <AppText style={styles.title}>{title}</AppText>
//                 <AppText style={styles.subTitle}>{subTitle}</AppText>    
//             </View>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//         padding: 15,
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginRight: 10       
//     },
//     subTitle: {
//         color: colors.medium,
//     },
//     title: {
//         fontWeight: "500",
//     },
// })
// export default ListItem;


// // 3rd
// import React from 'react';
// import { View, StyleSheet , Image, TouchableOpacity} from 'react-native';

// import AppText from './AppText';
// import colors from '../config/colors'

// function ListItem({title, subTitle, image}) {
//     return (
//         <TouchableOpacity>
//         <View style={styles.container}>
//             <Image style={styles.image} source={image}/>
//             <View>
//                 <AppText style={styles.title}>{title}</AppText>
//                 <AppText style={styles.subTitle}>{subTitle}</AppText>    
//             </View>
//         </View>
//         </TouchableOpacity>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//         padding: 15,
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginRight: 10       
//     },
//     subTitle: {
//         color: colors.medium,
//     },
//     title: {
//         fontWeight: "500",
//     },
// })
// export default ListItem;


// // 4th
// import React from 'react';
// import { View, StyleSheet , Image, TouchableHighlight} from 'react-native';

// import AppText from './AppText';
// import colors from '../config/colors'

// function ListItem({title, subTitle, image}) {
//     return (
//         <TouchableHighlight 
//         underlayColor={colors.light}
//         onPress={() => console.log()}>
//         <View style={styles.container}>
//             <Image style={styles.image} source={image}/>
//             <View>
//                 <AppText style={styles.title}>{title}</AppText>
//                 <AppText style={styles.subTitle}>{subTitle}</AppText>    
//             </View>
//         </View>
//         </TouchableHighlight>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//         padding: 15,
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginRight: 10       
//     },
//     subTitle: {
//         color: colors.medium,
//     },
//     title: {
//         fontWeight: "500",
//     },
// })
// export default ListItem;


// // 5th
// import React from 'react';
// import { View, StyleSheet , Image, TouchableHighlight} from 'react-native';

// import AppText from './AppText';
// import colors from '../config/colors'

// function ListItem({title, subTitle, image, onPress}) {
//     return (
//         <TouchableHighlight 
//         underlayColor={colors.light}
//         onPress={onPress}>
//         <View style={styles.container}>
//             <Image style={styles.image} source={image}/>
//             <View>
//                 <AppText style={styles.title}>{title}</AppText>
//                 <AppText style={styles.subTitle}>{subTitle}</AppText>    
//             </View>
//         </View>
//         </TouchableHighlight>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//         padding: 15,
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginRight: 10       
//     },
//     subTitle: {
//         color: colors.medium,
//     },
//     title: {
//         fontWeight: "500",
//     },
// })
// export default ListItem;


// // for Android, we should import GestureHandlerRootView to make it work
// import { GestureHandlerRootView } from "react-native-gesture-handler";

// function ListItem({ title, subtitle, image, onPress, renderRightActions }) {
//   return (
//     <GestureHandlerRootView>
//       <Swipeable renderRightActions={renderRightActions}>
//         <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
//           <View style={styles.container}>
//             <Image style={styles.image} source={image} />
//             <View>
//               <AppText style={styles.title}>{title}</AppText>
//               <AppText style={styles.subTitle}>{subtitle}</AppText>
//             </View>
//           </View>
//         </TouchableHighlight>
//       </Swipeable>
//     </GestureHandlerRootView>
//   );
// }


// // 6th
// import React from 'react';
// import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import AppText from './AppText';
// import colors from '../config/colors'

// function ListItem({ title, subTitle, image, onPress, renderRightActions }) {
//     return (
//         <Swipeable renderRightActions={renderRightActions}>
//             <TouchableHighlight
//                 underlayColor={colors.light}
//                 onPress={onPress}>
//                 <View style={styles.container}>
//                     <Image style={styles.image} source={image} />
//                     <View>
//                         <AppText style={styles.title}>{title}</AppText>
//                         <AppText style={styles.subTitle}>{subTitle}</AppText>
//                     </View>
//                 </View>
//             </TouchableHighlight>
//         </Swipeable>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//         padding: 15,
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//         marginRight: 10
//     },
//     subTitle: {
//         color: colors.medium,
//     },
//     title: {
//         fontWeight: "500",
//     },
// })
// export default ListItem;


// 7th
// import React from 'react';
// import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import AppText from './AppText';
// import colors from '../config/colors'

// function ListItem({ title, subTitle, image, ImageComponent, onPress, renderRightActions }) {
//     return (
//         <Swipeable renderRightActions={renderRightActions}>
//             <TouchableHighlight
//                 underlayColor={colors.light}
//                 onPress={onPress}>
//                 <View style={styles.container}>
//                     {ImageComponent}
//                     { image && <Image style={styles.image} source={image} /> }
//                     <View style={styles.detailsContainer}>
//                         <AppText style={styles.title}>{title}</AppText>
//                         {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
//                     </View>
//                 </View>
//             </TouchableHighlight>
//         </Swipeable>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//         padding: 15,
//         backgroundColor: colors.white,
//     },
//     detailsContainer: {
//         marginLeft: 10,
//         justifyContent: "center"
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//     },
//     subTitle: {
//         color: colors.medium,
//     },
//     title: {
//         fontWeight: "500",
//     },
// })
// export default ListItem;


// // 8th
// import React from 'react';
// import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

// import Swipeable from 'react-native-gesture-handler/Swipeable';
// import AppText from './AppText';
// import colors from '../config/colors'

// function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
//     return (
//         <Swipeable renderRightActions={renderRightActions}>
//             <TouchableHighlight
//                 underlayColor={colors.light}
//                 onPress={onPress}>
//                 <View style={styles.container}>
//                     {IconComponent}
//                     { image && <Image style={styles.image} source={image} /> }
//                     <View style={styles.detailsContainer}>
//                         <AppText style={styles.title}>{title}</AppText>
//                         {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
//                     </View>
//                 </View>
//             </TouchableHighlight>
//         </Swipeable>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flexDirection: "row",
//         padding: 15,
//         backgroundColor: colors.white,
//     },
//     detailsContainer: {
//         marginLeft: 10,
//         justifyContent: "center"
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 35,
//     },
//     subTitle: {
//         color: colors.medium,
//     },
//     title: {
//         fontWeight: "500",
//     },
// })
// export default ListItem;


// 9th
import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import { MaterialCommunityIcons} from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from './AppText';
import colors from '../config/colors'

function ListItem({ title, subTitle, image, IconComponent, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>
                <View style={styles.container}>
                    {IconComponent}
                    { image && <Image style={styles.image} source={image} /> }
                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} numberOfLines={1}>
                            {title}
                        </AppText>
                        {subTitle && ( 
                        <AppText style={styles.subTitle} numberOfLines={2}>
                            {subTitle}
                        </AppText> ) }
                    </View>
                    <MaterialCommunityIcons
                    color={colors.medium}
                    name="chevron-right"
                    size={25}
                    />
                </View>
            </TouchableHighlight>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: "center"
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
    },
})
export default ListItem;