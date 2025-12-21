import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function SokchoMapBottomScreen() {
  return (
    <View style={styles.View}>
        <Text style={styles.Text}>지도 페이지</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    Text: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    View: {
        marginLeft: 'auto',
        marginRight: 'auto',
        margin: 'auto'

    }
});

export default SokchoMapBottomScreen;