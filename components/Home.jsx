import React, { useRef } from 'react'
import { StyleSheet, Text, SafeAreaView, View, Dimensions, FlatList } from 'react-native'
import Card from './Card';
const windowWidth = Dimensions.get('window').width;


const dummyData = [{
    title: "Model S P100D",
    subtitle: "2017",
    brandImage: "https://www.carlogos.org/car-logos/tesla-logo-2200x2800.png",
    hp: "1000",
    price: "200,000",
    mainImage: "https://www.tesla.com/sites/default/files/images/design_yours/home-modal-models.png?20160720"
},
{
    title: "Corvette ZO6",
    subtitle: "2015 6.5 L",
    brandImage: "https://1000logos.net/wp-content/uploads/2020/03/Corvette-Logo.png",
    hp: "700",
    price: "100,000",
    mainImage: "https://media-dmg.assets-cdk.com/websites/content/gmps-selman//3094e27e09cc499eb0c650c3a42789fb.png"
}, {
    title: "M2 CS",
    subtitle: "2020",
    brandImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/1200px-BMW.svg.png",
    hp: "440",
    price: "69,000",
    mainImage: "https://images.carprices.com/pricebooks_data/usa/colorized/2021/BMW/View2/M2_Competition_Coupe/3.0L/212S_C33.png"
}];

const Home = () => {
    return (
        <>
            <View style={styles.header} />
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.headerText}>Page content</Text>
                    <View style={styles.headerSubTextContainer}>
                        <Text style={styles.headerSubText}>£600,000</Text>
                        <Text style={styles.headerSubText}><Text style={styles.headerSubTextWhite}>7</Text> Cars</Text>
                    </View>
                </View>
                {/* TODO: fill cards here */}
                <FlatList
                    style={styles.flatList}
                    data={dummyData}
                    showsVerticalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                    renderItem={({ item, index }) => (<Card
                        index={index}
                        key={item.index}
                        headerText={item.title}
                        subHeaderText={item.subtitle}
                        brandImageURL={item.brandImage}
                        horsepower={item.hp}
                        price={item.price}
                        carImageURL={item.mainImage}
                    />)}
                    keyExtractor={item=>item.index}
                />

            </SafeAreaView>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10
    },
    header: {
        position: "absolute",
        backgroundColor: "#636363",
        height: 300,
        width: windowWidth,
    },
    headerText: {
        color: "white",
        fontSize: 50,
        fontWeight: "bold",
        maxWidth: windowWidth / 1.5,
        letterSpacing: 5
    },
    headerSubText: {
        color: "#ccc",
        fontSize: 18,
        fontWeight: "normal",
        letterSpacing: 3
    },
    headerSubTextWhite: {
        color: "white"
    },
    headerSubTextContainer: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    flatList: {
        overflow: "visible",
        marginTop: 10
    }
});
