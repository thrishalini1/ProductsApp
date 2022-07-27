// import React from 'react';
// import { View } from 'react-native';
// import { MaterialCommunityIcons} from '@expo/vector-icons';

// function Icon({
//     name,
//     size = 40,
//     backgroundColor = '#000',
//     iconColor = '#fff'
// }) {
//     return (
//         <View style={{
//             width: size,
//             height: size,
//             borderRadius: size/2,
//             backgroundColor // if key and value are same. Use key, remove value
//         }}>
//             <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
//              {/* icon size should be half the size of the circle */}
//         </View>
//     );
// }

// export default Icon;

// 2nd
import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons} from '@expo/vector-icons';

function Icon({
    name,
    size = 40,
    backgroundColor = '#000',
    iconColor = '#fff'
}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size/2,
            backgroundColor, 
            justifyContent: "center",
            alignItems: "center",
        }}>
            <MaterialCommunityIcons 
                name={name} 
                color={iconColor} 
                size={size * 0.5} />
        </View>
    );
}

export default Icon;