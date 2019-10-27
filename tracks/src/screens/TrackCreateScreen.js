import '../_mockLocation';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { SafeAreaView } from 'react-navigation';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';


const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);

    const [err] = useLocation(addLocation);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h2> Track Create Screen</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({

});

export default TrackCreateScreen;