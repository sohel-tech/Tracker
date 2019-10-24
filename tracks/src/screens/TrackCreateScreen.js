import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';


const TrackCreateScreen = () => {
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2> Track Create Screen</Text>
            <Map />
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;