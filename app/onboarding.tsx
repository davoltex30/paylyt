import React, {useRef, useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    StatusBar,
    FlatList,
    useWindowDimensions,
    TouchableOpacity,
    FlatListProps,
    ListRenderItem,
    DimensionValue, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemedText } from '@/components/ThemedText';
import {Link} from "expo-router";

type SlideItem = {
    heading: string;
    description: string;
};

const {width, height} = Dimensions.get("window")

const Onboarding = () => {
    const slides: SlideItem[] = [
        {
            heading: 'Manage your payments with',
            description: 'A convenient way to manage your money securely from your mobile device',
        },
        {
            heading: 'A loan for every dream with',
            description: 'A loan facility that provides financial assistance whenever you need',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const ref = useRef<FlatList>(null)

    const Slide: React.FC<{ item: SlideItem }> = ({ item }) => {
        return (
            <View style={{ width: width, flexDirection: "column", justifyContent: "flex-end", padding: 15}}>
                <ThemedText type="title" style={styles.title}>
                    {item.heading}
                </ThemedText>
                <ThemedText type="title" style={{color: "#456EFE"}}>Paylyt</ThemedText>
                <ThemedText type="default" style={styles.description}>
                    {item.description}
                </ThemedText>
            </View>
        );
    };

    const renderItem: ListRenderItem<SlideItem> = ({ item }) => (
        <Slide item={item} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={"#23303B"}/>
            <FlatList
                ref={ref}
                data={slides}
                renderItem={renderItem}
                keyExtractor={item => item.heading}
                contentContainerStyle={{ height: height * 0.8 ,}}
                showsHorizontalScrollIndicator={false}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={(event) => {
                    const index = Math.floor(
                        event.nativeEvent.contentOffset.x /
                        event.nativeEvent.layoutMeasurement.width
                    );
                    setCurrentIndex(index);
                }}
            />
            <View style={styles.footer}>
                <View style={styles.paginationContainer}>
                    {slides.map((_, index) => (
                        <View
                            style={[
                                styles.pagination,
                                currentIndex === index && styles.activePagination,
                            ]}
                            key={index}
                        />
                    ))}
                </View>
                <Link style={styles.skipButton} href={"/(auth)/login"}>
                    <Text style={styles.skipText}>Skip</Text>
                </Link>
            </View>
        </SafeAreaView>
    );
};
export default Onboarding;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#23303B',
    },
    title: {
        color: '#fff',
        maxWidth: "80%"
    },
    description: {
        color: '#bdbdbd',
        marginTop: 10,
        maxWidth: "80%",
    },
    pagination: {
        backgroundColor: '#7c7c7c',
        width: 15,
        height: 5,
        borderRadius: 5,
        marginHorizontal: 2,
    },
    activePagination: {
        backgroundColor: 'white',
        width: 30,
    },
    skipButton: {
        borderRadius: 10,
        backgroundColor: '#bdbdbd',
        paddingHorizontal: 30,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    skipText: {
        color: 'white',
        textAlign: 'center',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 15,
        paddingVertical: 10,
        flexGrow: 1,
    },
    paginationContainer: {
        flexDirection: 'row',
    },
});