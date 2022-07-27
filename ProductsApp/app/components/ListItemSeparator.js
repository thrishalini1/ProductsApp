import React from 'react';
import {StyleSheet, View} from "react-native";

import colors from "../config/colors";

function ListItemSeparator() {
    return (
        // <View style={{width: "100%", height: 1, backgroundColor: '#000'}}></View>
        <View style={styles.separator}/>
    );
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 1,
        backgroundColor: colors.light,
    },
})
export default ListItemSeparator;
