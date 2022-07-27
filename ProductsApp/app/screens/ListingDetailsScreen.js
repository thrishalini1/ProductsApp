// import React from 'react';
// import { Image, View, StyleSheet } from 'react-native';

// function ListingDetailsScreen(props) {
//     return (
//       <View>
//           <Image style={styles.image} source={require('../assets/jacket.jpg')} />
//       </View>
//     );
// }
// const styles = StyleSheet.create({
//     image: {
//         width: '100%',
//         height: 300,
//     },
// })
// export default ListingDetailsScreen;



// // 2nd
// import React from 'react';
// import { Image, View, StyleSheet } from 'react-native';

// import AppText from '../components/AppText';
// import colors from '../config/colors'

// function ListingDetailsScreen(props) {
//     return (
//       <View>
//           <Image style={styles.image} source={require('../assets/jacket.jpg')} />
//           <View style={styles.detailsContainer}>
//           <AppText style={styles.title}>Red jacket for sale</AppText>
//           <AppText style={styles.price}>Rs.100</AppText>     
//           </View>
//       </View>
//     );
// }
// const styles = StyleSheet.create({
//     detailsContainer: {
//         padding: 20,
//     },
//     image: {
//         width: '100%',
//         height: 300,
//     },
//     price: {
//         color: colors.secondary,
//         fontWeight: "bold",
//         fontSize: 20,
//         marginVertical: 10, 
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "500",
//     },    
// })
// export default ListingDetailsScreen; 


// // 3rd
// import React from 'react';
// import { Image, View, StyleSheet } from 'react-native';

// import AppText from '../components/AppText';
// import colors from '../config/colors'
// import ListItem from '../components/ListItem';

// function ListingDetailsScreen(props) {
//     return (
//       <View>
//           <Image style={styles.image} source={require('../assets/jacket.jpg')} />
//           <View style={styles.detailsContainer}>
//           <AppText style={styles.title}>Red jacket for sale</AppText>
//           <AppText style={styles.price}>Rs.100</AppText>     
//           <ListItem
//             image={require("../assets/picture.jpg")}
//             title="Some Picture"
//             subTitle="5 Listings" />   
//           </View>
//       </View>
//     );
// }
// const styles = StyleSheet.create({
//     detailsContainer: {
//         padding: 20,
//     },
//     image: {
//         width: '100%',
//         height: 300,
//     },
//     price: {
//         color: colors.secondary,
//         fontWeight: "bold",
//         fontSize: 20,
//         marginVertical: 10, 
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "500",
//     },    
// })
// export default ListingDetailsScreen;


//4th
import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors'
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
      <View>
          <Image style={styles.image} source={require('../assets/jacket.jpg')} />
          <View style={styles.detailsContainer}>
          <AppText style={styles.title}>Red jacket for sale</AppText>
          <AppText style={styles.price}>Rs.100</AppText>     
          <View style={styles.userContainer}>
            <ListItem
                image={require("../assets/picture.jpg")}
                title="Some Picture"
                subTitle="5 Listings" />  
          </View> 
         </View>
      </View>
    );
}
const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10, 
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    }, 
    userContainer: {
        marginVertical: 40,
    }   
})
export default ListingDetailsScreen;
