// import React from 'react';

// import Screen from '../components/Screen'
// import ListItem from '../components/ListItem'

// function AccountScreen(props) {
//     return (
//         <Screen>
//             <ListItem 
//                 title = "Dwaraknath"
//                 subTitle = "Programming with React Native" 
//                 image = { require('../assets/picture.jpg')} />
//         </Screen>
//     );
// }

// export default AccountScreen;



// 2nd
// import React from 'react';
// import { StyleSheet, View} from 'react-native';

// import Screen from '../components/Screen'
// import ListItem from '../components/ListItem'

// function AccountScreen(props) {
//     return (
//         <Screen>
//             <View style={styles.container}>
//             <ListItem 
//                 title = "Dwaraknath"
//                 subTitle = "Programming React Native" 
//                 image = { require('../assets/picture.jpg')} />
//             </View>
//         </Screen>
//     );
// }
 
// const styles = StyleSheet.create({
//     container: {
//         marginVertical: 20
//     }    
// })
// export default AccountScreen;


// // 3rd
// import React from 'react'; // type imrn
// import { StyleSheet, View, FlatList } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem';
// import Icon from "../components/Icon";
// import colors from '../config/colors';

// const menuItems = [
//     {
//         title: "My Listings",
//         icon: {
//            name: "format-list-bulleted",
//            backgroundColor: colors.primary, 
//         }
//     },
//     {
//         title: "My Messages",
//         icon: {
//            name: "email",
//            backgroundColor: colors.secondary, 
//         }
//     },
// ]

// function AccountScreen(props) {
//     return (
//         <Screen>
//             <View style={styles.container}>
//             <ListItem 
//                 title = "Dwaraknath"
//                 subTitle = "Programming React Native" 
//                 image = { require('../assets/picture.jpg')} />
//             </View>
//             <View style={styles.container}>
//                 <FlatList
//                     data={menuItems}
//                     keyExtractor={menuItem => menuItem.title} 
//                     renderItem={({ item }) => 
//                         <ListItem 
//                             title={item.title}
//                             ImageComponent={
//                                 <Icon 
//                                 name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
//                                 />
//                             }
//                         />
//                     } 
//                 />
//             </View>
//         </Screen>
//     );
// }
 
// const styles = StyleSheet.create({
//     container: {
//         marginVertical: 20
//     }    
// })

// // 4th
// import React from 'react'; // type imrn
// import { StyleSheet, View, FlatList } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem';
// import Icon from "../components/Icon";
// import colors from '../config/colors';

// const menuItems = [
//     {
//         title: "My Listings",
//         icon: {
//            name: "format-list-bulleted",
//            backgroundColor: colors.primary, 
//         }
//     },
//     {
//         title: "My Messages",
//         icon: {
//            name: "email",
//            backgroundColor: colors.secondary, 
//         }
//     },
// ]

// function AccountScreen(props) {
//     return (
//         <Screen style={styles.screen}>
//             <View style={styles.container}>
//             <ListItem 
//                 title = "Dwaraknath"
//                 subTitle = "Programming React Native" 
//                 image = { require('../assets/picture.jpg')} />
//             </View>
//             <View style={styles.container}>
//                 <FlatList
//                     data={menuItems}
//                     keyExtractor={menuItem => menuItem.title} 
//                     renderItem={({ item }) => 
//                         <ListItem 
//                             title={item.title}
//                             ImageComponent={
//                                 <Icon 
//                                 name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
//                                 />
//                             }
//                         />
//                     } 
//                 />
//             </View>
//         </Screen>
//     );
// }
 
// const styles = StyleSheet.create({
//     container: {
//         marginVertical: 20
//     },
//     screen: {
//         backgroundColor: colors.light,
//     }    
// })
// export default AccountScreen;

// 5th
// import React from 'react'; // type imrn
// import { StyleSheet, View, FlatList } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem';
// import ListItemSeparatorComponent from "../components/ListItemSeparator";
// import Icon from "../components/Icon";
// import colors from '../config/colors';

