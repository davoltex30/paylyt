import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import {useRouter} from 'expo-router';
import {BottomSheetBackdrop, BottomSheetModal} from "@gorhom/bottom-sheet";

// Sample ATM data
const ATM_LOCATIONS = [
    {
        id: 1,
        name: "AFC Bank Bonamoussadi",
        latitude: 4.0715,
        longitude: 9.7293,
        address: "Carrefour Bonamoussadi"
    },
    {
        id: 2,
        name: "UBA ATM Bonamoussadi",
        latitude: 4.0728,
        longitude: 9.7315,
        address: "Near Total Station"
    },
    {
        id: 3,
        name: "Ecobank Bonamoussadi",
        latitude: 4.0702,
        longitude: 9.7278,
        address: "Commercial Avenue"
    },
    {
        id: 4,
        name: "BICEC ATM",
        latitude: 4.0735,
        longitude: 9.7301,
        address: "Main Market Road"
    },
];


export default function MapPage() {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [nearestAtm, setNearestAtm] = useState<any>(null);
    const [selectedAtm, setSelectedAtm] = useState<any>(null);
    const [showRoute, setShowRoute] = useState(false);
    const [distance, setDistance] = useState<number | null>(null);
    const [duration, setDuration] = useState<number | null>(null);

    // Bottom sheet ref
    const bottomSheetRef = useRef<BottomSheetModal>(null);
    const snapPoints = ['25%', '50%'];

    // Handle marker press
    const handleMarkerPress = (atm: any) => {
        setSelectedAtm(atm);
        bottomSheetRef.current?.expand();
        setShowRoute(false);
        setDistance(null);
        setDuration(null);
    };

    // Handle navigate button press
    const handleNavigatePress = () => {
        if (!selectedAtm || !location) return;

        setShowRoute(true);
        bottomSheetRef.current?.collapse();
    };

    // Render backdrop for bottom sheet
    const renderBackdrop = useCallback(
        (props: any) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0}
            />
        ),
        []
    );

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    const findNearestATM = () => {
        if (!location) return;

        // Calculate distances to all ATMs
        const atmsWithDistances = ATM_LOCATIONS.map(atm => {
            const distance = calculateDistance(
                location.coords.latitude,
                location.coords.longitude,
                atm.latitude,
                atm.longitude
            );
            return {...atm, distance};
        });

        // Sort by distance and get the nearest
        const nearest = atmsWithDistances.sort((a, b) => a.distance - b.distance)[0];
        setNearestAtm(nearest);
        setShowRoute(true);
    };

    // Haversine formula to calculate distance between two coordinates
    const calculateDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
        const R = 6371; // Radius of the Earth in km
        const dLat = (lat2 - lat1) * Math.PI / 180;
        const dLon = (lon2 - lon1) * Math.PI / 180;
        const a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c; // Distance in km
    };

    const handleDirectionsReady = (args: any) => {
        setDistance(args.distance);
        setDuration(args.duration);
    };

    if (errorMsg) {
        return <View style={styles.container}><Text>{errorMsg}</Text></View>;
    }

    if (!location) {
        return <View style={styles.container}><Text>Loading...</Text></View>;
    }

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={true}
            >
                {/* User location marker */}
                <Marker
                    coordinate={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                    }}
                    title="Your Location"
                    pinColor="blue"
                />

                {/* ATM markers */}
                {ATM_LOCATIONS.map(atm => (
                    <Marker
                        key={atm.id}
                        coordinate={{
                            latitude: atm.latitude,
                            longitude: atm.longitude,
                        }}
                        title={atm.name}
                        description={atm.address}
                        onPress={() => handleMarkerPress(atm)}
                    >
                        <Callout>
                            <View>
                                <Text style={styles.calloutTitle}>{atm.name}</Text>
                                <Text>{atm.address}</Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}

                {/* Route to nearest ATM */}
                {showRoute && nearestAtm && location && (
                    <MapViewDirections
                        origin={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                        destination={{
                            latitude: nearestAtm.latitude,
                            longitude: nearestAtm.longitude,
                        }}
                        apikey="YOUR_GOOGLE_MAPS_API_KEY" // Replace with your API key
                        strokeWidth={4}
                        strokeColor="hotpink"
                        onReady={handleDirectionsReady}
                        mode="WALKING"
                    />
                )}
            </MapView>

            {/* Info panel */}
            <View style={styles.infoPanel}>
                {distance && duration && (
                    <View style={styles.distanceInfo}>
                        <Text style={styles.infoText}>Distance: {distance.toFixed(2)} km</Text>
                        <Text style={styles.infoText}>Time: {Math.ceil(duration)} min</Text>
                    </View>
                )}
            </View>

            {/* Find nearest ATM button */}
            <TouchableOpacity style={styles.button} onPress={findNearestATM}>
                <Text style={styles.buttonText}>Find Nearest ATM</Text>
            </TouchableOpacity>

            <BottomSheetModal
                ref={bottomSheetRef}
                index={-1}
                snapPoints={snapPoints}
                backdropComponent={renderBackdrop}
                enablePanDownToClose={true}
            >
                <View style={styles.bottomSheetContent}>
                    {selectedAtm && (
                        <>
                            <Text style={styles.bottomSheetTitle}>{selectedAtm.name}</Text>
                            <Text style={styles.bottomSheetText}>{selectedAtm.address}</Text>

                            {distance && duration && (
                                <View style={styles.distanceInfo}>
                                    <Text style={styles.infoText}>Distance: {distance.toFixed(2)} km</Text>
                                    <Text style={styles.infoText}>Time: {Math.ceil(duration)} min</Text>
                                </View>
                            )}

                            <TouchableOpacity
                                style={styles.navigateButton}
                                onPress={handleNavigatePress}
                            >
                                <Text style={styles.navigateButtonText}>Navigate to this ATM</Text>
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </BottomSheetModal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    button: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        backgroundColor: '#007AFF',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    infoPanel: {
        position: 'absolute',
        top: 20,
        left: 20,
        right: 20,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        elevation: 3,
    },
    distanceInfo: {
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        marginVertical: 2,
    },
    calloutTitle: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
});