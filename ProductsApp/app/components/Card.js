// import React from 'react';
// import { View, StyleSheet , Image} from 'react-native';

// import AppText from './AppText';
// import colors from '../config/colors';

// function Card({title, subTitle, image}) {
//     return (
//        <View style={styles.card}>
//            {/* <Image source={require(image)}/> */}
//            <Image source={image}/>
//            <AppText>{title}</AppText>
//            <AppText>{subTitle}</AppText>
//        </View>
//     );
// } 
// const styles = StyleSheet.create({
//     card: {
//         borderRadius: 15,
//         // backgroundColor: '#fff',
//         backgroundColor: colors.white,
//         marginBottom: 20,
//     }
// })
// export default Card;



// import React from 'react';
// import { View, StyleSheet , Image} from 'react-native';

// import AppText from './AppText';
// import colors from '../config/colors';

// function Card({title, subTitle, image}) {
//     return (
//        <View style={styles.card}>
//            <Image style={styles.image} source={image}/>
//            <AppText>{title}</AppText>
//            <AppText>{subTitle}</AppText>
//        </View>
//     );
// } 
// const styles = StyleSheet.create({
//     card: {
//         borderRadius: 15,
//         backgroundColor: colors.white,
//         marginBottom: 20,
//     },
//     image: {
//         width: "100%",
//         height: 200,
//     }
// })
// export default Card;


// import React from 'react';
// import { View, StyleSheet , Image} from 'react-native';

// import AppText from './AppText';
// import colors from '../config/colors';

// function Card({title, subTitle, image}) {
//     return (
//        <View style={styles.card}>
//            <Image style={styles.image} source={image}/>
//            <View style={styles.detailsContainer}>
//                 <AppText>{title}</AppText>
//                 <AppText>{subTitle}</AppText>
//            </View>
//        </View>
//     );
// } 
// const styles = StyleSheet.create({
//     card: {
//         borderRadius: 15,
//         backgroundColor: colors.white,
//         marginBottom: 20,
//     },
//     detailsContainer: {
//         padding: 20,
//     },
//     image: {
//         width: "100%",
//         height: 200,
//     },
// })
// export default Card;



import React from 'react';
import { View, StyleSheet , Image} from 'react-native';

import AppText from './AppText';
import colors from '../config/colors';

function Card({title, subTitle, image}) {
    return (
       <View style={styles.card}>
           <Image style={styles.image} source={image}/>
           <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
           </View>
       </View>
    );
} 
const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 200,
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
    },
    title: {
        marginBottom: 7,
    },
})
export default Card;