// const menuItems = [
//     {
//         title: "My Listings",
//         icon: {
//            name: "format-list-bulleted",
//            backgroundColor: colors.primary, 
//         }
//     },
//     {
//         title: "My Messages",
//         icon: {
//            name: "email",
//            backgroundColor: colors.secondary, 
//         }
//     },
// ]

// function AccountScreen(props) {
//     return (
//         <Screen style={styles.screen}>
//             <View style={styles.container}>
//             <ListItem 
//                 title = "Dwaraknath"
//                 subTitle = "Programming React Native" 
//                 image = { require('../assets/picture.jpg')} />
//             </View>
//             <View style={styles.container}>
//                 <FlatList
//                     data={menuItems}
//                     keyExtractor={menuItem => menuItem.title} 
//                     ItemSeparatorComponent={ListItemSeparatorComponent} 
//                     renderItem={({ item }) => 
//                         <ListItem 
//                             title={item.title}
//                             ImageComponent={
//                                 <Icon 
//                                 name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
//                                 />
//                             }
//                         />
//                     } 
//                 />
//             </View>
//         </Screen>
//     );
// }
 
// const styles = StyleSheet.create({
//     container: {
//         marginVertical: 20
//     },
//     screen: {
//         backgroundColor: colors.light,
//     }    
// })
// export default AccountScreen;


// 6th
// import React from 'react'; // type imrn
// import { StyleSheet, View, FlatList } from 'react-native';

// import Screen from '../components/Screen';
// import ListItem from '../components/ListItem';
// import ListItemSeparatorComponent from "../components/ListItemSeparator";
// import Icon from "../components/Icon";
// import colors from '../config/colors';

// const menuItems = [
//     {
//         title: "My Listings",
//         icon: {
//            name: "format-list-bulleted",
//            backgroundColor: colors.primary, 
//         }
//     },
//     {
//         title: "My Messages",
//         icon: {
//            name: "email",
//            backgroundColor: colors.secondary, 
//         }
//     },
// ]

// function AccountScreen(props) {
//     return (
//         <Screen style={styles.screen}>
//             <View style={styles.container}>
//             <ListItem 
//                 title = "Dwaraknath"
//                 subTitle = "Programming React Native" 
//                 image = { require('../assets/picture.jpg')} />
//             </View>
//             <View style={styles.container}>
//                 <FlatList
//                     data={menuItems}
//                     keyExtractor={menuItem => menuItem.title} 
//                     ItemSeparatorComponent={ListItemSeparatorComponent} 
//                     renderItem={({ item }) => 
//                         <ListItem 
//                             title={item.title}
//                             ImageComponent={
//                                 <Icon 
//                                 name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
//                                 />
//                             }
//                         />
//                     } 
//                 />
//             </View>
//             <ListItem 
//                 title="Log Out"
//                 ImageComponent={<Icon name="logout" 
//                     backgroundColor="#ffe66d"/>}
//             />
//         </Screen>
//     );
// }
 
// const styles = StyleSheet.create({
//     container: {
//         marginVertical: 20
//     },
//     screen: {
//         backgroundColor: colors.light,
//     }    
// })
// export default AccountScreen;


// 7th
import React from 'react'; // type imrn
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparatorComponent from "../components/ListItemSeparator";
import Icon from "../components/Icon";
import colors from '../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
           name: "format-list-bulleted",
           backgroundColor: colors.primary, 
        }
    },
    {
        title: "My Messages",
        icon: {
           name: "email",
           backgroundColor: colors.secondary, 
        }
    },
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
            <ListItem 
                title = "Dwaraknath"
                subTitle = "Programming React Native" 
                image = { require('../assets/picture.jpg')} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title} 
                    ItemSeparatorComponent={ListItemSeparatorComponent} 
                    renderItem={({ item }) => 
                        <ListItem 
                            title={item.title}
                            IconComponent={
                                <Icon 
                                name={item.icon.name} backgroundColor={item.icon.backgroundColor} 
                                />
                            }
                        />
                    } 
                />
            </View>
            <ListItem 
                title="Log Out"
                IconComponent={<Icon name="logout" 
                    backgroundColor="#ffe66d"/>}
            />
        </Screen>
    );
}
 
const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    },
    screen: {
        backgroundColor: colors.light,
    }    
})
export default AccountScreen;