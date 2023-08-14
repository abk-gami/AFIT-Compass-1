
import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import MapView, {PROVIDER_GOOGLE, Marker}  from 'react-native-maps';

const Images = [
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/hq.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
  { uri: "https://github.com/abk-gami/AFIT-mobile-img/blob/main/mark.jpg?raw=true" },
];

const { width, height } = Dimensions.get("window");

const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.9;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

export default class ExploreScreen extends Component {
  state = {
    markers: [
      {
        coordinate: {
          latitude: 10.608173,
          longitude:   7.439115,
        },
        title: 'AFIT Gate',
        description: 'Make sure you hold your I.D card',
        image: Images[0],
      },
      {
        coordinate: {
          latitude: 10.607917, 
          longitude:  7.441819,
        },
        title: 'AFIT HeadQuarters',
        description: 'No near here if you no dey wear shoe!!',
        image: Images[1],
      },
      {
        coordinate: {
          latitude: 10.608613, 
          longitude:  7.441985,
        },
        title: 'Yisa Doko Hall',
        description: 'Christians dey get fellowship here, some people dey also get lecture here',
        image: Images[2],
      },
      {
        coordinate: {
          latitude:   10.609006,
          longitude:    7.443825,
        },
        title: 'Ibrahim Alfa Auditorium',
        description: 'Una dey call am Alfa Hall',
        image: Images[3],
      },
      {
        coordinate: {
          latitude:    10.609766, 
          longitude:    7.442055,
        },
        title: 'AFIT Library',
        description: 'Shey I go need explain',
        image: Images[4],
      },
      {
        coordinate: {
          latitude:    10.608783,
          longitude:    7.442887,
        },
        title: 'Hangar',
        description: 'Just pray you no go write test for here!!',
        image: Images[5],
      },
      {
        coordinate: {
          latitude:    10.612020, 
          longitude:    7.440003,
        },
        title: 'LR C1',
        description: 'Hall C1',
        image: Images[6],
      },
      {
        coordinate: {
          latitude:     10.611956, 
          longitude:    7.439829,
        },
        title: 'LR C2',
        description: 'Hall C2',
        image: Images[6],
      },
      {
        coordinate: {
          latitude:      10.609830, 
          longitude:    7.440214,
        },
        title: 'I.O Amao Hall',
        description: 'Amao hall',
        image: Images[6],
      },
      {
        coordinate: {
          latitude:     10.609902, 
          longitude:    7.441011,
        },
        title: 'Souvenir Shop',
        description: '......',
        image: Images[6],
      },
      {
        coordinate: {
          latitude:     10.610482, 
          longitude:    7.444500 ,
        },
        title: 'Bush Canteen',
        description: '......',
        image: Images[6],
      },
      {
        coordinate: {
          latitude:     10.612931, 
          longitude:    7.445999, 
        },
        title: 'AFIT Clinic',
        description: '......',
        image: Images[6],
      },
    ],
    region: {
      latitude: 10.608173,
      longitude:   7.439115,
      latitudeDelta: 0.00001,
      longitudeDelta: 0.002131,
    },
  };

  componentWillMount() {
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount() {
    // We should detect when scrolling has stopped then animate
    // We should just debounce the event listener here
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if (this.index !== index) {
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  }

  render(){

    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        (index + 1) * CARD_WIDTH,
      ];
      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });
      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });
      return { scale, opacity };
    });
    return <View style={styles.container}>
      {/* <Text>Hello World</Text> */}
      <MapView
  ref={(map) => (this.map = map)}
  initialRegion={this.state.region}
  style={styles.container}
  mapType={'satellite'} 
  provider={PROVIDER_GOOGLE}
>
{
  this.state.markers.map((marker, index) => {
    const scaleStyle = {
      transform: [
        {
          scale: interpolations[index].scale,
        },
      ],
    };
    const opacityStyle = {
      opacity: interpolations[index].opacity,
    };
    return (
      <Marker key={index} coordinate={marker.coordinate}
      title={marker.title} 
      description={marker.description}>
        <Animated.View style={[styles.markerWrap, opacityStyle]}>
          <Animated.View style={[styles.ring, scaleStyle]} />
          <View style={styles.marker} />
        </Animated.View>
      </Marker>
    );
  })
}
</MapView>
<Animated.ScrollView
  horizontal
  scrollEventThrottle={1}
  showsHorizontalScrollIndicator={false}
  snapToInterval={CARD_WIDTH}
  onScroll={Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: this.animation,
          },
        },
      },
    ],
    { useNativeDriver: true }
  )}
  style={styles.scrollView}
  contentContainerStyle={styles.endPadding}
>
{
  this.state.markers.map((marker, index) => (
    <View style={styles.card} key={index}>
      <Image
        source={marker.image}
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.textContent}>
        <Text numberOfLines={1} style={styles.cardtitle}>
          {marker.title}
        </Text>
        <Text numberOfLines={1} style={styles.cardDescription}>
          {marker.description}
        </Text>
      </View>
    </View>
  ))
}
</Animated.ScrollView>
    </View>
    
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 10,
    backgroundColor: '#0a005b',
  },
  scrollView: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    paddingVertical: 10,
    // paddingLeft: 90,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    // width: 25,
    // height: 25,
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    alignItems: "center",
    justifyContent: "center",
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});