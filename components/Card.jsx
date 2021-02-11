import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CARD_HEIGHT = 280;

const Card = props => {
    const {
        index,
        headerText,
        subHeaderText,
        brandImageURL,
        horsepower,
        price,
        carImageURL,
        style
    } = props;

    return (
        <View style={[ styles.container, style ]}
            key={index}
        >
            <View style={styles.containerInner}>
                <View style={styles.header}>
                    <View style={styles.headerTextContainer}>
                        <Text style={styles.headerText}>
                            {headerText}
                        </Text>
                        <Text style={styles.headerSubText}>
                            {subHeaderText}
                        </Text>
                    </View>
                    <View style={styles.headerImageContainer}>
                        <Image source={{
                            uri: brandImageURL
                        }}
                            style={styles.carBrandImage}
                        />
                    </View>
                </View>
                <View style={styles.body}>
                    <View style={styles.statList}>
                        <MaterialCommunityIcons name="engine" size={35} color="black" />
                        <Text style={styles.statListText}>
                            {`${horsepower} HP`}
                        </Text>
                        <MaterialCommunityIcons name="tag" size={35} color="black" />
                        <Text style={styles.statListText}>
                            {`£${price}`}
                        </Text>
                    </View>
                    <View style={styles.carImageContainer}>
                        <View style={styles.carImageInnerContainer}>
                            <Image style={styles.carImage}
                                source={{
                                    uri: carImageURL
                                }}
                            />
                        </View>

                    </View>
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        height: CARD_HEIGHT,
        //ios
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        //android
        elevation: 5,
    },
    containerInner: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 5,
        overflow: "hidden"
    },
    header: {
        position: "absolute",
        backgroundColor: "#212829",
        maxHeight: 70,
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        flexDirection: "row"
    },
    headerTextContainer: {
        flex: 2,
        justifyContent: "center",
        paddingLeft: 20
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "400",
        letterSpacing: 2,
        marginBottom: 5
    },
    headerSubText: {
        color: "#ccc",
        letterSpacing: 2,
        fontSize: 15
    },
    headerImageContainer: {
        flex: 1,
        justifyContent: "center"
    },
    carBrandImage: {
        height: 50,
        resizeMode: "contain",
    },
    body: {
        flex: 1,
        flexDirection: "row",
        marginTop: 70
    },
    carImageContainer: {
        flex: 2,
        justifyContent: "center"
    },
    carImageInnerContainer: {
        position: "absolute",
        height: 180,
        width: 300,
    },
    carImage: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: "contain"
    },
    statList: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    statListText: {
        color: "#000",
        letterSpacing: 2,
        fontSize: 15,
        paddingVertical: 8
    },
})
